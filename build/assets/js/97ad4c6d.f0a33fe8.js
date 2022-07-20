"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7635],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Custom Secrets",c={unversionedId:"advanced guides/customsecret",id:"advanced guides/customsecret",title:"Custom Secrets",description:"Configuring a Custom Secret to Attach to Pipelines",source:"@site/docs/advanced guides/customsecret.md",sourceDirName:"advanced guides",slug:"/advanced guides/customsecret",permalink:"/advanced guides/customsecret",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Guides",permalink:"/category/advanced-guides"},next:{title:"Custom Images",permalink:"/advanced guides/customimage"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The Steps To Deploy A Secret",id:"the-steps-to-deploy-a-secret",level:2},{value:"Configuring GCP SDK / CLI to use the new secret",id:"configuring-gcp-sdk--cli-to-use-the-new-secret",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-secrets"},"Custom Secrets"),(0,a.kt)("p",null,"Configuring a Custom Secret to Attach to Pipelines"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The following tools are needed to add custom secrets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl + kubeconfig access to Shakudo Platform")),(0,a.kt)("h2",{id:"the-steps-to-deploy-a-secret"},"The Steps To Deploy A Secret"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),": ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\ninstall -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Get the secret name and note it somewhere. We'll refer to it as ",(0,a.kt)("inlineCode",{parentName:"li"},"HYPERPLANE_CUSTOM_DEPLOY_SECRET"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo $HYPERPLANE_CUSTOM_DEPLOY_SECRET\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Get the pipelines kubernetes namespace and note it somewhere. We'll refer to it as ",(0,a.kt)("inlineCode",{parentName:"li"},"PIPELINES_NAMESPACE"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo $PIPELINES_NAMESPACE\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Base64 encode your secret ",(0,a.kt)("inlineCode",{parentName:"li"},"my_secret_key.json"),". We'll refer to the output of the following command as ENCODED_SECRET")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat my_secret_key.json | base64 -w 0\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Create the kubernetes secret YAML file ",(0,a.kt)("inlineCode",{parentName:"li"},"my_secret_key_k8s.yaml")," as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\ndata:\n  my_key_file.json: ENCODED_SECRET\nkind: Secret\nmetadata:\n  name: HYPERPLANE_CUSTOM_DEPLOY_SECRET\n  namespace: PIPELINES_NAMESPACE\ntype: Opaque\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Deploy the kubernetes secret:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f my_secret_key_k8s.yaml\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"You should see an output like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u276f kubectl apply -f my_secret_key_k8s.yaml \nsecret/custom-deploy-secrets-vpqqv7ba configured\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"That's it!")),(0,a.kt)("h2",{id:"configuring-gcp-sdk--cli-to-use-the-new-secret"},"Configuring GCP SDK / CLI to use the new secret"),(0,a.kt)("p",null,"The app key only gets deployed in the pipelines and services, whereas in jupyter each user can use their own credentials. To configure GCP to use the app key in the pipelines you can use the following function in your jupyter notebooks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import os\ndef is_jhub():\n    if ("HYPERPLANE_JOB_ID" not in os.environ or os.environ["HYPERPLANE_JOB_ID"] == "__local_test"):\n        print("From jupyter. Not modifying GCP credentials path.")\n        return True\n    else:\n        print("From pipeline. Updating GCP credentials path to app key.")\n        os.environ[\'GOOGLE_APPLICATION_CREDENTIALS\'] = "/etc/hyperplane/secrets/my_key_file.json"\n        return False\n')),(0,a.kt)("p",null,"It will modify the GCP credentials path, but only when this code is executed in the pipelines."))}m.isMDXComponent=!0}}]);