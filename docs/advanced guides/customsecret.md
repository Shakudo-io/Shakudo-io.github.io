---
sidebar_position: 1
---

# Custom Secrets

Configuring a Custom Secret to Attach to Pipelines

## Prerequisites

The following tools are needed to add custom secrets:

* kubectl + kubeconfig access to Shakudo Platform

## The Steps To Deploy A Secret

1. Install `kubectl`: 
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```
3. Get the secret name and note it somewhere. We'll refer to it as `HYPERPLANE_CUSTOM_DEPLOY_SECRET`.
```
echo $HYPERPLANE_CUSTOM_DEPLOY_SECRET
```
4. Get the pipelines kubernetes namespace and note it somewhere. We'll refer to it as `PIPELINES_NAMESPACE`.
```
echo $PIPELINES_NAMESPACE
```
4. Base64 encode your secret `my_secret_key.json`. We'll refer to the output of the following command as ENCODED_SECRET
```
cat my_secret_key.json | base64 -w 0
```
5. Create the kubernetes secret YAML file `my_secret_key_k8s.yaml` as follows:
```
apiVersion: v1
data:
  my_key_file.json: ENCODED_SECRET
kind: Secret
metadata:
  name: HYPERPLANE_CUSTOM_DEPLOY_SECRET
  namespace: PIPELINES_NAMESPACE
type: Opaque
```
6. Deploy the kubernetes secret:
```
kubectl apply -f my_secret_key_k8s.yaml
```
7. You should see an output like this:
```
❯ kubectl apply -f my_secret_key_k8s.yaml 
secret/custom-deploy-secrets-vpqqv7ba configured
```
8. That's it!

## Configuring GCP SDK / CLI to use the new secret
The app key only gets deployed in the pipelines and services, whereas in jupyter each user can use their own credentials. To configure GCP to use the app key in the pipelines you can use the following function in your jupyter notebooks:
```
import os
def is_jhub():
    if ("HYPERPLANE_JOB_ID" not in os.environ or os.environ["HYPERPLANE_JOB_ID"] == "__local_test"):
        print("From jupyter. Not modifying GCP credentials path.")
        return True
    else:
        print("From pipeline. Updating GCP credentials path to app key.")
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "/etc/hyperplane/secrets/my_key_file.json"
        return False
```
It will modify the GCP credentials path, but only when this code is executed in the pipelines.

