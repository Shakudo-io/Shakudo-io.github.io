---
sidebar_position: 8
---

# NLP models

Hyperplane comes with some pre-packged NLP models for common tasks. The hyperplane nlp tools can be accessed through

```python
from hyperplane import hyper_nlp as nlp
```

## Extract topics and themes

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

## Extract text

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

## Save and load

To save serializable models, you can use the following:

```python
nlp.save_model(model=tm, filename="tm_model")
```

where `tm` is a serializable object. 

To load an existing model saved with hyper_nlp, use the following:

```python
loaded_model = nlp.load_model(filename='tm_model')
```

## Find urls

Use the function `find_urls()` to look for strings that are urls

Returns: List[str]

```python
nlp.find_urls(s:str)
```

**Parameters**

| Name                                               | Type      | Description    |
| :--------------------------------------------------| :---------| :--------------------------------------------- |
| s <div class="label basic required">Required</div> | string    | A string from which you would like to search for urls |

## Remove stopwords
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

## Extract text from pdfs

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
