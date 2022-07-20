---
sidebar_position: 10
---

# GraphQL

Many of the Shakudo Platform features are supported through the platform dashboard as well as GraphQL. GraphQL method is particularly useful when some actions are easier done algorithmically such as spinning up many jobs at once.

Below are some common graphql queries for submission, checking status, etc. 

---

## Sessions

### Get Sessions
Get a list of Sessions.

```json
query hyperhubSessions($limit: Int!, $email: String, $status: String, $imageType: String) {
    hyperHubSessions(orderBy:{startTime: desc}, take: $limit, where: {
      hyperplaneUserEmail: {equals: $email},
      status: {equals: $status},
    }) {
      id
      hyperplaneUserEmail
      status
      imageType
      jLabUrl
      notebookURI
      estimatedCost
      department
      resourceCPUlimit    
      resourceRAMlimit    
      resourceCPUrequest  
      resourceRAMrequest  
      gpuRequest  
      startTime
      completionTime  
    }
    countHyperHubSessions
  }
```


### Cancel a session by session_id

Cancel a Session

```json
mutation($id: String!) {
  updateHyperHubSession(where: {id: $id}, data: {
    status: {set: "cancelled"}
  }) {
    id
    status
  }
}
```

### Count sessions
Count the number of sessions based on the filters provided by the parameters

```
query hyperhubSessions($email: String, $imageType: String, $status: String) {
  hyperHubSessions(where: {
    hyperplaneUserEmail: {equals: $email},
    imageType: {equals: $imageType}
    status: {equals: $status}
  }) {
    id 
  }
}
```

### Create a pipeline job 
Create a pipeline job with the specified inputs

```json
mutation ($type: String!, $timeout: Int!, $activeTimeout: Int, $maxRetries: Int!, $yamlPath: String!, $exposedPort: String, $schedule: String, $parameters: ParameterCreateNestedManyWithoutPipelineJobInput ) { 
  createPipelineJob (data: {
    jobType: $type,
    timeout: $timeout,
    activeTimeout: $activeTimeout
    maxRetries: $maxRetries,
    pipelineYamlPath: $yamlPath,
    exposedPort: $exposedPort,
    parameters: $parameters,
    schedule: $schedule
    }) { 
      id
      pinned
      pipelineYamlPath
      schedule
      status
      statusReason
      output
      startTime
      completionTime
      daskDashboardUrl
      timeout
      outputNotebooksPath
      activeTimeout
      maxRetries
      exposedPort
      jobType
      parameters {
        key
        value
      }
  } 
} 
```

### Cancel a pipeline job

Cancel a job (Stop job from running)

```json
mutation ($id: String!) {
  updatePipelineJob(where: {id: $id},
  data: {
    status: {set: "cancelled"}
  }) {
    id
  }
}
```

### Get a list of jobs

Show the list of jobs

```json
query nextJobs($limit: Int!) {
  pipelineJobs(orderBy: [{pinned: desc},{ startTime: desc}], take: $limit) {
    id
    pipelineYamlPath
    schedule
    status
    output
    startTime
    completionTime
    daskDashboardUrl
    timeout
    outputNotebooksPath
    activeTimeout
    maxRetries
    jobType
    estimatedCost
    owner
    department
  }
}
```

### Get job status

Count the number of jobs based on their statuses. For example, failed, pending, or cancelled jobs.
The timeFrame parameter specifies the timeframe which will be considered.

For instance:
* T_10M = past 10 minutes
* T_24H = past 24 hours

