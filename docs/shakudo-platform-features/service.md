---
sidebar_position: 6
---

# Services

Services are used to create live pipeline jobs. In contrast to regular pipeline jobs, which are batch jobs or a series of steps that run end-to-end, you can create jobs from never-ending notebooks or scripts as services. This is particularly useful for things that need to be continuously live such as servicing an application, or live real-time data processing.

Rather than running in your cluster, you can trigger this to run similar to a pipeline job on Shakudo Platform to run a continuous loop without having to keep your cluster up or your notebook running.

## Create a service

To create a service, follow these steps:

1. Navigate to the service tab

2. Click on **+** button to create a new service

3. Fill in the details in service creation panel

| Name                                                         | Description    |
| :-----------------------------------------------------| :--------------------------------------------- |
| Name  |  ID of pipeline job to cancel |
| Job type    | Choose which podspec your job uses |
| Exposed port   | Enter a port to expose between 1 and 65535. The default for Shakudo Platform services is port 8787. |
| Timeout   | Timeout for services is set to -1 (Never) |
| Active timeout    | Active: Active timeout for services is set to -1 (Never) |
| Service URL    | Service URL Prefix: specify the URL for your service |
| Min pods    | The minimum number of pod replicas running your service that run at any given time |
| Max pods    | The maximum number of pod replicas running your service that run at any given time. |
| Branch   | Git branch name to use |
| Commit ID  | Git commit ID (hash) to use|
| Pipeline YAML Path   | File path to .yaml file for this service |
| Virtual Service Path Rewrite  | If you have specified the virtual service path within your script toggle this off |
| Parameters  | parameters to overwrite |


4. Click **CREATE**

## Update a service

There are two ways of updating a service. You can use the restart method if you want the service to pick up changes to the undeliying code. If you'd like to change other aspects of the service such as the name, port, YAML path and such, then you'd have to update by the cloning method.

### Update by restarting a service

When some changes are pushed to the service codebase the changes are not automatically picked up by the service. This is to provide more flexibility over the timing of updating a service. 

Once you are ready to update the service with the changes, navigate to the service tab on the Shakudo Platform. Then click on the three dot menu button for the service you’d like to update. Find and click on the **Restart service** button. A pop up dialogue will appear. Click **Restart** to confirm. 

Whenever a service is restarted successfully, the start time will be updated and the service will have a new ID associated with it. 

### Update by cloning a service

To duplicate a service navigate to the service tab, and click on the three dot menu button to the left of a service you wish to make a copy. Select the **Clone service** button in the popup menu. 

If you’d like to change any settings, such as the same or the endpoint URL, select the **EDIT** button in the clone job confirmation popup. If you’d like to make an exact copy of an existing service, click on the **CONFIRM** button. If you no longer wish to clone the service click **CLOSE**. 

Note that existing service settings are not editable. Therefore if you’d like to change the name, job type, service URL (endpoint URL), max/ min pods, pipeline YAML path, or parameters you must clone a service and edit it accordingly. Once you have two services you can cancel the original service if you no longer wish to have it up and running.

## Cancel a service

If you’d like to cancel a service, navigate to the service tab on the Shakudo Platform and click on the three dot menu on the left hand side of the service you’d like to cancel. Click on **Cancel service** in the popup menu. Once the confirmation screen appears, click **CONFIRM** to cancel the service or CLOSE to keep the service. 

## Details & Logs

If you’d like to check the details or status of a service, navigate to the service tab on the Shakudo Platform and click into the three dot menu button beside a service. Click on the **View details** option in the popup menu to access the Details page. 

The **Logs** button on the left hand side will navigate you to the logs for the service, and the **Endpoint** button will take you to the endpoint URL of the service.
