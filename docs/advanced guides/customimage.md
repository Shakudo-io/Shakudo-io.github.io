---
sidebar_position: 2
---

# Custom Images
Create and use custom images in Shakudo Platform

## Prerequisites

The following tools are needed to create a custom Shakudo Platform image:

- kubectl + kubeconfig access to Shakudo Platform
- gcloud cli
- docker

## Retrieve and use image pull credentials

1. Get and store the credentials from your Shakudo Platform cluster secrets:
```
kubectl get secrets/image-pull-secret --template="{{index .data \"mothership-key-content.json\" | base64decode}}" > keyfile_mothership.json
```
2. Authenticate using Shakudo Platform image pull credentials: 
    1. `gcloud auth activate-service-account --key-file=keyfile_mothership.json`
    2. `gcloud config set account mothership@hyperplane-test.iam.gserviceaccount.com`
3. Pulling the basic Shakudo Platform image: 
```
docker pull gcr.io/devsentient-infra/dev/jhub-basic@sha256:65873aad4648282b0f74669cca623205acaca25e9be0180071b620552b77c42b
```

## Create your custom image

Now that you have the basic Shakudo Platform image, you can follow the normal steps to create a Docker container.

For example, you can create a Dockerfile that looks like this following:

```jsx
FROM gcr.io/devsentient-infra/dev/jhub-basic:e520b7d74c7c04abc764dd43d60229ffefefb362
RUN pip install [some-packages-here]
```

You can now build your image (e.g. `docker build -t image_name .` in the directory of your Dockerfile) and push to your registry (e.g. `docker image tag image_name:image_tag registry-host:my-org/image_name:image_tag`and `docker image push registry-host:my-org/image_name:image_tag`) as normal.

Ensure you grant the Shakudo Platform service account permissions to pull your custom image.

## Use your custom image in Shakudo Platform

Select “custom” Session Type (when starting Sessions) or Job Type (when starting Pipeline jobs) and paste your image URL in the text field.

<!-- ![Sessions custom url](images/session_custom_image.png "Sessions custom url")

![Jobs custom url](images/job_custom_image.png "Jobs custom url") -->