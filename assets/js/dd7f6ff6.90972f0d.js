"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2298],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3139:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},s="NVIDIA Triton",c={unversionedId:"shakudo-stack/modelServing/triton",id:"shakudo-stack/modelServing/triton",title:"NVIDIA Triton",description:"The Shakudo Platform comes with a build-in NVIDIA Triton Inference Server that simplifies the deployment of AI models at scale in production. Triton is an open-source inference serving software that lets teams deploy trained AI models from any framework (TensorFlow, NVIDIA\xae TensorRT\xae, PyTorch, ONNX Runtime, or custom) from local storage or cloud platform on any GPU- or CPU-based infrastructure (cloud, data center, or edge).",source:"@site/docs/shakudo-stack/modelServing/triton.md",sourceDirName:"shakudo-stack/modelServing",slug:"/shakudo-stack/modelServing/triton",permalink:"/shakudo-stack/modelServing/triton",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Model Serving",permalink:"/category/model-serving"},next:{title:"TorchServe",permalink:"/shakudo-stack/modelServing/torchserve"}},u={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nvidia-triton"},"NVIDIA Triton"),(0,i.kt)("p",null,"The Shakudo Platform comes with a build-in NVIDIA Triton Inference Server that simplifies the deployment of AI models at scale in production. Triton is an open-source inference serving software that lets teams deploy trained AI models from any framework (TensorFlow, NVIDIA\xae TensorRT\xae, PyTorch, ONNX Runtime, or custom) from local storage or cloud platform on any GPU- or CPU-based infrastructure (cloud, data center, or edge)."),(0,i.kt)("p",null,"To serve your model with the Triton server, you need to upload your model to the triton server model repository and write a client file. The default path of the triton model repository is ",(0,i.kt)("inlineCode",{parentName:"p"},"{your_cloud_bucket}/triton-server/model-repository/"),"."),(0,i.kt)("p",null,"The official ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/triton-inference-server/client/tree/main/src/python/examples"},"Triton client examples")," will help you with different client files for popular machine learning tasks such as image recognition and NLP. "),(0,i.kt)("p",null,"Please find a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devsentient/examples/tree/main/example_notebooks/serving/triton"},"simple App")," in the Shakudo example repository that serves an image recognition model."))}d.isMDXComponent=!0}}]);