```json
query {
  COUNT_ALL_TOTAL: getJobStat(stat: COUNT_ALL, timeFrame: TOTAL)
  COUNT_CANCELLED_TOTAL: getJobStat(stat: COUNT_CANCELLED, timeFrame: TOTAL)
  COUNT_DONE_TOTAL: getJobStat(stat: COUNT_DONE, timeFrame: TOTAL)
  COUNT_FAILED_TOTAL: getJobStat(stat: COUNT_FAILED, timeFrame: TOTAL)
  COUNT_IN_PROGRESS_TOTAL: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: TOTAL
  )
  COUNT_PENDING_TOTAL: getJobStat(stat: COUNT_PENDING, timeFrame: TOTAL)
  COUNT_SCHEDULED_TOTAL: getJobStat(stat: COUNT_SCHEDULED, timeFrame: TOTAL)
  COUNT_TIMED_OUT_TOTAL: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: TOTAL)
  COUNT_ALL_T_10M: getJobStat(stat: COUNT_ALL, timeFrame: T_10M)
  COUNT_CANCELLED_T_10M: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_10M)
  COUNT_DONE_T_10M: getJobStat(stat: COUNT_DONE, timeFrame: T_10M)
  COUNT_FAILED_T_10M: getJobStat(stat: COUNT_FAILED, timeFrame: T_10M)
  COUNT_IN_PROGRESS_T_10M: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: T_10M
  )
  COUNT_PENDING_T_10M: getJobStat(stat: COUNT_PENDING, timeFrame: T_10M)
  COUNT_SCHEDULED_T_10M: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_10M)
  COUNT_TIMED_OUT_T_10M: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_10M)
  COUNT_ALL_T_1H: getJobStat(stat: COUNT_ALL, timeFrame: T_1H)
  COUNT_CANCELLED_T_1H: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_1H)
  COUNT_DONE_T_1H: getJobStat(stat: COUNT_DONE, timeFrame: T_1H)
  COUNT_FAILED_T_1H: getJobStat(stat: COUNT_FAILED, timeFrame: T_1H)
  COUNT_IN_PROGRESS_T_1H: getJobStat(stat: COUNT_IN_PROGRESS, timeFrame: T_1H)
  COUNT_PENDING_T_1H: getJobStat(stat: COUNT_PENDING, timeFrame: T_1H)
  COUNT_SCHEDULED_T_1H: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_1H)
  COUNT_TIMED_OUT_T_1H: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_1H)
  COUNT_ALL_T_24H: getJobStat(stat: COUNT_ALL, timeFrame: T_24H)
  COUNT_CANCELLED_T_24H: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_24H)
  COUNT_DONE_T_24H: getJobStat(stat: COUNT_DONE, timeFrame: T_24H)
  COUNT_FAILED_T_24H: getJobStat(stat: COUNT_FAILED, timeFrame: T_24H)
  COUNT_IN_PROGRESS_T_24H: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: T_24H
  )
  COUNT_PENDING_T_24H: getJobStat(stat: COUNT_PENDING, timeFrame: T_24H)
  COUNT_SCHEDULED_T_24H: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_24H)
  COUNT_TIMED_OUT_T_24H: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_24H)
}
```

### Get scheduled jobs status 

Count the number of *scheduled* jobs based on their statuses. For example, failed, pending, or cancelled jobs.
The differnece with the query above is that the belew parameter is added to only count scheduled jobs for each time frame with `status: SCHEDULED`

```json
query {
  COUNT_ALL_TOTAL: getJobStat(stat: COUNT_ALL, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_CANCELLED_TOTAL: getJobStat(stat: COUNT_CANCELLED, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_DONE_TOTAL: getJobStat(stat: COUNT_DONE, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_FAILED_TOTAL: getJobStat(stat: COUNT_FAILED, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_IN_PROGRESS_TOTAL: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: TOTAL
  )
  COUNT_PENDING_TOTAL: getJobStat(stat: COUNT_PENDING, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_SCHEDULED_TOTAL: getJobStat(stat: COUNT_SCHEDULED, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_TIMED_OUT_TOTAL: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: TOTAL, status: SCHEDULED)
  COUNT_ALL_T_10M: getJobStat(stat: COUNT_ALL, timeFrame: T_10M)
  COUNT_CANCELLED_T_10M: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_10M, status: SCHEDULED)
  COUNT_DONE_T_10M: getJobStat(stat: COUNT_DONE, timeFrame: T_10M, status: SCHEDULED)
  COUNT_FAILED_T_10M: getJobStat(stat: COUNT_FAILED, timeFrame: T_10M, status: SCHEDULED)
  COUNT_IN_PROGRESS_T_10M: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: T_10M
  )
  COUNT_PENDING_T_10M: getJobStat(stat: COUNT_PENDING, timeFrame: T_10M, status: SCHEDULED)
  COUNT_SCHEDULED_T_10M: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_10M, status: SCHEDULED)
  COUNT_TIMED_OUT_T_10M: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_10M, status: SCHEDULED)
  COUNT_ALL_T_1H: getJobStat(stat: COUNT_ALL, timeFrame: T_1H, status: SCHEDULED)
  COUNT_CANCELLED_T_1H: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_1H, status: SCHEDULED)
  COUNT_DONE_T_1H: getJobStat(stat: COUNT_DONE, timeFrame: T_1H, status: SCHEDULED)
  COUNT_FAILED_T_1H: getJobStat(stat: COUNT_FAILED, timeFrame: T_1H, status: SCHEDULED)
  COUNT_IN_PROGRESS_T_1H: getJobStat(stat: COUNT_IN_PROGRESS, timeFrame: T_1H, status: SCHEDULED)
  COUNT_PENDING_T_1H: getJobStat(stat: COUNT_PENDING, timeFrame: T_1H, status: SCHEDULED)
  COUNT_SCHEDULED_T_1H: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_1H, status: SCHEDULED)
  COUNT_TIMED_OUT_T_1H: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_1H, status: SCHEDULED)
  COUNT_ALL_T_24H: getJobStat(stat: COUNT_ALL, timeFrame: T_24H)
  COUNT_CANCELLED_T_24H: getJobStat(stat: COUNT_CANCELLED, timeFrame: T_24H, status: SCHEDULED)
  COUNT_DONE_T_24H: getJobStat(stat: COUNT_DONE, timeFrame: T_24H, status: SCHEDULED)
  COUNT_FAILED_T_24H: getJobStat(stat: COUNT_FAILED, timeFrame: T_24H, status: SCHEDULED)
  COUNT_IN_PROGRESS_T_24H: getJobStat(
    stat: COUNT_IN_PROGRESS
    timeFrame: T_24H
    , status: SCHEDULED
  )
  COUNT_PENDING_T_24H: getJobStat(stat: COUNT_PENDING, timeFrame: T_24H, status: SCHEDULED)
  COUNT_SCHEDULED_T_24H: getJobStat(stat: COUNT_SCHEDULED, timeFrame: T_24H, status: SCHEDULED)
  COUNT_TIMED_OUT_T_24H: getJobStat(stat: COUNT_TIMED_OUT, timeFrame: T_24H, status: SCHEDULED)
}
```

