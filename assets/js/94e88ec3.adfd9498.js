"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:9},c="Secrets",l={unversionedId:"shakudo-platform-core/secrets",id:"shakudo-platform-core/secrets",title:"Secrets",description:"Shakudo secrets refer to a Kubernetes object (secret) used to store sensitive information such as passwords, OAuth tokens, and SSH keys. Secrets are typically stored within the cluster in a base64-encoded format and can be mounted into containers as files or be exposed to containers as environment variables. You can seamlessly integrate Google or AWS Key Management Services, Azure Key Vault or Hashicorp Vault as backend and use it as Shakudo secrets.",source:"@site/docs/shakudo-platform-core/secrets.md",sourceDirName:"shakudo-platform-core",slug:"/shakudo-platform-core/secrets",permalink:"/shakudo-platform-core/secrets",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Managing Git Repositories",permalink:"/shakudo-platform-core/addingGit"},next:{title:"Image Builder",permalink:"/shakudo-platform-core/image_builder"}},p={},u=[{value:"How to create a secret?",id:"how-to-create-a-secret",level:3},{value:"How to access a secret in your code?",id:"how-to-access-a-secret-in-your-code",level:3},{value:"<code>pyshakudo</code> to manage secrets.",id:"pyshakudo-to-manage-secrets",level:3},{value:"<code>tsshakudo</code> to manage secrets in your typescript code.",id:"tsshakudo-to-manage-secrets-in-your-typescript-code",level:3}],d={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secrets"},"Secrets"),(0,o.kt)("p",null,"Shakudo secrets refer to a Kubernetes object (secret) used to store sensitive information such as passwords, OAuth tokens, and SSH keys. Secrets are typically stored within the cluster in a base64-encoded format and can be mounted into containers as files or be exposed to containers as environment variables. You can seamlessly integrate Google or AWS Key Management Services, Azure Key Vault or Hashicorp Vault as backend and use it as Shakudo secrets."),(0,o.kt)("p",null,"Within the Shakudo environment, you can create a secret and mount it to your sessions, jobs, or services. The sections below discuss how to create a secret and add those to the Shakudo environment and access them."),(0,o.kt)("h3",{id:"how-to-create-a-secret"},"How to create a secret?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Go to the secrets tab on the Shakudo dashboard and click on "Create Secret" on the top right corner.\n',(0,o.kt)("img",{alt:"create a secret",src:n(8093).Z,width:"270",height:"663"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the name and description of the secret.\nNote: The name should not contain blank space or underscore, since it's a mount directory name when you attach a secret to jobs/sessions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Adding a purpose:\nA secret created by a user is often used in the microservice or within sessions. So, adding a purpose allows users to scope the usage of the secret to a job or session or both."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Development")," refers to ",(0,o.kt)("inlineCode",{parentName:"li"},"sessions")," which creates a secret in the ",(0,o.kt)("inlineCode",{parentName:"li"},"hyperplane-jhub")," namespace and can only be used in sessions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Workloads")," refers to ",(0,o.kt)("inlineCode",{parentName:"li"},"jobs/microservice")," which creates a secret in the ",(0,o.kt)("inlineCode",{parentName:"li"},"hyperplane-pipelines")," namespace and can only be used in microservices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Workloads & Development")," helps create a secret in both of the above namespaces and can be used in all of ",(0,o.kt)("inlineCode",{parentName:"li"},"Sessions"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Jobs")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Microservices"),".")))),(0,o.kt)("h3",{id:"how-to-access-a-secret-in-your-code"},"How to access a secret in your code?"),(0,o.kt)("p",null,"You can access the secret attached to your code via the ",(0,o.kt)("inlineCode",{parentName:"p"},"mount directory"),".\nFor example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you create a secret ",(0,o.kt)("inlineCode",{parentName:"li"},"minio-creds")," with the key as ",(0,o.kt)("inlineCode",{parentName:"li"},"username")," and values as ",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorld")," then it will be mounted at ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/hyperplane/secrets/minio-creds/username")," file.")),(0,o.kt)("p",null,"Alternatively, you can access secrets with environment variables.\n",(0,o.kt)("inlineCode",{parentName:"p"},"HYPERPLANE_CUSTOM_SECRET_KEY_USERNAME")),(0,o.kt)("p",null,"The key which you define will be added as an environment variable with the prefix HYPERPLANE",(0,o.kt)("em",{parentName:"p"},"CUSTOM_SECRET_KEY"),"."),(0,o.kt)("h3",{id:"pyshakudo-to-manage-secrets"},(0,o.kt)("inlineCode",{parentName:"h3"},"pyshakudo")," to manage secrets."),(0,o.kt)("p",null,"Shakudo offers a Python client ",(0,o.kt)("strong",{parentName:"p"},"pyshakudo")," to manage Shakudo resources.\nNote: This is still under development and currently capable of managing secrets."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install --index-url http://pypiserver-pypiserver.hyperplane-pypiserver.svc.cluster.local:8080/simple/ --trusted-host pypiserver-pypiserver.hyperplane-pypiserver.svc.cluster.local pyshakudo==0.1.0")),(0,o.kt)("p",null,"Contact the Shakudo team to get access."),(0,o.kt)("p",null,"In your Python code, use this package to dynamically operate on the secrets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Example code to use pyshakudo to operate on Shakudo secrets in your sessions or microservice.\n\nfrom pyshakudo.secrets import ShakudoSecretsManager\n\ndef main():\n    # Initialize the ShakudoSecretsManager with in-cluster configuration\n    manager = ShakudoSecretsManager()\n\n    # Get a specific secret\n    print("Getting specific secret...")\n\n    secret_name = "test-secret"\n    secret = manager.get_secret(secret_name)\n    print("Retrieved Secret Data:", secret.data)\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h3",{id:"tsshakudo-to-manage-secrets-in-your-typescript-code"},(0,o.kt)("inlineCode",{parentName:"h3"},"tsshakudo")," to manage secrets in your typescript code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tsshakudo")," is a npm package developed by shakudo team to manage shakudo secrets in your node code.\nNote: This is still under development and currently capable to managing secrets."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install npm install tsshakudo@0.1.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ShakudoSecretsManager } from 'tsshakudo';\n\nconst main = async () => {\n  // Initialize the secrets manager with the default namespace and in-cluster config\n  const secretsManager = new ShakudoSecretsManager('hyperplane-jhub');\n\n  // Get the created secret\n  const fetchedSecret = await secretsManager.getSecret('test-secret');\n  console.log('Fetched Secret:', fetchedSecret);\n\nmain().catch((error) => {\n  console.error('Error:', error);\n});\n")))}m.isMDXComponent=!0},8093:function(e,t,n){t.Z=n.p+"assets/images/secrets-tab-72e4a9acd1e63c39b44729050e8e2936.png"}}]);