---
sidebar_position: 2
---

# Develop with Hyperplane API 

## Notebook_Common
`notebook_common` is part of the Shakudo Platform Hyperplane API that contains convenience functions for Dask and pipeline jobs.
It contains functions to manage Dask clusters, pipeline jobs, and Slack messages, and GraphQL operations.

### Dask
[Dask](https://dask.org/) is a flexible open source distributed framework for parallel computing. It has similar APIs to Numpy and Pandas, is an ideal choice for parallelizing Numpy, Pandas and List based code.

### `quickstart_dask()`

Use `quickstart_dask` to quickly spin up a Dask cluster using t-shirt sizes. Returns a tuple [Client, KubeCluster].

```python
from hyperplane.notebook_common import quickstart_dask
client, cluster = quickstart_dask(
    num_workers = 4, 
    size = 'hyperplane-med-high-mem'
)
```

**Parameters**

| Name             | Type         | Description    |
| :----------------| :----------- | :--------------------------------------------- |
| num_workers   <div class="label basic required">Required</div>  | integer      | Number of workers  |
| size          <div class="label basic required">Required</div>  | string       | [Pre-configured worker pools](#worker-pools)    |  

<br />

<a name="worker-pools"></a>

**Pre-configured Worker pools**

The preconfigured worker pools are the following

| Name                          | Worker Pool  | Allocatable cores    | Allocatable ram     |
| :-----------------------------| :----------- | :------------------- |:------------------- |
| hyperplane-xs-high-mem        | POOL_4_32    | 3.5                  |7.0                  |
| hyperplane-small              | POOL_8_8     | 7.0                  |5.0                  |
| hyperplane-small-mid-mem      | POOL_8_16    | 7.5                  |12.0                 |
| hyperplane-small-high-mem     | POOL_8_64    | 7.5                  |58.0                 |
| hyperplane-med                | POOL_16_16   | 15.0                 |12.0                 |
| hyperplane-med-mid-mem        | POOL_16_32   | 15.0                 |27.0                 |
| hyperplane-med-high-mem       | POOL_16_128  | 15.0                 |110.0                |
| hyperplane-large              | POOL_32_32   | 28.0                 |27.0                 |
| hyperplane-xxl-high-mem       | POOL_96_768  | 94.0                 |675.0                |




---

### `initialize_dask_cluster()`

Initialize a distributed DASK cluster. Returns a tuple [Client, KubeCluster]. You may use the returned client and cluster like any other dask cluster.

```python
from hyperplane.notebook_common import initialize_dask_cluster
client, cluster = initialize_dask_cluster(
    num_workers:int=2, 
    local_mode:bool=False, 
    worker_spec_yaml:str=WORKER_SPEC_TEMPLATE_1_1, 
    timeout:int=1200, 
    nthreads:int=1, 
    nprocs:int=15, ram_gb_per_proc:float=0.7, 
    cores_per_worker:int=15, 
    scheduler_deploy_mode:str="remote", 
    dashboard_port:str="random", 
    logging:str="quiet" 
  )
```

** Parameters **

| Name                  | Type      | Description    |
| :---------------------| :---------| :--------------------------------------------- |
| num_workers           | integer   | (Default value: 2) Number of Dask worker nodes.  |
| local_mode            | bool      | Whether to use local cluster or distributed KubeCluster   | 
| worker_spec_yaml      | string    | A string yaml for cluster configs    | 
| timeout               | integer   | Time limit (seconds) for a scheduler to wait to connect before returning a timeout error   | 
| nthreads              | integer   | Number of threads per worker in your cluster    | 
| nprocs                | integer   | Number of processes per worker in your cluster    | 
| ram_gb_per_proc       | float     | GB of Ram per process, per worker  | 
| cores_per_worker      | integer   | Number of cores per worker    | 
| scheduler_deploy_mode | string    | Where to deploy the scheduler (remote in its own worker, or locally in jhub). Choose remote when the Dask graph   | 
| dashboard_port        | string    | Choose a port number for your dashboard, or leave as "random" to have a random port, which will not conflict  | 
| logging               | string    | Logging level for printouts when initializing. Available options are `verbose` or `quiet`.  | 

:::note
The number of dask workers in the cluster will be the `num_workers` x `num_procs`. Shakudo platform will automatically choose the closest pool from the [pre-configured node pool](#worker-pools) based on the combination of parameters specified. 
:::

**Example**

```python
from hyperplane import notebook_common as nc
client, cluster = nc.initialize_dask_cluster(num_workers=2)
```

```python
from hyperplane import notebook_common as nc
client, cluster = nc.initialize__dask_cluster(
  num_workers=2,
  nthreads=1,
  nprocs=15,
  ram_gb_per_proc=0.7,
  cores_per_worker=15
)
```

:::danger Important Note

`initialize_cluster()` is an equivalent function to `initialize_dask_cluster()`. `initialize_cluster()` is an older version and may be depricated in the future.

:::

---

### `daskpool_candidates`

Use `daskpool_candidates` when you'd like to access the [list of available dask pools](#worker-pools) to choose from to spin up a Dask cluster.


```python
candidates = nc.daskpool_candidates
candidates
```

---

### `get_dask_cluster()`

Retrieve a Dask cluster. Use this function if there's a Dask cluster that's already spun up that you would like to connect. 

```python
from hyperplane import notebook_common as nc
client = nc.get_dask_cluster("dask_cluster_name")
client
```

** Parameters **

| Name                  | Type      | Description    |
| :---------------------| :---------| :--------------------------------------------- |
| dask_cluster_name     | string    | Name of Dask cluster  |

To retrieve the Dask cluster name, navigate to the Ray & Dask tab on the platform and click the copy button in 
the table column Cluster Name.

<!-- ![Dask cluster Name](img/dask_cluster_name.png) -->

---

### `cluster.close()` & `client.close()`

Use `cluster.close()` and `client.close()` to destroy or shut down a dask cluster after it is no longer needed to free up resources. The platform comes with an automatic garbage collection functionality - if you forget to close the cluster the platform will automatically close it after a few minutes of idle time.

Starting a cluster and shutting it down:

```python
from hyperplane import notebook_common as nc
client, cluster = nc.initialize_dask_cluster(num_workers=2)

cluster.close()
client.close()
```

Retrieving a forgotten Dask cluster and closing it:

```python
from hyperplane import notebook_common as nc
client = nc.get_dask_cluster("dask-cluster-with-some-random-hash")

cluster.close()
client.close()
```

---

### `client.restart()`

Use `client.restart` whenever you want to clean up dask memory. 

```python

client.restart()

```

:::note
Dask remembers every line of code that was run since initializing the cluster. If you'd like to edit a line of code after it's already been run once, then restart the dask client to ensure that the script runs smoothly.
:::

---

### Pipeline Jobs

There are many ways pipeline jobs can be controlled: dashboard interface, GraphQL Playground, and Hyperplane API notebook_commons. You can submit, cancel, get output, and check status on jobs from your Sessions. 

### `submit_pipeline_job`

Use this function to submit a job from your Sessions. See Create a pipeline for details on submission query fields. The function returns a job id and runID. 

Navigate to the Shakudo Platform Jobs tab and filter by the returned job ID if you'd like to check that the job has been successfullly submitted.

```python
from hyperplane import notebook_common as nc
newjob = await nc.submit_pipeline_job(
  jobName = 'name_of_newjob',
  pipelineYamlPath = 'yaml_path.yaml',
  jobType = 'basic',
  timeout = 1800,
  active_timeout = 1800,
  max_retries = 2,
  parameters = {
    "a":1,
    "b":1
  }
)
newjob
```

** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| jobName             | string    | custom name for your job  |
| pipelineYamlPath <div class="label basic required">Required</div>| integer   | (Default value: 2) Number of Dask worker nodes.  |
| jobType             | string     | Job (podspec) type to use   | 
| timeout             | integer    | Maximum time that the pipeline may run, starting from the moment of job submission | 
| active_timeout      | integer    | Maximum time that the pipeline may run once it is picked up | 
| max_retries         | integer    | Number of times to retry the job if the job run has failed or timed out. | 
| parameters          | dictionary | Key value pairs for any parameters in your script you'd like to overwrite for this pipeline job | 

---

### `checkjobs()`
Check status on jobs using job IDs. Returns a summary of job status and links to Dask dashboards if Dask is used.

```python
ids = ['a-job-id', 'another-job-id']
res = await nc.checkjobs(ids, loop = True)
print(res)
```

Output will look like the following:

```python
#### Jobs summary
0 / 2 in progress

0 / 2 pending

2 / 2 processed

2 done | 0 timed out | 0 cancelled | 0 failed

Progress: 100.0%

#### Dask dashboards
a-job-id done None
another-job-id done None
```

** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| ids <div class="label basic required">Required</div> | list    | List of job IDs to check status |
| loop                | boolean   | (Default value: False) `True` will refresh the output every 5 seconds until all jobs are processed |
| interval            | integer   | Refresh frequency for `loop = True` |

---

### `cancel_pipeline_jobs()`

Use `cancel_pipeline_jobs()` to cancel a pipeline job from Sessions. Returns `{'id': 'job-id', 'status': 'cancelled}`

```python
await nc.cancel_pipeline_job('job-id')
```
** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| jobID <div class="label basic required">Required</div> | string    | ID of pipeline job to cancel |

<!-- ---

### `set_current_job_output()`

For scheduled jobs, you may want to store values from previous or get the output from the current run.

```python
nc.set_current_job_output("message in str")
```

** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| s                   | string     | ID of pipeline job to cancel |
| verbose             | boolean    | Logging. Default is `False` |

:::danger
NEED MORE INFO HERE
:::

---

Get previous job output to a value in scheduled jobs
`get_previous_job_runs()`

:::danger
NEED MORE INFO HERE
:::


---

### `get_a_job_output()`

Use this function to get a pipeline job's output using jobID.

```python
nc.get_a_job_output('some-job-id')
```

** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| jobID <div class="label basic required">Required</div> | string    | ID of pipeline job to cancel |

---

Get current job output
`get_current_job_output`

:::danger
NEED MORE INFO HERE
::: -->

---

### GraphQL

Submit a GraphQL query using `graphql_operations()` function.

Example for submitting a job
```python
gql_query = '''    
  mutation {
      createShakudoPipelineJob(
          jobName: "unruffled_ardinghelli",
          jobType: "basic",
          timeout: 1800,
          activeTimeout: 1800,
          maxRetries: 2,
          pipelineYamlPath: "yaml_path.yaml",
          defaultCommands: true,
          gitInit: true,
          commitId: "",
          branchName: "",
          parameters: { create: [
            { key: "a", value: "1" },
              ]}  
      ) {
          id
          jobName
          schedule
          parameters {
              key
              value
          }
          noGitInit
          noHyperplaneCommands
      }
  }
  '''
  gql_queries = [gql_query]
  results = await nc.graphql_operation(gql_queries)
```

** Parameters **

| Name                                                         | Type                  | Description    |
| :------------------------------------------------------------| :---------------------| :----------------------------------- |
| gql_queries <div class="label basic required">Required</div> | Union[str, List[str]] | GraphQL query for relevant operation |

---

## Ray_Common
`ray_common` is part of the Shakudo Platform Hyperplane API that contains convenience functions to manage Ray clusters. We support extensions to the basic Ray framework by supporting Ray Tune, Ray Spark, Ray with RAPIDS, and more.

### Ray
[Ray](https://ray.io/) is an open source project that distributed frameworks that has a more support for deep learning and reinforcement learning. It has a rich set of libraries and integrations built on a flexible distributed execution framework, is ideal choice for parallelizing model training and hyper-parameter tuning.

### `quickstart_ray()`

Use `quickstart_ray` to quickly spin up a Ray cluster using [t-shirt sizes](#worker-pools) (Sizes are the same as quick start for Dask clusters).

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

### `initialize_ray_cluster()`

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

### `stop_ray_cluster()`

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

### `get_ray_cluster()`

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

### `find_ray_workers`

Use `find_ray_workers()` function to see if there are any Ray workers already spun up. Returns a list of Ray workers running.

```python
from hyperplane import ray_common as rc
rc.find_ray_workers()
```

---

## Utils

### `get_service_url`
The `get_service_url` function will return the internal service URL for a running service on the platform. This is useful when another service or job uses an existing service. Using the internal service URL allows bypassing the authentication and lowers latency.

```python
from hyperplane import utils
import requests
model_inference_url = utils.get_service_url('model_inference_endpoint')
requests.get(model_inference_url)
```

### Slack

Shakudo's Hyperplane API includes a function allowing jobs to post messages to your Slack channel. You can use this to notify you of finished jobs, or even to post job results. On Shakudo there are two ways to send Slack notification messages: Use a slack token or use a webhook.

**Method 1: Slack token**
To use the Slack alert integration you first need to set up a Slack token.

A slack token can be set up following [this tutorial on Slack](https://api.slack.com/tutorials/tracks/getting-a-token) by creating a quick pre-configured App. Once the App is created and installed to the workspace, the token can be found at the `Install App` tab in the App's homepage. The token looks like this `xoxb-694301530724-2549825675367-Zn4NNP34r3c7aN3EkPDLMiNX`

**Method 2: Slack Webhook URL**

To send messages to Slack with webhooks, first follow [this tutorial on Slack](https://slack.com/intl/en-ca/help/articles/115005265063-Incoming-webhooks-for-Slack#set-up-incoming-webhooks) to create a new Slack App and obtain the webhook URL like this `https://hooks.slack.com/services/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`

:::note
You can also ask the Shakudo Platform admin to add or change the WEBHOOK_URL variable in your environment permanently.
:::

### `SlackHelper`
Initialize a Slack Helper object after specifying your Slack token.

**Method 1: Token method**
```python
#Specify your Slack token
import os
os.environ["SLACK_TOKEN"] = "your-slack-t0ken"

#Initialize Slack Helper
from hyperplane import utils
sh = utils.SlackHelper()
```

:::note
When using Method 2: Slack Webhook URL then you do not need to initialize SlackHelper. Just add the webhook URL as an environment variable.

```python
import os
os.environ['WEBHOOK_URL']='your_webhook_url'
```
:::

---

### `post_message`

Post a Slack Message with Slack Token.

**Method 1: Token method**
```python
from hyperplane import utils
sh = utils.SlackHelper()
sh.post_message('Testing!', '#some-channel')
```

**Method 2: Webhook method**
```python
#Post a message
from hyperplane import utils
utils.post_message('Testing!', '#some-channel')
```

** Parameters **

| Name                | Type      | Description    |
| :-------------------| :---------| :--------------------------------------------- |
| message  <div class="label basic required">Required</div> | string    | String of message to send (can include formatting)|
| channel             | string    | (Default: "") A public channel to post the `message`. If left empty, it will default to the webhook URL's default channel|

---

### `post_table()`

Post a Slack Message in table format with Slack Token.

**Method 1: Token method**
```python
from hyperplane import utils
sh = utils.SlackHelper()

message_dict = {
  "key1": "value1",
  "key2": "value2"
}
sh.post_table(message_dict, channel = "alert-channel")
```

**Method 2: Webhook method**
```python
from hyperplane import utils

message_dict = {
  "key1": "value1",
  "key2": "value2"
}
sh.post_table(message_dict, channel = "alert-channel")
```

** Parameters **

| Name                | Type      | Description    |
| :-------------------| :---------| :--------------------------------------------- |
| message_dict  <div class="label basic required">Required</div> | dictionary    | Dictionary of values to send in a table format|
| channel             | string    | (Default: "") A public channel to post the msg. If left empty, it will default to the webhook URL's default channel|

---

## Develop with Crypto_API
Shakudo's Crypto API includes functions to help ease the access and usability of web3 on-chain data. Currently Shakudo offers several functions within the Crypto API package as well as indexed on-chain data for Solana and integration with CCXT library. 

## Account setup
First you need to create an account by following the steps below.

```python
import crypto_api as api

token = api.signup("demo")
print("Our unique token:", token)
```

## Transaction Tracking
With Shakudo's crypto_api you can subscribe get notifications whenever there's events belonging to a specific address as a webhook. 

```python
r = api.subscribe(chain="eth", address=shiba, webhook_url=webhook_url, token=token)
```
** Parameters **

| Name                                                        | Type      | Description    |
| :-----------------------------------------------------------| :---------| :--------------------------------------------- |
| chain  <div class="label basic required">Required</div>     | string    | String for which chain address you'd like to subscribe to Options are [`eth`, `bsc`,`polygon`]|
| address  <div class="label basic required">Required</div>   | string    | Address to track|
| webhook_url <div class="label basic required">Required</div>| string    | Webhook URL to recieve notifications|
| token<div class="label basic required">Required</div>       | string    | The token generated at [account setup](#account-setup) step|

For example: subscribe to SHIBA transactions on Ethereum, and we will recieve the streamed data at https://webhook.site/e536b5fa-d98e-4fa2-9454-2a8ae57631b9
```python
shiba = "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
webhook_url = "https://webhook.site/e536b5fa-d98e-4fa2-9454-2a8ae57631b9"

# chain can be one of eth, polygon, bsc, mumbai
r = api.subscribe(chain="eth", address=shiba, webhook_url=webhook_url, token=token)
r
```
<!-- ## Indexed Data -->


## CCXT
[CCXT - CryptoCurrency eXchange Trading Library](https://github.com/ccxt/ccxt) is a JavaScript / Python / PHP library for cryptocurrency trading and e-commerce with support for many bitcoin/ether/altcoin exchange markets and merchant APIs. CCXT Supports unified APIs to access marketing data and OrderBook data on over 100 Crypto exchanges including the most popular ones such as Binance, FTX, Coinbase, Kraken, Kucoin and etc.

[CCXT.Pro](https://ccxt.pro/) is the paid professional version of CCXT and it's offered to Shakudo Platform users for free and it's fully integrated with the Shakudo Platform. Compared to the basic CCXT, CCXT.Pro provides WebSocket APIs to enable real-time high frequency trading and ensure efficiency, higher speeds, and lower latencies.

### Typical work flow
Shakudo Platform is fully integrated with the pro version of [CCXT](https://github.com/ccxt/ccxt), making it an ideal platform to build and deploy trading bots. Below is a typical workflow of building a Crypto trading App:

1. Start a Shakudo Platform Sessions with the `Crypto` image to write a trading script using `web3` to access blockchain data and `ccxt.pro` to exchange markets and APIs.
2. Use distributed data processing such as Dask, Ray to process Order Book data.
3. Build a frontend app to visualize the trades with built-in tools such as Streamlit.
4. Deploy a Shakudo Platform service with the trading script and the frontend app, read more about deploying a Shakudo Platform service.

---

## NLP models

Hyperplane comes with some pre-packged NLP models for common tasks. The hyperplane nlp tools can be accessed through

```python
from hyperplane import hyper_nlp as nlp
```

### Extract topics and themes

Find the main topics and themes with the function `get_topics()` given a list of sentences, documents, or texts.

Returns: Topic_Model, List[str]

```python
get_topics(data:List[str], ntopic:int=10, sample_size:int=50000, method:str="USE" )
```
** Parameters **

| Name                                                    | Type      | Description    |
| :-------------------------------------------------------| :---------| :--------------------------------------------- |
| data <div class="label basic required">Required</div>   | List[str] | A list of strings (sentences or phrases) from which you want to discover topics and themes |
| ntopic                                                  | integer   | The number of topics/themes to return |
| sample_size                                             | integer   | The number of samples to discover topics from |
| method                                                  | string    | The method for theme extraction. Choose from `TFIDF`, `LDA`, `BERT`, `LDA_BERT`, `fasttext`, `USE`|

Example: 

```python
%matplotlib inline ## use this in a notebook to display charts

nlp.get_topics(["I need to buy some green and red apples.", 
                "Oranges are also useful for juices", 
                "I really like bananas and fruits", 
                "You need to clean up your car.", 
                "I am running out of out of gas"], 
               ntopic=2, 
               sample_size=50,
               method="USE"
              )
```

The function will return the topic model and a list of top words per cluster:

```python
(<topic_discovery.Topic_Model at 0x7f88abc8e9a0>,
 array([['out', 'of', 'I', 'am', 'running', 'gas', 'You', 'need', 'to',
         'clean'],
        ['I', 'and', 'Oranges', 'are', 'also', 'useful', 'for', 'juices',
         'need', 'to']], dtype=object))

```

### Extract text

With the function `extract_qa()` when given some text, you can ask a question to extract an arbitrary field. 

Returns: List[Dict]

```python
from hyperplane import hyper_nlp as nlp
nlp.get_topics(data:List[str], ntopic:int=10, sample_size:int=50000, method:str="USE" )
```

** Parameters **

| Name                                                    | Type      | Description    |
| :-------------------------------------------------------| :---------| :--------------------------------------------- |
| text <div class="label basic required">Required</div>   | string    | Context string which the answer will be extracted from |
| question<div class="label basic required">Required</div>| string    | A question that you want to ask based on the context |
| topk                                                    | integer   | The number of top answers to return per question |
| return_context                                          | boolean   | Whether or not to return context around the answer|
| context_window                                          | integer   | If `return_context` how much of the context to return|

Example: 

```python
text = '''
Hyperplane  is an end-to-end platform designed to take AI teams from ideation to production at breakthrough speeds. We built Hyperplane because we needed a powerful platform for our scientists to design, develop, deploy and maintain their own work in production.

Why Us?

The Shakudo team grew out of advanced AI organizations across the industry. After having seen, tried and used every product out there, we came to the conclusion that there is a gap to be filled, and Hyperplane was born.

What does this mean for you?

If you are scaling up an AI organization, starting up an AI-powered product, or looking to get your existing solutions faster and more reliably to production, Hyperplane may be for you.
'''

questions = [
    "What does Hyperplane do?"
]

nlp.extract_qa(text, questions[0])
```

This will return: 

```python
[{'score': 0.04723832756280899,
  'start': 51,
  'end': 115,
  'answer': 'take AI teams from ideation to production at breakthrough speeds'}]
```

### Save and load

To save serializable models, you can use the following:

```python
nlp.save_model(model=tm, filename="tm_model")
```

where `tm` is a serializable object. 

To load an existing model saved with hyper_nlp, use the following:

```python
loaded_model = nlp.load_model(filename='tm_model')
```

### Find urls

Use the function `find_urls()` to look for strings that are urls

Returns: List[str]

```python
nlp.find_urls(s:str)
```

**Parameters**

| Name                                               | Type      | Description    |
| :--------------------------------------------------| :---------| :--------------------------------------------- |
| s <div class="label basic required">Required</div> | string    | A string from which you would like to search for urls |

### Remove stopwords
Use the function `clean_text()` to remove stopwords from a string of text.

Returns a string with stopwords removed.

```python
nlp.clean_text(s:str, remove_list:List[str]=en_stop_words)
```

**Parameters**

| Name                                               | Type      | Description    |
| :--------------------------------------------------| :---------| :--------------------------------------------- |
| s <div class="label basic required">Required</div> | string    | A string which you would like to clean by removing stopwords|
| remove_list                                        | List[str] | A list of strings to include as stopwords to remove|

### Extract text from pdfs

Use `extract_digital_pdf()` function to extract text from pdfs.

Returns a string of text.

```python
extract_digital_pdf(filepath:str, auto_clean_threshold:int=0)
```

**Parameters**

| Name                                                    | Type      | Description    |
| :-------------------------------------------------------| :---------| :--------------------------------------------- |
| filepath <div class="label basic required">Required</div>| string    | A filepath location for the digital pdf to extract|
| auto_clean_threshold                                    | integer   | A threshold for removing words that are too short. Keep at 0 to keep all words that are not stopwords. Use any other positive integer to remove words containing fewer than auto_clean_threshold number of letters.|
