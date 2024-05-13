"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1474],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7938:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:3},l="Microservices - Serving",c={unversionedId:"shakudo-platform-core/service",id:"shakudo-platform-core/service",title:"Microservices - Serving",description:"Shakudo services are long-running jobs with an exposed endpoint. Services are only available from within the cluster by default, but can also be reached externally using a jwt token (explained below).",source:"@site/docs/shakudo-platform-core/service.md",sourceDirName:"shakudo-platform-core",slug:"/shakudo-platform-core/service",permalink:"/shakudo-platform-core/service",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Jobs - Deploy",permalink:"/shakudo-platform-core/jobs"},next:{title:"Admin Settings",permalink:"/category/admin-settings"}},p={},d=[{value:"Creating a Microservice",id:"creating-a-microservice",level:2},{value:"Basic settings",id:"basic-settings",level:3},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Starting with a bash script",id:"starting-with-a-bash-script",level:3},{value:"Service actions",id:"service-actions",level:2},{value:"Cancel",id:"cancel",level:3},{value:"Clone",id:"clone",level:3},{value:"Restart",id:"restart",level:3},{value:"Updating a service",id:"updating-a-service",level:2},{value:"Accessing a service from outside the cluster",id:"accessing-a-service-from-outside-the-cluster",level:2}],u={toc:d};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microservices---serving"},"Microservices - Serving"),(0,i.kt)("p",null,"Shakudo services are long-running jobs with an exposed endpoint. Services are only available from within the cluster by default, but can also be reached externally using a jwt token (explained below).\nServices are the best way to make an application available or to enable real-time data processing or streaming appplications on Shakudo."),(0,i.kt)("h2",{id:"creating-a-microservice"},"Creating a Microservice"),(0,i.kt)("p",null,'Services can be created from the Shakudo landing page by clicking the "start a service" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start a service",src:a(4232).Z,width:"1466",height:"572"})),(0,i.kt)("p",null,'Alternatively, services can be created from the service page by clicking "create service".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Start a service",src:a(9017).Z,width:"2768",height:"756"})),(0,i.kt)("h3",{id:"basic-settings"},"Basic settings"),(0,i.kt)("p",null,"A basic service can be started by simply providing the service name (automatically generated by default), the desired service endpoint, an environment configuration (which work the same way as in Shakudo ",(0,i.kt)("a",{parentName:"p",href:"https://docs.shakudo.io/shakudo-platform-core/sessions/"},"Sessions"),"), and a path to the service configuration yaml file, relative to the git repository associated with the service (configurable in the advanced tab)"),(0,i.kt)("h3",{id:"advanced-settings"},"Advanced settings"),(0,i.kt)("p",null,"The advanced tab allows configuring some more advanced service parameters, described in the table below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enter a port to expose between 1 and 65535. The default for Shakudo Platform services is port 8787.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Min Replicas"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Minimum amount of replicas running the service simultaneously")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Max Replicas"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximum amount of replicas running the service simultaneously")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Git repository"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The git repository associated with the service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Branch"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Git branch name for the service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Git commit ID hash to use for the service")))),(0,i.kt)("p",null,"The git repository, branch and commit will be used to clone a project into the service environment, and the serivce yaml will be located and run from the root of the cloned project."),(0,i.kt)("p",null,"Additional arbitrary parameters for the service runner configuration can be set in the Parameters tab. "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Similarly to Jobs, you can add Parameters to inject some additional information, which you can use in your code. When you attach Parameters, they will be available as environment variables, in upper case, with all non-alphanumeric characters replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),'. For example, if you add an parameter with name "model-name", it will be accessible as the ',(0,i.kt)("inlineCode",{parentName:"p"},"MODEL_NAME")," in the Service's environment variables. "),(0,i.kt)("p",null,"To maintain backward compatibility with legacy services, Parameters are also available with the ",(0,i.kt)("inlineCode",{parentName:"p"},"HYPERPLANE_JOB_PARAMETER_"),". Using the example above, this would be ",(0,i.kt)("inlineCode",{parentName:"p"},"HYPERPLANE_JOB_PARAMETER_MODEL_NAME"),". "),(0,i.kt)("p",null,"Note that these values are stored in plain text, it's recommended that you use Secrets for API keys, keyfile strings, access credentials, and other secret values."),(0,i.kt)("h3",{id:"secrets"},"Secrets"),(0,i.kt)("p",null,"When you attach Secrets, they will be available both as environment variables and as a file. "),(0,i.kt)("p",null,"In the case of environment variable, the secret key will be converted to upper case, with all non-alphanumeric characters replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),", and prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"HYPERPLANE_CUSTOM_SECRET_KEY_"),'. For example, if you add an parameter with name "openai-key", it will be accessible as the ',(0,i.kt)("inlineCode",{parentName:"p"},"HYPERPLANE_CUSTOM_SECRET_KEY_OPENAI_KEY")," in the Service's environment variables. "),(0,i.kt)("p",null,"Secrets are available as files, in the format of ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hyperplane/secrets/{secret_name}/{secret_key}"),"."),(0,i.kt)("h3",{id:"starting-with-a-bash-script"},"Starting with a bash script"),(0,i.kt)("p",null,'If you only need to run a single step consisting of a bash script to start your app, select "Shell" instead of "Multi-step" in the Job creation dialogue. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Microservice with bash script",src:a(3335).Z,width:"1200",height:"749"})),(0,i.kt)("p",null,"As you would for multi-step pipeline YAMLs, specify the path to the bash script relative to the root of your git repo."),(0,i.kt)("p",null,"An example bash script might look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\nset -e\nPROJECT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\n\ncd "$PROJECT_DIR"\n\npip install foo-package==bar-version\npython ./app.py\n')),(0,i.kt)("p",null,"Note the shebang for bash. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag detects errors in the currently running script, and stops the script when one of the commands within returns a non-zero status. ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_DIR")," finds the current directory of the current bash script. It is useful when you want to reference things relative to the current bash script. "),(0,i.kt)("p",null,"This bash script will start your microservice (e.g. a Flask app) and run until app.py exits with an error. In the case of an error, the pod will be restarted and the script will rerun from the top."),(0,i.kt)("h2",{id:"service-actions"},"Service actions"),(0,i.kt)("p",null,"The service actions menu can be used to operate on a current or past service."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Service actions",src:a(7643).Z,width:"286",height:"400"})),(0,i.kt)("h3",{id:"cancel"},"Cancel"),(0,i.kt)("p",null,'A current service can be cancelled by choosing the "cancel" action in the action menu.'),(0,i.kt)("h3",{id:"clone"},"Clone"),(0,i.kt)("p",null,'A new service can be created based on the configuration of an existing service by choosing the "clone" action. This can also be used on past services that have been cancelled to recreate a service of the same type, or to use the service settings as a template for faster iteration.'),(0,i.kt)("h3",{id:"restart"},"Restart"),(0,i.kt)("p",null,'Restarting a service (which will cause it to pull from the associated repository as per its settings) can be done by selecting the "restart" action.'),(0,i.kt)("h2",{id:"updating-a-service"},"Updating a service"),(0,i.kt)("p",null,"Shakudo does not yet support a single-action update operation on services. Instead, when a service configuration is modified, services are updated by first closing a service and then starting it anew with an updated configuration. For updates to the service code (from the repository associated with the repository), the service should be restarted with the restart action."),(0,i.kt)("h2",{id:"accessing-a-service-from-outside-the-cluster"},"Accessing a service from outside the cluster"),(0,i.kt)("p",null,"Services can be accessed externally using a jwt token using the bearer method."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prepare to make a ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://{your_shakudo_domain}/auth/realms/{realm_name}/protocol/openid-connect/token"),", for example using ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"postman"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{your_shakudo_domain}")," is the domain at which your keycloak is available, which is usually the same domain at which you access your cluster running Shakudo"),(0,i.kt)("li",{parentName:"ul"},"You must know your ",(0,i.kt)("inlineCode",{parentName:"li"},"{realm_name}")," to obtain the jwt token."))),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"Content-Type")," header to ",(0,i.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,i.kt)("li",{parentName:"ul"},"Set the following parameters in the request body:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),": the client used to get the token (probably ",(0,i.kt)("inlineCode",{parentName:"li"},"istio"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grant_type"),": value should be ",(0,i.kt)("inlineCode",{parentName:"li"},"password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username"),": Your username"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password"),": Your password")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Access Type must be public to obtain a jwt this way"))),(0,i.kt)("p",null,"The response jwt can then be used to access service endpoints: simply add ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {token}")," to your Headers, with ",(0,i.kt)("inlineCode",{parentName:"p"},"{token}")," being the jwt obtained in the previous step."))}h.isMDXComponent=!0},4232:function(e,t,a){t.Z=a.p+"assets/images/homepage_start_service-384b3451ff23debe3b88aea5fded174b.png"},3335:function(e,t,a){t.Z=a.p+"assets/images/job_with_bash_script-9a81fd3dd12bd255cfd5f26c3cf5dc86.png"},7643:function(e,t,a){t.Z=a.p+"assets/images/service_actions-0dea86a0f09f18e7f1046d10600ba8b1.png"},9017:function(e,t,a){t.Z=a.p+"assets/images/service_start_service-9ba7f7510fc05159104dc42206d646fc.png"}}]);