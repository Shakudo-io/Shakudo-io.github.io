---
sidebar_position: 3
---

# Pipeline Jobs

There are many ways pipeline jobs can be controlled: dashboard interface, GraphQL Playground, and Hyperplane API notebook_commons. You can submit, cancel, get output, and check status on jobs from your Sessions. 

## `submit_pipeline_job`

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

## `checkjobs()`
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

## `cancel_pipeline_jobs()`

Use `cancel_pipeline_jobs()` to cancel a pipeline job from Sessions. Returns `{'id': 'job-id', 'status': 'cancelled}`

```python
await nc.cancel_pipeline_job('job-id')
```
** Parameters **

| Name                | Type       | Description    |
| :-------------------| :----------| :--------------------------------------------- |
| jobID <div class="label basic required">Required</div> | string    | ID of pipeline job to cancel |

<!-- ---

## `set_current_job_output()`

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

## `get_a_job_output()`

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
