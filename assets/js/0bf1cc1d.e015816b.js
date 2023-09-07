"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="NVIDIA Triton",l={unversionedId:"Shakudo-stack/modelServing/triton",id:"Shakudo-stack/modelServing/triton",title:"NVIDIA Triton",description:"The Shakudo Platform comes with a build-in NVIDIA Triton Inference Server that simplifies the deployment of AI models at scale in production. Triton is an open-source inference serving software that lets teams deploy trained AI models from any framework (TensorFlow, NVIDIA\xae TensorRT\xae, PyTorch, ONNX Runtime, or custom) from local storage or cloud platform on any GPU- or CPU-based infrastructure (cloud, data center, or edge).",source:"@site/docs/Shakudo-stack/modelServing/triton.md",sourceDirName:"Shakudo-stack/modelServing",slug:"/Shakudo-stack/modelServing/triton",permalink:"/Shakudo-stack/modelServing/triton",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Model Serving",permalink:"/category/model-serving"},next:{title:"TorchServe",permalink:"/Shakudo-stack/modelServing/torchserve"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nvidia-triton"},"NVIDIA Triton"),(0,o.kt)("p",null,"The Shakudo Platform comes with a build-in NVIDIA Triton Inference Server that simplifies the deployment of AI models at scale in production. Triton is an open-source inference serving software that lets teams deploy trained AI models from any framework (TensorFlow, NVIDIA\xae TensorRT\xae, PyTorch, ONNX Runtime, or custom) from local storage or cloud platform on any GPU- or CPU-based infrastructure (cloud, data center, or edge)."),(0,o.kt)("p",null,"To serve your model with the Triton server, you need to upload your model to the triton server model repository and write a client file. The default path of the triton model repository is ",(0,o.kt)("inlineCode",{parentName:"p"},"{your_cloud_bucket}/triton-server/model-repository/"),"."),(0,o.kt)("p",null,"The official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/triton-inference-server/client/tree/main/src/python/examples"},"Triton client examples")," will help you with different client files for popular machine learning tasks such as image recognition and NLP. "),(0,o.kt)("p",null,"Please find a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/devsentient/examples/tree/main/example_notebooks/serving/triton"},"simple App")," in the Shakudo example repository that serves an image recognition model."))}d.isMDXComponent=!0}}]);