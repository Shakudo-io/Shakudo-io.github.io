---
sidebar_position: 4
---

# Utils

## `get_service_url`
The `get_service_url` function will return the internal service URL for a running service on the platform. This is useful when another service or job uses an existing service. Using the internal service URL allows bypassing the authentication and lowers latency.

```python
from hyperplane import utils
import requests
model_inference_url = utils.get_service_url('model_inference_endpoint')
requests.get(model_inference_url)
```

## Slack

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
