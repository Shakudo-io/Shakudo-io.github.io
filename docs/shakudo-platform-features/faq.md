---
sidebar_position: 11
---

# FAQ

Here you can find answers to most commonly asked questions and problems encountered.

## Out of memory 
Out of memory errors may occur if one of your chunks/partitions or persisted data is too large to fit into RAM. OOM errors can also occur if one of your operations requires more RAM than what is available. Increasing the available memory on your workers can usually solve this issue. OOMs show up as any of the following: `killed worker`, `key error`, `canceled`, `http error`. 

## Module not found
When add code to your pipeline, some references to .py modules may not be found. Ensure you are importing from the correct directory (relative to the top level of your repository). 

## Timeouts when spinning up Dask workers
You may receive an error if the Dask nodes are taking too long to scale up (due to resource availability, resource limits for your project, etc.). You can retry by re-running your cell or script when you see this error.

## Timeout when using Sessions
In your browser Session, if you get a popup that says **Directory not found** it means your Session has timed out. 

## Prempted nodes
If a node is preempted, you will see a `canceled error`. For this reason, we do not recommend long jobs, but rather split your long-running functions into multiple jobs to avoid `http error` or `canceled error`. 

