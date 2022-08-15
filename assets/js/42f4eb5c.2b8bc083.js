"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1257],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(f,o(o({ref:e},d),{},{components:a})):n.createElement(f,o({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},903:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:8},p="NLP models",s={unversionedId:"shakudo-platform-features/API/nlp",id:"shakudo-platform-features/API/nlp",title:"NLP models",description:"Hyperplane comes with some pre-packged NLP models for common tasks. The hyperplane nlp tools can be accessed through",source:"@site/docs/shakudo-platform-features/API/nlp.md",sourceDirName:"shakudo-platform-features/API",slug:"/shakudo-platform-features/API/nlp",permalink:"/shakudo-platform-features/API/nlp",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"GraphQL",permalink:"/shakudo-platform-features/API/gql"},next:{title:"Web3 API",permalink:"/category/web3-api"}},d={},m=[{value:"Extract topics and themes",id:"extract-topics-and-themes",level:2},{value:"Extract text",id:"extract-text",level:2},{value:"Save and load",id:"save-and-load",level:2},{value:"Find urls",id:"find-urls",level:2},{value:"Remove stopwords",id:"remove-stopwords",level:2},{value:"Extract text from pdfs",id:"extract-text-from-pdfs",level:2}],u={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nlp-models"},"NLP models"),(0,l.kt)("p",null,"Hyperplane comes with some pre-packged NLP models for common tasks. The hyperplane nlp tools can be accessed through"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from hyperplane import hyper_nlp as nlp\n")),(0,l.kt)("h2",{id:"extract-topics-and-themes"},"Extract topics and themes"),(0,l.kt)("p",null,"Find the main topics and themes with the function ",(0,l.kt)("inlineCode",{parentName:"p"},"get_topics()")," given a list of sentences, documents, or texts."),(0,l.kt)("p",null,"Returns: Topic_Model, List","[str]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'get_topics(data:List[str], ntopic:int=10, sample_size:int=50000, method:str="USE" )\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Parameters ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"data ",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of strings (sentences or phrases) from which you want to discover topics and themes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ntopic"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of topics/themes to return")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sample_size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of samples to discover topics from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"method"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The method for theme extraction. Choose from ",(0,l.kt)("inlineCode",{parentName:"td"},"TFIDF"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"LDA"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"BERT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"LDA_BERT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"fasttext"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"USE"))))),(0,l.kt)("p",null,"Example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'%matplotlib inline ## use this in a notebook to display charts\n\nnlp.get_topics(["I need to buy some green and red apples.", \n                "Oranges are also useful for juices", \n                "I really like bananas and fruits", \n                "You need to clean up your car.", \n                "I am running out of out of gas"], \n               ntopic=2, \n               sample_size=50,\n               method="USE"\n              )\n')),(0,l.kt)("p",null,"The function will return the topic model and a list of top words per cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"(<topic_discovery.Topic_Model at 0x7f88abc8e9a0>,\n array([['out', 'of', 'I', 'am', 'running', 'gas', 'You', 'need', 'to',\n         'clean'],\n        ['I', 'and', 'Oranges', 'are', 'also', 'useful', 'for', 'juices',\n         'need', 'to']], dtype=object))\n\n")),(0,l.kt)("h2",{id:"extract-text"},"Extract text"),(0,l.kt)("p",null,"With the function ",(0,l.kt)("inlineCode",{parentName:"p"},"extract_qa()")," when given some text, you can ask a question to extract an arbitrary field. "),(0,l.kt)("p",null,"Returns: List","[Dict]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from hyperplane import hyper_nlp as nlp\nnlp.get_topics(data:List[str], ntopic:int=10, sample_size:int=50000, method:str="USE" )\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Parameters ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"text ",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Context string which the answer will be extracted from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"question",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A question that you want to ask based on the context")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"topk"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of top answers to return per question")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"return_context"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether or not to return context around the answer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"context_window"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"return_context")," how much of the context to return")))),(0,l.kt)("p",null,"Example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"text = '''\nHyperplane  is an end-to-end platform designed to take AI teams from ideation to production at breakthrough speeds. We built Hyperplane because we needed a powerful platform for our scientists to design, develop, deploy and maintain their own work in production.\n\nWhy Us?\n\nThe Shakudo team grew out of advanced AI organizations across the industry. After having seen, tried and used every product out there, we came to the conclusion that there is a gap to be filled, and Hyperplane was born.\n\nWhat does this mean for you?\n\nIf you are scaling up an AI organization, starting up an AI-powered product, or looking to get your existing solutions faster and more reliably to production, Hyperplane may be for you.\n'''\n\nquestions = [\n    \"What does Hyperplane do?\"\n]\n\nnlp.extract_qa(text, questions[0])\n")),(0,l.kt)("p",null,"This will return: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"[{'score': 0.04723832756280899,\n  'start': 51,\n  'end': 115,\n  'answer': 'take AI teams from ideation to production at breakthrough speeds'}]\n")),(0,l.kt)("h2",{id:"save-and-load"},"Save and load"),(0,l.kt)("p",null,"To save serializable models, you can use the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'nlp.save_model(model=tm, filename="tm_model")\n')),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"tm")," is a serializable object. "),(0,l.kt)("p",null,"To load an existing model saved with hyper_nlp, use the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"loaded_model = nlp.load_model(filename='tm_model')\n")),(0,l.kt)("h2",{id:"find-urls"},"Find urls"),(0,l.kt)("p",null,"Use the function ",(0,l.kt)("inlineCode",{parentName:"p"},"find_urls()")," to look for strings that are urls"),(0,l.kt)("p",null,"Returns: List","[str]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"nlp.find_urls(s:str)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"s ",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A string from which you would like to search for urls")))),(0,l.kt)("h2",{id:"remove-stopwords"},"Remove stopwords"),(0,l.kt)("p",null,"Use the function ",(0,l.kt)("inlineCode",{parentName:"p"},"clean_text()")," to remove stopwords from a string of text."),(0,l.kt)("p",null,"Returns a string with stopwords removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"nlp.clean_text(s:str, remove_list:List[str]=en_stop_words)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"s ",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A string which you would like to clean by removing stopwords")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_list"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A list of strings to include as stopwords to remove")))),(0,l.kt)("h2",{id:"extract-text-from-pdfs"},"Extract text from pdfs"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"extract_digital_pdf()")," function to extract text from pdfs."),(0,l.kt)("p",null,"Returns a string of text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"extract_digital_pdf(filepath:str, auto_clean_threshold:int=0)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"filepath ",(0,l.kt)("div",{class:"label basic required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A filepath location for the digital pdf to extract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"auto_clean_threshold"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A threshold for removing words that are too short. Keep at 0 to keep all words that are not stopwords. Use any other positive integer to remove words containing fewer than auto_clean_threshold number of letters.")))))}c.isMDXComponent=!0}}]);