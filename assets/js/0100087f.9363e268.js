"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5069],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},805:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:12},u="FAQ",l={unversionedId:"shakudo-platform-features/faq",id:"shakudo-platform-features/faq",title:"FAQ",description:"Here you can find answers to most commonly asked questions and problems encountered.",source:"@site/docs/shakudo-platform-features/faq.md",sourceDirName:"shakudo-platform-features",slug:"/shakudo-platform-features/faq",permalink:"/shakudo-platform-features/faq",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"SOL Staking Validator Nodes",permalink:"/shakudo-platform-features/stakingvalidators"},next:{title:"Advanced Guides",permalink:"/category/advanced-guides"}},p={},c=[{value:"Out of memory",id:"out-of-memory",level:2},{value:"Module not found",id:"module-not-found",level:2},{value:"Timeouts when spinning up Dask workers",id:"timeouts-when-spinning-up-dask-workers",level:2},{value:"Timeout when using Sessions",id:"timeout-when-using-sessions",level:2},{value:"Prempted nodes",id:"prempted-nodes",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"Here you can find answers to most commonly asked questions and problems encountered."),(0,i.kt)("h2",{id:"out-of-memory"},"Out of memory"),(0,i.kt)("p",null,"Out of memory errors may occur if one of your chunks/partitions or persisted data is too large to fit into RAM. OOM errors can also occur if one of your operations requires more RAM than what is available. Increasing the available memory on your workers can usually solve this issue. OOMs show up as any of the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"killed worker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"canceled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"http error"),". "),(0,i.kt)("h2",{id:"module-not-found"},"Module not found"),(0,i.kt)("p",null,"When add code to your pipeline, some references to .py modules may not be found. Ensure you are importing from the correct directory (relative to the top level of your repository). "),(0,i.kt)("h2",{id:"timeouts-when-spinning-up-dask-workers"},"Timeouts when spinning up Dask workers"),(0,i.kt)("p",null,"You may receive an error if the Dask nodes are taking too long to scale up (due to resource availability, resource limits for your project, etc.). You can retry by re-running your cell or script when you see this error."),(0,i.kt)("h2",{id:"timeout-when-using-sessions"},"Timeout when using Sessions"),(0,i.kt)("p",null,"In your browser Session, if you get a popup that says ",(0,i.kt)("strong",{parentName:"p"},"Directory not found")," it means your Session has timed out. "),(0,i.kt)("h2",{id:"prempted-nodes"},"Prempted nodes"),(0,i.kt)("p",null,"If a node is preempted, you will see a ",(0,i.kt)("inlineCode",{parentName:"p"},"canceled error"),". For this reason, we do not recommend long jobs, but rather split your long-running functions into multiple jobs to avoid ",(0,i.kt)("inlineCode",{parentName:"p"},"http error")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"canceled error"),"."))}f.isMDXComponent=!0}}]);