### Get a list of services

Get list of services - services are pipeline jobs which have an active timeout and timeout of -1 (Never ending jobs)

```json
query nextJobs($offset: Int, $limit: Int!, $status: String!) {
  pipelineJobs(orderBy: [{pinned: desc},{ startTime: desc}], take: $limit, skip: $offset, where: {
    AND: [
      {activeTimeout: {equals: -1}},
      {timeout: {equals: -1}},
      {status: {equals: $status}}
    ]        
  }) {
    id
    exposedPort
    pinned
    pipelineYamlPath
    schedule
    status
    statusReason
    startTime
    completionTime
    daskDashboardUrl
    timeout
    output
    outputNotebooksPath
    activeTimeout
    duration
    jobType
    schedule
    estimatedCost
    owner
    department
    maxRetries
  }
}
```

---

## Jobs

### Submit a pipeline job

```json
mutation submitJob { 
  createPipelineJob (data: {
    jobType: "basic",
    timeout: 1500,
    activeTimeout: 1000,
    maxRetries: 5,
    pipelineYamlPath: "example_pipeline.yaml",
    parameters: {
      create: [
        {key: "a_param", value: "pass parameters as strings"},
      ]
    }
  }) { 
    id 
    runId
  } 
}
```

### Cancel a job
```json
mutation cancelJob {
  updatePipelineJob(
    where: { id: "your-job-id" }
    data: { status: { set: "cancelled" } }
  ) {
    id
  }
}
```

### Cancel all scheduled jobs
```json
mutation cancelScheduledJob {
  updateManyPipelineJob(
    where: { status: { equals: "scheduled" } }
    data: { status: { set: "cancelled" } }
  ) {
    count
  }
}
```

### Check the status of a job
```json
query checkStatus {
  pipelineJob (where: {id: "your-job-id"}){
    status
  }
}
```

### Get job parameters

Get the list of parameters for a pipeline job 

```json
query nextJobs($id: String!) {
  pipelineJobs(where: {id: {equals: $id}}) {
    parameters {
      key
      value
      id
      pipelineJobId
    }
  }
}
```

### Detele job parameters

Delete a parameter for a pipeline job

```json
mutation($jobId: String!, $parameterId: String!) {
  updatePipelineJob(where: {id: $jobId},
  data: {
    parameters: {disconnect: {id: $parameterId}}
  }) {
    id
  }
}
```


### Update job parameters

Update the parameter key and value 

```json
mutation ($parameterId: String!, $keyValue: String, $valueValue: String) {
  updateParameter(where: {id: $parameterId}, data: {
    key: {set: $keyValue}
    value: {set: $valueValue}
  }) {
    id
  }
}
```


