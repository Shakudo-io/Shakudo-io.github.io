"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9816],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),k=a,f=m["".concat(s,".").concat(k)]||m[k]||p[k]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6535:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Slack Alerts",c={unversionedId:"shakudo-stack/monitoring/slack",id:"shakudo-stack/monitoring/slack",title:"Slack Alerts",description:"Slack alerts are available for failed or timeout jobs. Slack messages are sent when all retries have failed. To get Slack alerts set up you must contact our customer success team.",source:"@site/docs/shakudo-stack/monitoring/slack.md",sourceDirName:"shakudo-stack/monitoring",slug:"/shakudo-stack/monitoring/slack",permalink:"/shakudo-stack/monitoring/slack",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Model Tracking",permalink:"/category/model-tracking-1"},next:{title:"Grafana",permalink:"/shakudo-stack/monitoring/grafana"}},u={},p=[],m={toc:p};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack-alerts"},"Slack Alerts"),(0,o.kt)("p",null,"Slack alerts are available for failed or timeout jobs. Slack messages are sent when all retries have failed. To get Slack alerts set up you must ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@shakudo.io"},"contact our customer success team"),". "),(0,o.kt)("p",null,"Many teams set up a dedicated Slack channel to send alerts to. Wherever you would like the alerts sent, once you have the channel setup follow the steps below (for more detailed guide by Slack on getting a webhook URL check this page)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Slack app in the workspace you want to the Shakudo Platform messages to be posted"),(0,o.kt)("li",{parentName:"ol"},"From Features page, toggle on Activate Incoming Webhooks"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add New Webhook to Workspace")),(0,o.kt)("li",{parentName:"ol"},"Pick a channel that you would like the notifications in, then click ",(0,o.kt)("strong",{parentName:"li"},"Authorize")),(0,o.kt)("li",{parentName:"ol"},"Send the Shakudo customer success team your Slack Incoming Webhook URL to start getting job failure notifications.")),(0,o.kt)("p",null,"The Shakudo Slack bot will post a message for any errored or timed out jobs. The message will include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Job name"),(0,o.kt)("li",{parentName:"ul"},"Job ID"),(0,o.kt)("li",{parentName:"ul"},"Timestamp of failure or timeout"),(0,o.kt)("li",{parentName:"ul"},"Reason for failure"),(0,o.kt)("li",{parentName:"ul"},"Link to Grafana logs for the job"),(0,o.kt)("li",{parentName:"ul"},"A snippet of the specific error message")),(0,o.kt)("p",null,"A preview sample message:\n",(0,o.kt)("img",{alt:"Slack message sample",src:r(6059).Z,width:"1228",height:"310"})))}k.isMDXComponent=!0},6059:function(e,t,r){t.Z=r.p+"assets/images/slack_failedjob-eaa1945dde92a8f7c36a41d0317ebefd.png"}}]);