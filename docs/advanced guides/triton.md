---
sidebar_position: 3
---

# Triton

The Shakudo Platform comes with a build-in NVIDIA Triton Inference Server that simplifies the deployment of AI models at scale in production. Triton is an open-source inference serving software that lets teams deploy trained AI models from any framework (TensorFlow, NVIDIA® TensorRT®, PyTorch, ONNX Runtime, or custom) from local storage or cloud platform on any GPU- or CPU-based infrastructure (cloud, data center, or edge).

To serve your model with the Triton server, you need to upload your model to the triton server model repository and write a client file. The default path of the triton model repository is `{your_cloud_bucket}/triton-server/model-repository/`.

The official [Triton client examples](https://github.com/triton-inference-server/client/tree/main/src/python/examples) will help you with different client files for popular machine learning tasks such as image recognition and NLP. 

Please find a [simple App](https://github.com/devsentient/examples/tree/main/example_notebooks/serving/triton) in the Shakudo example repository that serves an image recognition model. 
