---
sidebar_position: 3
---

# Distributed Computing

The Shakudo Platform supports many distributed computing methods.

With more data collected and streamed for machine learning and data science, every machine learning team is looking at ways to scale up computation with more machines while cut down latency. Distributed computing frameworks like Dask, Ray, and Spark is designed to accomplish exactly this. In addition Rapids as an extension to CPU tools that further leverages GPUs to gain speed.

## Dask

[Dask](https://docs.dask.org/en/latest/) is a flexible open source distributed framework for parallel computing. It has similar APIs to Numpy and Pandas, is an ideal choice for parallelizing Numpy, Pandas and List based code.

Shakudo Platform comes with a number of useful APIs to make using Dask easy. See the [Hyperplane API page](/docs/shakudo-platform-features/api/dask.md) for a full list.

### Dask Collections

Dask collections are useful for large datasets because they support delayed tasks. We will explore three types&mdash; Dask bags, Dask dataframes, and Dask arrays. 

#### Dask bags

Dask bags (synonymous with multisets) are unordered collections of immutable objects. Below are some common operations:

Select records where:

```python
b.filter(lambda record: record['num_clicks'] > 2).take(2) 
``` 

```output
({'id': '01mz489cnkd',  
  'area': 'Aerial Alaska',  
  'num_clicks': 3,
  'info': {'a_field': 0}},  
 {'id': '25z48t9cfaf',  
  'area': 'Bustling Birktown',  
  'num_clicks': 5,
  'info': {'a_field': 1}})  
```

Select one field:
```python
b.map(lambda record: record['area']).take(2)
``` 

```output
('Aerial Alaska', 'Bustling Birktown')
```

Aggregate the number of records in your bag:

```python
b.count().compute()
``` 

``` output
100000
``` 

Note that the `.take(n)` function will return the first __n__ records from the bag, only in the first partition.

For more info, see [https://examples.dask.org/bag.html](https://examples.dask.org/bag.html)

#### Dask dataframes

Dask dataframes are collections of pandas dataframes. It can be used in cases where one pandas dataframe is too large to fit in memory and to speed up expensive computations by using multiple cores. 

To read multiple csvs, use the * or a list of files. Each file will be read into a separate partition.

    import dask.dataframe as dd
    df = dd.read_csv('2014-*.csv')

A common workflow is the following:

1. Load large datasets from files
2. Filter to a subset of data
3. Shuffle data to get an intelligent index
4. Perform queries or aggregations using the indices

For more information on Dask dataframes, see [https://docs.dask.org/en/latest/dataframe.html](https://docs.dask.org/en/latest/dataframe.html).

### Lazy calculations

Dask operates with __lazy__ collections, meaning operations on a collection are simply scheduled by the scheduler, but the actual calculation will not be triggered until explicitly called. At first, you will notice that dataframe operations or functions seem to happen almost instantaneously, but nothing will be calculated until one of the following is used:

* .persist()
* .compute()
* .load()

`.compute()` will trigger a computation on the Dask cluster without returning anything. You can use this if some of your functions include saving to a location.

`.persist()` will trigger a computation on the Dask cluster and store the results in ram. Use this sparingly, only if you need to use an intermediate collection, or after a computationally expensive operation such as index, groupby, etc.

`.load()` will trigger a computation on the Dask cluster when you are working with Dask xarrays.

For example, you can trigger all computations on your dataframe like the following:

```python
df = dask.df.read_parquet('file*.csv')
df = df[['col_a', 'col_b']]
df = df.drop_duplicates()
df = client.persist(df)
```

### Repartitioning

After a few computations, your Dask df may need to be repartitioned, due to the partition size-number tradeoff. Partitions that are too large will cause out of memory errors, while too many partitions will incure a larger overhead time for the schedule to process. See more on best practices at [https://docs.dask.org/en/latest/dataframe-best-practices.html](https://docs.dask.org/en/latest/dataframe-best-practices.html).

### Split out
Dataframe aggregation operations can get slow. Try to use `split_out` in aggregation operationg like groupbys to spread the aggregation work.

### Cheap vs. expensive computations

Examples of fast and cheap computations:

* Element-wise ops (addition, multiplication)
* Row-wise operations and filtering: `df[df.x > 0]`
* Joining Dask dfs along indexed fields, or joining with a one-partition Dask df
* Max, min, count, common aggregations (`df.groupby(df.x).y.max()`)
* isin: `df[df.x.isin([1, 2, 3])]`
* drop_duplicates
* groupby-apply on an index: `df.groupby(['idx', 'x']).apply(myfunc)`

Examples of slow and expensive computations (for this reason, it is often recommended to use persist your data after these steps for stability):

* setting an index: `df.set_index(df.x)`
* groupby-apply on non-index fields: `df.groupby(df.x).apply(myfunc)`
* joining two dataframes along non-index columns

### File types

#### parquet files
Parquet is a columnar storage format for Hadoop, which enables parallel reading and writing, and is most useful for efficiently filtering a subset of fields in a Dask df. 

#### avro files
Avro is a row-based storage format for Hadoop, which is most efficient if you intend to retrieve and use all fields or columns in the dataset. 

### Saving to cloud storage
Remember that new workers are spun up when use `.initialize_cluster()`, and they are destroyed on `cluster.close()`. This means you should ensure your intermediate and output files are saved in a cloud storage location that can be accessed outside of each node. 

This can be achieved through the following code example:

```python
gcp_project = YOUR_GCP_PROJECT
gcs_client = storage.Client(project=gcp_project)
bucket = gcs_client.get_bucket(bucket)
blob = bucket.blob(yourfile)
blob.upload_from_string(filename, content_type='application/x-www-form-urlencoded;charset=UTF-8')
```
### Choosing Dask workers and specs

If you are aiming for a specific pool, ensure that

`nprocs` x `nthreads` ≤ `cores_per_worker` ≤ the number of allocatable cores 

and

`nprocs` x `ram_gb_per_proc` ≤ allocatable ram.

For example, if you would like to use a `DASK_POOL_16_16` worker, you may want to choose the following cluser initialization

```python
nprocs = 5
nthreads = 3
ram_gb_proc = 2.4
``` 

**Rules of Thumb**
* For a job with aggregation (data transfer) choose a setup with a minimum of 10x the data size. Worker memory usage is about 10% initially. If at any point any worker’s memory usage exceeds 75%, the job is very likely to fail (see [Worker freeze policies](#worker-freeze-policies)).

* For a job that consists of only parallel-friendly operations (no sorting, shuffling, or moving large chunks of data), use more CPU (for example `16_16`, `32_32`). Otherwise use more memory (for example `16_128`).

* For a job that requires both huge data and a large number of tasks, split it into multiple jobs to avoid errors. For example, an optimized setting for 1TB group-by job is to split into 10 pieces (100GB each) and use 24 of `32_32` nodes. You can further convert the piece indicator to a parameter like `chunk_id` and convert the code into a pipeline job, then run 10 pipeline jobs concurrently to save more time.

Use the steps below to estimate how many nodes and workers you will need:

1. Check data size (uncompressed). For example, 100GB
2. Choose operation type to find a multiplier of memory: light (x4), medium (x8), heavy(x48). Multiply your data size from step 1 by this multiplier. For example, a group-by will be medium, which requires 100G x 8 ~ 800GB total memory
3. Use the number of tasks (heavy vs. light) to determine the number of nodes. If the sequence of operations has many tasks, (computationally heavy), use `32_32`. Otherwise use `16_128`. Multiply your required memory from step 2 by 32 or 128 depending on computation load. For example, 800GB/32GB = 25 nodes, or 800GB/128GB = 8 of `16_128` nodes. 

At this point, you should have an approximate Dask pool spec and number of workers. 

Add-on step: Setup automatic retry if in pipeline mode. Sometimes pipelines error out when spinning up nodes, or HTTP error, canceled error. These can be fixed by retrying.

#### Worker freeze policies
Below are the defaults for worker memory limits and actions to avoid memory blowup.

```
distributed:
  worker:
    memory:
      target: 0.60  # target fraction to stay below
      spill: 0.70  # fraction at which we spill to disk
      pause: 0.80  # fraction at which we pause worker threads
      terminate: 0.95  # fraction at which we terminate the worker
```

### Examples

#### Pandas to Dask.dataframe

Below are some common examples of converting pandas operations to dask-friendly code.

#### Column to_datetime

```python
# pandas to_datetime
import pandas as pd
df1['date'] = pd.to_datetime(df1['date'])

```

```python
# dask to_datetime
from dask import dataframe as dd
df1['date'] = dd.to_datetime(df1['date'])
```  

#### Dataframe groupby  

```python
# pandas groupby
df_metrics = df_metrics.groupby(pd.Grouper(timeframe='1day',
                                           closed='right',label='right')
                               ).agg({'id':pd.Series.nunique,
                                      'num_entries':'sum',
                                      'total_runs':'sum')
```

```python
# dask is exactly the same 
df_metrics = df_metrics.groupby(pd.Grouper(timeframe='1day',
                                           closed='right',label='right')
                               ).agg({'id':pd.Series.nunique,
                                      'num_entries':'sum',
                                      'total_runs':'sum')
```

#### Get dummies 

The following example features a more complicated groupby; get_dummies will explode in dimension with large amount of data (i.e. possibly explode the data into many columns)

```python
# pandas version do dummies first then groupby time interval to get aggrgation per time interval
dfr= pd.get_dummies(df,['col_a','col_b','col_c'])
dfr = dfr.merge(df['date'],right_index=True,left_index=True)
dfr = dfr.sort_values(by='date')
dfr = dfr.groupby(pd.Grouper(timeframe='1day',closed='right',label='right')).sum()
```

```python
# dask version do value counts instead of getting dummies, and do pivot after groupby
def agg_func(df: pd.DataFrame, timeframe: str, ts_col: str, sec_id: str, target_col:str) -> pd.DataFrame:
    """
    function that group data by required timeframe for one target column
    df: dataframe to be aggregated  
    timeframe: aggregation timeframe
    ts_col: column name of the index
    sec_id: column name of a secondary id
    target_col: target column name for processing e.g. col_a
    """
    df = df.groupby([sec_id, ts_col,target_col]).size().reset_index().set_index(ts_col)
    df.columns = [sec_id, target_col,'count']
    df_agg = df.groupby(pd.Grouper(timeframe=timeframe, closed='right', label='right')).apply(
        lambda x: x.groupby(target_col).agg({'count': 'sum'})).reset_index()
    return df_agg


meta_df = agg_func(df.head(10), timeframe, ts_col, sec_id, target_col).dtypes.to_dict()
df = df.map_partitions(agg_func, timeframe, ts_col, sec_id, target_col,  meta = meta_df)
df.columns = [ts_col, target_col, 'count']

# further groupby session_ts and event as there will be duplicates among partition
df = df.groupby([ts_col, target_col]).agg({'count': 'sum'})

# create pivot table for end results
df = df.reset_index()
df = df.pivot_table(values="count", index=ts_col, columns=target_col)
df.columns = [target_col+'_'+i for i in list(df.columns)]
```

#### Dask map

The following example optimizes a function that reads a list of files one by one.

```python
## this snippet reads a list of files one by one

import xarray as xr
import gcsfs

fs = gcsfs.GCSFileSystem(project='myproject', token=None)
files_list = ['file1', 'file2', 'file3', 'file4']

gcsmap = gcsfs.mapping.GCSMap(f'gs://my-bucket/{files_list[0]}', gcs=fs)
Glob = xr.open_zarr(store=gcsmap).load()

## add other datasets sequentially
for filepath in files_list[1:]:
    gcsmap = gcsfs.mapping.GCSMap(f'gs://my-bucket/{filepath}', gcs=fs)
    ds = xr.open_zarr(store=gcsmap).load()
    Glob = xr.merge([Glob, ds], compat="no_conflicts", combine_attrs = "no_conflicts") 
```

```python
## in dask, create a function to read one file, then use client.map the function and list of files
import xarray as xr
import gcsfs

fs = gcsfs.GCSFileSystem(project='myproject', token=None)
files_list = ['file1', 'file2', 'file3', 'file4']

def read_files(gsfilepath):
    gcsmap = gcsfs.mapping.GCSMap(f"gs://my-bucket/{gsfilepath}", gcs=fs)
    ds = xr.open_zarr(store=gcsmap).load().persist()
    return ds

dss = client.map(read_files, files_list)
ds_list = client.gather(dss)
print(len(ds_list)) # output: 4
Glob = xr.merge(ds_list, compat="no_conflicts", combine_attrs = "no_conflicts")
```


#### Parallel training and preprocessing on dask
Sklearn training can be easily converted to distributed training with dask using joblib. 

```python
import joblib

with joblib.parallel_backend('dask'):
    grid_search.fit(X, y)
```

Many sklearn preprocessing modules (e.g. OneHotEncoder, Categorize, StandardScaler, etc.), models (NaiveBayes, xgboost, clustering, etc.), and model selection utilities (KFold, train_test_split, etc.) have dask equivalents. 

See [https://ml.dask.org/index.html](https://ml.dask.org/index.html) for full list of equivalents.

## Ray

[Ray](http://ray.io/) is an distributed frameworks open source project that has a more support for deep learning and reinforcement learning. It has a rich set of libraries and integrations built on a flexible distributed execution framework, is ideal choice for parallelizing model training and hyper-parameter tuning.


## Spark

[Apache Spark](https://spark.apache.org/) is an open source platform for large-scale SQL, batch processing, stream processing, and machine learning. PySpark is the python API for Spark and in the recent releases PySpark adopted more Pandas like APIs. Spark is great for data processing especially for the computations that involves shuffling joining type of operations.

Shakudo Platform provides simple APIs to use Spark on distributed Ray clusters using RayDP. RayDP combines your Spark and Ray clusters, making it easy to do large scale data processing using the PySpark API and seemlessly use that data to train your models using TensorFlow and PyTorch.

### Initializing a distributed Ray cluster for Spark

Initialize a distributed Ray cluster as usual using the following:

```python
from hyperplane.ray_common import initialize_ray_cluster
ray_cluster = initialize_ray_cluster(
    num_workers = 4, 
    cpu_core_per_worker = 15, 
    ram_gb_per_worker = 12
    )
```

num_workers (int) is the number of Ray nodes to be initialized cpu_core_per_worker (int) is the number of CPU cores in each Ray node ram_gb_per_worker (float) is the memory size in GB for each Ray node Read more about Ray and Ray on Shakudo Platform.

### Start a Spark session

```python
spark = raydp.init_spark(
    'example', 
    num_executors=2, 
    executor_cores=4, 
    executor_memory='4G'
    )
```

### Use PySpark
Once the Spark session is initialized, you can use pyspark as ususal from here on. The latest RayDP supports PySpark 3.2.0+, which provides simple Pandas-like APIs.

```python
import pyspark.pandas as pd
df = pd.read_csv("data.csv")
```

### Shutdown a Ray cluster

After computation is finished, it's a good idea to shutdown the distributed cluster and release the resources back to the node pool. If any Ray nodes are left hanging, Shakudo Platform's garbage collection function will also automatically shutdown the Ray workers when the Jupyeter session or job is finished. You can add this line to the end of your code to shutdown the Ray nodes.

```python
stop_ray_cluster(ray_cluster)
```

<!-- More examples: 
- Spark on Ray example uses Spark on Ray to process data on Shakudo Platform. 
- Spark3.2.0 example uses Pandas-like APIs to process data. -->

## RAPIDS

[Rapids](https://rapids.ai/) is a suite of open source libraries and APIs for doing data science on GPUs. Rapids can speed up common computation by 50x and has similar APIs to Pandas, Numpy and Scikit-learn and support multi-GPU scale up. They are very useful in significantly speed up long-running preprocessing loads. 

### Get started

1. Start by spinning up a [Session](/docs/shakudo-platform-features/sessions.md) with the GPU session type.

2. Initialize cluster with GPUs

On the Sessions GPU image, you can scale up a Dask cluster with GPUs by adding `ngpus=1` to the cluster initialization. 

```python
client, cluster = nc.initialize_cluster(
    nprocs=1,
    nthreads=8,
    ram_gb_per_proc=7,
    cores_per_worker=2,
    num_workers = 2,
    ngpus = 1,
    scheduler_deploy_mode="local"
)
```

3. Once the Dask cluster is spun up use the RAPIDS library by import importing relevant packages. For example `dask_cudf`

```
df = dask_cudf.read_csv(file_path, assume_missing=True)
```






