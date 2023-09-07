"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Create a React App",p={unversionedId:"tutorials/buildareactapp",id:"tutorials/buildareactapp",title:"Create a React App",description:"You can create a React application on the Shakudo Platform as a service. Follow the steps below to get started!",source:"@site/docs/tutorials/buildareactapp.md",sourceDirName:"tutorials",slug:"/tutorials/buildareactapp",permalink:"/tutorials/buildareactapp",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/category/tutorial"},next:{title:"Confluence Q&A App on Shakudo with Langchain and ChatGPT",permalink:"/tutorials/confluenceapp"}},l={},s=[{value:"1. Prepare your environment",id:"1-prepare-your-environment",level:2},{value:"2. Create a pipeline YAML",id:"2-create-a-pipeline-yaml",level:2},{value:"3. Edit your <code>package.json</code> to host your React app",id:"3-edit-your-packagejson-to-host-your-react-app",level:2},{value:"4. Create your React App on the dashboard",id:"4-create-your-react-app-on-the-dashboard",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-react-app"},"Create a React App"),(0,r.kt)("p",null,"You can create a React application on the Shakudo Platform as a service. Follow the steps below to get started!"),(0,r.kt)("h2",{id:"1-prepare-your-environment"},"1. Prepare your environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start a ",(0,r.kt)("a",{parentName:"li",href:"/shakudo-platform-core/sessions/"},"Session")," with the NodeJs image"),(0,r.kt)("li",{parentName:"ol"},"Open your sessions and check your node version using: ",(0,r.kt)("inlineCode",{parentName:"li"},"node \u2014version")),(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"npx")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install npx")),(0,r.kt)("li",{parentName:"ol"},"Create a React app using ",(0,r.kt)("inlineCode",{parentName:"li"},"npx create-react-app my-react-app"))),(0,r.kt)("h2",{id:"2-create-a-pipeline-yaml"},"2. Create a pipeline YAML"),(0,r.kt)("p",null,"Create a .yaml file to list your steps. You can start with adding the following template to ",(0,r.kt)("inlineCode",{parentName:"p"},"react_pipeline.yaml"),":  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pipeline:\n  name: "Example pipeline"\n  tasks:\n  - ...\n')),(0,r.kt)("p",null,"Add a Bash script step by adding the following block to your YAML. The Bash script should be runnable with ",(0,r.kt)("inlineCode",{parentName:"p"},"bash [bash_script_path]"),". This will install the dependencies and start your Node server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  - name: "[another_step_name]"\n    type: "bash script"\n    bash_script_path: "[sh/file/relative/to/top/level/of/repo.sh]"\n')),(0,r.kt)("p",null,"An example bash script to start your React application is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'PROJECT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\ncd "$PROJECT_DIR"\n\nyes Y | curl -sL https://deb.nodesource.com/setup_14.x | bash -\napt update\napt install nodejs\nnpm install\nnpm start\n')),(0,r.kt)("h2",{id:"3-edit-your-packagejson-to-host-your-react-app"},"3. Edit your ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")," to host your React app"),(0,r.kt)("p",null,"When you want to host a React application on the Shakudo platform you have to specify the homepage of your application. This will be the root domain plus the the prefix which will host your React application. "),(0,r.kt)("p",null,"You should also set your host as 0.0.0.0 and the port as 8787 on your start script, and turn of VS Rewrite."),(0,r.kt)("p",null,"An example ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name": "my-react-app",\n  "version": "0.1.0",\n  "private": true,\n  "homepage": "https://[CLUSTER_NAME].hyperplane.dev/[my-app]/",\n  ...\n  "scripts": {\n    "start": "HOST=0.0.0.0 PORT=8787 react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  ...\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ","[my-app]"," prefix should match the dashboard URL prefix when creating your service in step 4")),(0,r.kt)("h2",{id:"4-create-your-react-app-on-the-dashboard"},"4. Create your React App on the dashboard"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"Services")," tab on the dashboard to start your React application\n",(0,r.kt)("img",{alt:"services dashboard",src:a(8461).Z,title:"services dashboard",width:"2878",height:"1414"})),(0,r.kt)("p",null,"Set the pipeline YAML path and the endpoint for your React app. The endpoint should be the same as the one specified in previous step. Also turn off the Virtual Service Path Rewrite.\n",(0,r.kt)("img",{alt:"create a service on dashboard",src:a(7101).Z,title:"create a service on dashboard",width:"2872",height:"1400"})),(0,r.kt)("p",null,"Then click ",(0,r.kt)("strong",{parentName:"p"},"Create")," on the top right corner. You React App should appear in the services tab in the dashboard."),(0,r.kt)("admonition",{title:"Important notes when cloning other git repositories",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Exclude the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," folder when committing your code to your Shakudo repository"),(0,r.kt)("li",{parentName:"ul"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"package-lock.json")," to avoid mismatching packages."),(0,r.kt)("li",{parentName:"ul"},"Ensure that your bash script can start your React app when your run it on your session. "))),(0,r.kt)("p",null,"You can use our GraphQL mutation query in the GraphQL playground to create your React App Service. Copy the GraphQL mutation created on the left handside of the service creation dialogue or simply copy the code block below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation {\n    createShakudoService(\n        jobName: "my-react-app",\n        maxRetries: 2, \n        urlPrefix:  "my-app",\n        jobType: "basic",\n        pipelineYamlPath: "my-react-app/react_pipeline.yaml",\n        defaultCommands: true,\n        gitInit: true,\n        vsRewrite: false,\n        parameters: { create: [\n            ]}  \n    ) {\n        id\n        jobName\n        dashboardPrefix\n        parameters {\n            key\n            value\n        }\n        noGitInit\n        noHyperplaneCommands\n    }\n}\n')),(0,r.kt)("p",null,"Open the GraphQL playground from the dashboard and paste the code above into the lefthand side and press the play button. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note the the ",(0,r.kt)("inlineCode",{parentName:"li"},"urlPrefix")," should match the dashboard URL prefix set in your ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file as the homepage of your application.")))}d.isMDXComponent=!0},7101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_service_panel-315824b35b2e617ffca009a4c3982c61.png"},8461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/services_panel-1d01cdc03d398ff94441d3f684229a10.png"}}]);