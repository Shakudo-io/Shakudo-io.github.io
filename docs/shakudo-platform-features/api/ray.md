---
sidebar_position: 2
---

# Ray
[Ray](https://ray.io/) is an open source project that distributed frameworks that has a more support for deep learning and reinforcement learning. It has a rich set of libraries and integrations built on a flexible distributed execution framework, is ideal choice for parallelizing model training and hyper-parameter tuning.

## Ray_Common
`ray_common` is part of the Shakudo Platform Hyperplane API that contains convenience functions to manage Ray clusters. We support extensions to the basic Ray framework by supporting Ray Tune, Ray Spark, Ray with RAPIDS, and more.

## `quickstart_ray()`

Use `quickstart_ray` to quickly spin up a Ray cluster using [t-shirt sizes](/docs/shakudo-platform-features/api/dask.md/#worker-pools) (Sizes are the same as quick start for Dask clusters).

```python
from hyperplane import ray_common as rc
ray_cluster = rc.quickstart_ray(
    num_workers = 4, 
    size = 'hyperplane-med-high-mem'
)
```

**Parameters**

| Name             | Type         | Description    |
| :----------------| :----------- | :--------------------------------------------- |
| num_workers   <div class="label basic required">Required</div>  | integer      | Number of workers  |
| size          <div class="label basic required">Required</div>  | object       | [Pre-configured worker pools](#worker-pools)    |  

---

<a name="initialize-ray-cluster"></a>

## `initialize_ray_cluster()`

Initialize a distributed Ray cluster with ease and more customizability. You can also run this function to clean up the Ray nodes and re-initialize.

```python
from hyperplane import ray_common as rc
ray_cluster = rc.initialize_ray_cluster(
    num_workers = 4, 
    cpu_core_per_worker = 4, 
    ram_gb_per_worker = 4, 
    n_gpus = 0
    )
```

** Parameters **

| Name                  | Type      | Description    |
| :---------------------| :---------| :--------------------------------------------- |
| num_workers           | integer   | (Default value: 2) Number of Ray nodes to be initialized  |
| cpu_core_per_worker   | integer   | Number of CPU cores in each Ray node    | 
| ram_gb_per_worker     | float     | Memory size in GB for each Ray node  | 
| n_gpus                | integer   | Number of Nvidia GPUs in each Ray node (if `n_gpus > 0`, `cpu_core_per_worker` and `ram_gb_per_worker` are ignored)| 
| use_existing          | boolean   | (Default: `use_existing = False`) Whether to connect to/ reinitialize existing Ray cluster or spin up a new one| 

:::note
If you are aiming for a specific pool, ensure your `cpu_core_per_worker` = the number of allocatable cores and `ram_gb_per_worker` = the allocatable ram. For example, if you would like to use a POOL_16_16 worker, you may want to use the following cluster initalization

```python
from hyperplane import ray_common as rc
ray_cluster = rc.initialize_ray_cluster(
    num_workers = 4, 
    cpu_core_per_worker = 15, 
    ram_gb_per_worker = 12
    )
```
:::

---

## `stop_ray_cluster()`

Use `stop_ray_cluster` to shutdown a Ray cluster. After computation is finished, it's a good idea to shutdown the distributed cluster and release the resources back to the node pool. If any Ray nodes are left hanging, Shakudo Platform's garbage collection function will also automatically shutdown the Ray workers when the Session or job is finished. 

```python
from hyperplane import ray_common as rc
rc.stop_ray_cluster(ray_cluster)
```

** Parameters **

| Name                  | Type      | Description    |
| :---------------------| :---------| :--------------------------------------------- |
| ray_cluster <div class="label basic required">Required</div>| object    | Ray cluster to shutdown |

---

## `get_ray_cluster()`

Reconnect to a Ray cluster by using the `get_ray_cluster` to retrieve the cluster. You can use this function if you've already spun up a Ray cluster and want to connect to the same cluster (for example: in another notebook in the same session). This function will connect to an existing cluster. There are two ways to reconnect to Ray clusters.  

```python
from hyperplane import ray_common as rc
rc.get_ray_cluster(extra_workers = 1)
```

** Parameters **

| Name                | Type      | Description    |
| :-------------------| :---------| :--------------------------------------------- |
| extra_workers       | integer   | Adds nodes to your existing cluster (Default: `extra_workers = 0`) The nodes that are added to the cluster will be of the same specification as the original cluster. |

There are two ways to reconnect to Ray clusters. The method using the function `get_ray_cluster()` is the simpler and recommended way. 

You can also use the `initialize_ray_cluster()` to accomplish the same. Note, the arguments for `cpu_core_per_worker` and `ram_gb_per_worker` must be the same as when you initialized the cluster originally.

```python
from hyperplane import ray_common as rc
ray_cluster = rc.initialize_ray_cluster(
    num_workers = 0, 
    cpu_core_per_worker = 15, 
    ram_gb_per_worker = 12,
    use_existing = True
    )
```

---

## `find_ray_workers`

Use `find_ray_workers()` function to see if there are any Ray workers already spun up. Returns a list of Ray workers running.

```python
from hyperplane import ray_common as rc
rc.find_ray_workers()
```
