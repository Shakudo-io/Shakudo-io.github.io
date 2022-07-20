"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:4},s="Utils",p={unversionedId:"shakudo-platform-features/api/utils",id:"shakudo-platform-features/api/utils",title:"Utils",description:"getserviceurl",source:"@site/docs/shakudo-platform-features/api/utils.md",sourceDirName:"shakudo-platform-features/api",slug:"/shakudo-platform-features/api/utils",permalink:"/shakudo-platform-features/api/utils",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pipeline Jobs",permalink:"/shakudo-platform-features/api/pipelinejobs"},next:{title:"Crypto_API",permalink:"/shakudo-platform-features/api/crypto_api"}},c={},u=[{value:"<code>get_service_url</code>",id:"get_service_url",level:2},{value:"Slack",id:"slack",level:2},{value:"<code>SlackHelper</code>",id:"slackhelper",level:3},{value:"<code>post_message</code>",id:"post_message",level:3},{value:"<code>post_table()</code>",id:"post_table",level:3}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"utils"},"Utils"),(0,o.kt)("h2",{id:"get_service_url"},(0,o.kt)("inlineCode",{parentName:"h2"},"get_service_url")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get_service_url")," function will return the internal service URL for a running service on the platform. This is useful when another service or job uses an existing service. Using the internal service URL allows bypassing the authentication and lowers latency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from hyperplane import utils\nimport requests\nmodel_inference_url = utils.get_service_url('model_inference_endpoint')\nrequests.get(model_inference_url)\n")),(0,o.kt)("h2",{id:"slack"},"Slack"),(0,o.kt)("p",null,"Shakudo's Hyperplane API includes a function allowing jobs to post messages to your Slack channel. You can use this to notify you of finished jobs, or even to post job results. On Shakudo there are two ways to send Slack notification messages: Use a slack token or use a webhook."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 1: Slack token"),"\nTo use the Slack alert integration you first need to set up a Slack token."),(0,o.kt)("p",null,"A slack token can be set up following ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/tutorials/tracks/getting-a-token"},"this tutorial on Slack")," by creating a quick pre-configured App. Once the App is created and installed to the workspace, the token can be found at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Install App")," tab in the App's homepage. The token looks like this ",(0,o.kt)("inlineCode",{parentName:"p"},"xoxb-694301530724-2549825675367-Zn4NNP34r3c7aN3EkPDLMiNX")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 2: Slack Webhook URL")),(0,o.kt)("p",null,"To send messages to Slack with webhooks, first follow ",(0,o.kt)("a",{parentName:"p",href:"https://slack.com/intl/en-ca/help/articles/115005265063-Incoming-webhooks-for-Slack#set-up-incoming-webhooks"},"this tutorial on Slack")," to create a new Slack App and obtain the webhook URL like this ",(0,o.kt)("inlineCode",{parentName:"p"},"https://hooks.slack.com/services/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")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also ask the Shakudo Platform admin to add or change the WEBHOOK_URL variable in your environment permanently."))),(0,o.kt)("h3",{id:"slackhelper"},(0,o.kt)("inlineCode",{parentName:"h3"},"SlackHelper")),(0,o.kt)("p",null,"Initialize a Slack Helper object after specifying your Slack token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 1: Token method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'#Specify your Slack token\nimport os\nos.environ["SLACK_TOKEN"] = "your-slack-t0ken"\n\n#Initialize Slack Helper\nfrom hyperplane import utils\nsh = utils.SlackHelper()\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using Method 2: Slack Webhook URL then you do not need to initialize SlackHelper. Just add the webhook URL as an environment variable."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nos.environ['WEBHOOK_URL']='your_webhook_url'\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"post_message"},(0,o.kt)("inlineCode",{parentName:"h3"},"post_message")),(0,o.kt)("p",null,"Post a Slack Message with Slack Token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 1: Token method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from hyperplane import utils\nsh = utils.SlackHelper()\nsh.post_message('Testing!', '#some-channel')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 2: Webhook method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#Post a message\nfrom hyperplane import utils\nutils.post_message('Testing!', '#some-channel')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Parameters ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"message  ",(0,o.kt)("div",{class:"label basic required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String of message to send (can include formatting)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"channel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},'(Default: "") A public channel to post the ',(0,o.kt)("inlineCode",{parentName:"td"},"message"),". If left empty, it will default to the webhook URL's default channel")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"post_table"},(0,o.kt)("inlineCode",{parentName:"h3"},"post_table()")),(0,o.kt)("p",null,"Post a Slack Message in table format with Slack Token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 1: Token method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from hyperplane import utils\nsh = utils.SlackHelper()\n\nmessage_dict = {\n  "key1": "value1",\n  "key2": "value2"\n}\nsh.post_table(message_dict, channel = "alert-channel")\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 2: Webhook method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from hyperplane import utils\n\nmessage_dict = {\n  "key1": "value1",\n  "key2": "value2"\n}\nsh.post_table(message_dict, channel = "alert-channel")\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Parameters ")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"message_dict  ",(0,o.kt)("div",{class:"label basic required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"left"},"dictionary"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Dictionary of values to send in a table format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"channel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},'(Default: "") A public channel to post the msg. If left empty, it will default to the webhook URL\'s default channel')))))}k.isMDXComponent=!0}}]);