"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8899],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?s.createElement(h,a(a({ref:t},p),{},{components:n})):s.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var l=2;l<o;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var s=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],r={sidebar_position:1,id:"sessions",title:"Introduction to Sessions",tags:["sessions","development environment","ssh"],description:"Pre-configured development environment"},c="Sessions",l={unversionedId:"shakudo-platform-core/sessions/sessions",id:"shakudo-platform-core/sessions/sessions",title:"Introduction to Sessions",description:"Pre-configured development environment",source:"@site/docs/shakudo-platform-core/sessions/sessions.md",sourceDirName:"shakudo-platform-core/sessions",slug:"/shakudo-platform-core/sessions/",permalink:"/shakudo-platform-core/sessions/",draft:!1,tags:[{label:"sessions",permalink:"/tags/sessions"},{label:"development environment",permalink:"/tags/development-environment"},{label:"ssh",permalink:"/tags/ssh"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"sessions",title:"Introduction to Sessions",tags:["sessions","development environment","ssh"],description:"Pre-configured development environment"},sidebar:"tutorialSidebar",previous:{title:"Sessions - Develop",permalink:"/category/sessions---develop"},next:{title:"Integrating git into Sessions Jupyterlab",permalink:"/shakudo-platform-core/sessions/versionControl"}},p={},d=[{value:"Get started with Sessions",id:"get-started-with-sessions",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Session Type",id:"session-type",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Drive Name - Spinning up multiple Sessions",id:"drive-name---spinning-up-multiple-sessions",level:3}],m={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sessions"},"Sessions"),(0,o.kt)("p",null,"A Session is a platform component designed for interactive development. It provides access to compute resources in a workspace initialized with pre-configured environments. The specific resource and environment configuration is customizable."),(0,o.kt)("p",null,"Sessions also provide several options to start developing on them, including through in-browser IDEs like JupyterLab or VSCode, or an ordinary ssh session which can be used by standalone VSCode, or any other tool."),(0,o.kt)("p",null,"Shakudo undergoes frequent updates, and the documentation may be out of sync with your current deployment. However, the same principles remain applicable regardless of the specific interface currently in place."),(0,o.kt)("h2",{id:"get-started-with-sessions"},"Get started with Sessions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'From the homepage, click the "start a session" button'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"create session",src:n(3091).Z,width:"1466",height:"572"})),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Alternatively, click the "start a session" button on the Sessions screen'))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"create session",src:n(2353).Z,width:"2678",height:"696"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose which type of session you\u2019d like to use as your development environment"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"session type",src:n(3240).Z,width:"892",height:"1176"})),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Optionally, setup any other details, like which drive or docker image to use")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click "start session" at the bottom of the page'),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The session spin-up may take a few seconds to a few minutes depending on your session type.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once your session is ready, click an access button to connect to the session. Pictured from left to right: in-browser jupyterlab, in-browser vscode, ssh connection string."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"launch session",src:n(9912).Z,width:"602",height:"320"})))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},' while a session may appear as "running" or "active", until the access buttons beyond ssh appear (e.g. the jupyterlab and vscode access buttons), it may not yet have initialized all its components. If a connection cannot be established, it may simply be because the session is completing initialization. That is most likely the case if you do not see an error in the session logs.'))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("h3",{id:"session-type"},"Session Type"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create session",src:n(3240).Z,width:"892",height:"1176"})),(0,o.kt)("p",null,"The session type that you choose in the session creation popup will prepare your Session with a pre-configured development environment. Relevant packages, frameworks and tools will be made available and the environment will expose the selected hardware."),(0,o.kt)("p",null,"Details on what resources, volumes, and YAML are used for each of the session types can be found by navigating to the Custom PodSpec tab on the Platform and clicking on the card for more details."),(0,o.kt)("p",null,"Contact us for any images that we do not currently support."),(0,o.kt)("h3",{id:"timeout"},"Timeout"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"timeout",src:n(7381).Z,width:"960",height:"642"})),(0,o.kt)("p",null,"Set the Session timeout to your desired session lifetime. The time may be specified as an arbitrary value, in seconds. To disable the timeout completely, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),". Alternatively, a dropdown list of common expiry times is provided for convenience."),(0,o.kt)("p",null,"In the case of in-browser sessions, this value will be interpreted as an idle timeout and will reset every time activity starts again in the session."),(0,o.kt)("p",null,"For SSH connections, it is an absolute timeout: the session will terminate after the specified amount of time has elapsed since session spin-up."),(0,o.kt)("h3",{id:"drive-name---spinning-up-multiple-sessions"},"Drive Name - Spinning up multiple Sessions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select session drive",src:n(4781).Z,width:"898",height:"304"})),(0,o.kt)("p",null,"Each Session is connected to a drive containing your files and folders. ",(0,o.kt)("strong",{parentName:"p"},"Drives may only be used in one session at a time"),"."),(0,o.kt)("p",null,"Each user has a default drive (called ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>'s default drive"),"). Users can spin up multiple sessions by selecting a new drive or creating one if all drives are in use. The default drive is only accessible by the corresponding user, other (created) drives are accessible by anyone."),(0,o.kt)("p",null,'To create a drive, click on the drive management icon next to the Drive selection dropdown, then click the "add drive" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new drive",src:n(6600).Z,width:"1252",height:"550"})))}u.isMDXComponent=!0},9912:function(e,t,n){t.Z=n.p+"assets/images/access_session-8d5fc16c90c5c8214758feb893796094.png"},3240:function(e,t,n){t.Z=n.p+"assets/images/choose_session_type-aa1e12e55b9afe550cf01edda06f2177.png"},6600:function(e,t,n){t.Z=n.p+"assets/images/create_drive_menu-82d7373e4129bc565f09053bc9cc06f4.png"},3091:function(e,t,n){t.Z=n.p+"assets/images/homepage_start_session-7bfbd3c5d3f5102ba88728077cb058bd.png"},4781:function(e,t,n){t.Z=n.p+"assets/images/session_select_drive-07cb6deee9411e4e8b64ce3f64233c97.png"},2353:function(e,t,n){t.Z=n.p+"assets/images/session_start_session-a28da08ce7b38beccf85170dac62cb6f.png"},7381:function(e,t,n){t.Z=n.p+"assets/images/session_timeout-bbabbd97451b156fc033983cbcc96acd.png"}}]);