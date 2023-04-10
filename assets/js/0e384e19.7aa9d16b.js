"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||i;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1,id:"intro",title:"Welcome to Shakudo",tags:["intro","get started"],description:"Get started",slug:"/home"},u="What is Shakudo",s={unversionedId:"intro",id:"intro",title:"Welcome to Shakudo",description:"Get started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/home",permalink:"/home",draft:!1,tags:[{label:"intro",permalink:"/tags/intro"},{label:"get started",permalink:"/tags/get-started"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Welcome to Shakudo",tags:["intro","get started"],description:"Get started",slug:"/home"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/category/getting-started"}},p={},d=[{value:"Data Warehouse",id:"data-warehouse",level:3},{value:"Blob Storage",id:"blob-storage",level:3},{value:"Data Ingestion and streaming",id:"data-ingestion-and-streaming",level:3},{value:"IDE",id:"ide",level:3},{value:"Data Transformation",id:"data-transformation",level:3},{value:"Pipeline Ochastration",id:"pipeline-ochastration",level:3},{value:"Distributed computing",id:"distributed-computing",level:3},{value:"Data Visualization",id:"data-visualization",level:3},{value:"DataCatelog",id:"datacatelog",level:3},{value:"Model training",id:"model-training",level:3},{value:"Model and application serving",id:"model-and-application-serving",level:3},{value:"Model monitoring and governance",id:"model-monitoring-and-governance",level:3},{value:"Monitoring and Alerting",id:"monitoring-and-alerting",level:3},{value:"Data source",id:"data-source",level:3},{value:"Geospatial",id:"geospatial",level:3},{value:"When to use Shakudo",id:"when-to-use-shakudo",level:2}],m={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-shakudo"},"What is Shakudo"),(0,i.kt)("p",null,"Shakudo is an end-to-end data platform that provides the maximum flexibility on data tooling. On Shakudo, data teams can choose and mix and match best-of-breed tools and try out new emerging tools without the DevOps overhead. On Shakudo the workflow is simplified with the Shakudo components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shakudo-platform-core/sessions"},(0,i.kt)("strong",{parentName:"a"},"Session"))," is the unified development environment with pre-configured environment, mounted credentials, network connections and connections to databases to allow start building. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shakudo-platform-core/jobs"},(0,i.kt)("strong",{parentName:"a"},"Jobs"))," is the batch job deployment ochestration. you can use any GIT repositories, which are developed and pushed in the sessions, or anywhere else. You can also deploy a pre-built Docker images. Jobs can be triggered on a schedule or with any ",(0,i.kt)("a",{parentName:"p",href:"https://keda.sh/docs/2.10/scalers"},"KEDA scalers"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shakudo-platform-core/service"},(0,i.kt)("strong",{parentName:"a"},"Services"))," is the service deployment ochestration. Similar to jobs, you can use GIT repositories or pre-built Docker images. A service exposes an endpoint, which can be a dashboard, a website or an API endpoint. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shakudo-stack/overview"},(0,i.kt)("strong",{parentName:"a"},"Shakudo Stack Components"))," is the pre-configured fully-connected data stack for the  "))),(0,i.kt)("p",null,"Shakudo adds new integrations every day. Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://www.shakudo.io/integrations"},"integration page")," to see the latest list. If you can't find the tool you are looking for, please send us an ",(0,i.kt)("a",{parentName:"p",href:"https://www.shakudo.io/contact-us"},"integration request"),"."),(0,i.kt)("h3",{id:"data-warehouse"},"Data Warehouse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Snowflake"),(0,i.kt)("li",{parentName:"ul"},"Dremio"),(0,i.kt)("li",{parentName:"ul"},"Bigquery"),(0,i.kt)("li",{parentName:"ul"},"Redshift"),(0,i.kt)("li",{parentName:"ul"},"Apache Hudi"),(0,i.kt)("li",{parentName:"ul"},"Singlestore")),(0,i.kt)("h3",{id:"blob-storage"},"Blob Storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure blob storage"),(0,i.kt)("li",{parentName:"ul"},"AWS S3"),(0,i.kt)("li",{parentName:"ul"},"Google storage bucket"),(0,i.kt)("li",{parentName:"ul"},"Oracle blob storage "),(0,i.kt)("li",{parentName:"ul"},"R2 "),(0,i.kt)("li",{parentName:"ul"},"Wasabi")),(0,i.kt)("h3",{id:"data-ingestion-and-streaming"},"Data Ingestion and streaming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Airbyte"),(0,i.kt)("li",{parentName:"ul"},"Eventbridge"),(0,i.kt)("li",{parentName:"ul"},"Apache Kafka")),(0,i.kt)("h3",{id:"ide"},"IDE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jupyter notebooks"),(0,i.kt)("li",{parentName:"ul"},"VSCode"),(0,i.kt)("li",{parentName:"ul"},"Codeserver")),(0,i.kt)("h3",{id:"data-transformation"},"Data Transformation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DBT"),(0,i.kt)("li",{parentName:"ul"},"DuckDB"),(0,i.kt)("li",{parentName:"ul"},"Trino")),(0,i.kt)("h3",{id:"pipeline-ochastration"},"Pipeline Ochastration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Airflow"),(0,i.kt)("li",{parentName:"ul"},"Prefect"),(0,i.kt)("li",{parentName:"ul"},"Dagster"),(0,i.kt)("li",{parentName:"ul"},"Jenkins")),(0,i.kt)("h3",{id:"distributed-computing"},"Distributed computing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apache Spark"),(0,i.kt)("li",{parentName:"ul"},"Dask"),(0,i.kt)("li",{parentName:"ul"},"Ray"),(0,i.kt)("li",{parentName:"ul"},"Fugue")),(0,i.kt)("h3",{id:"data-visualization"},"Data Visualization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apache Superset"),(0,i.kt)("li",{parentName:"ul"},"Cube "),(0,i.kt)("li",{parentName:"ul"},"Streamlit"),(0,i.kt)("li",{parentName:"ul"},"Metabase"),(0,i.kt)("li",{parentName:"ul"},"PowerBI"),(0,i.kt)("li",{parentName:"ul"},"Quicksight"),(0,i.kt)("li",{parentName:"ul"},"Looker")),(0,i.kt)("h3",{id:"datacatelog"},"DataCatelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Datahub"),(0,i.kt)("li",{parentName:"ul"},"Amundsen")),(0,i.kt)("h3",{id:"model-training"},"Model training"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transformers"),(0,i.kt)("li",{parentName:"ul"},"Pytorch"),(0,i.kt)("li",{parentName:"ul"},"Tensorflow"),(0,i.kt)("li",{parentName:"ul"},"Jax"),(0,i.kt)("li",{parentName:"ul"},"NVIDIA RAPIDS"),(0,i.kt)("li",{parentName:"ul"},"Ray Tune  ")),(0,i.kt)("h3",{id:"model-and-application-serving"},"Model and application serving"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Triton"),(0,i.kt)("li",{parentName:"ul"},"TensorFlow Serving "),(0,i.kt)("li",{parentName:"ul"},"TorchServe"),(0,i.kt)("li",{parentName:"ul"},"Django"),(0,i.kt)("li",{parentName:"ul"},"FastAPI"),(0,i.kt)("li",{parentName:"ul"},"Flask ")),(0,i.kt)("h3",{id:"model-monitoring-and-governance"},"Model monitoring and governance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MLFlow"),(0,i.kt)("li",{parentName:"ul"},"Whylogs"),(0,i.kt)("li",{parentName:"ul"},"Weights & Biases"),(0,i.kt)("li",{parentName:"ul"},"Evidently"),(0,i.kt)("li",{parentName:"ul"},"GreatExpectations")),(0,i.kt)("h3",{id:"monitoring-and-alerting"},"Monitoring and Alerting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prometheus"),(0,i.kt)("li",{parentName:"ul"},"Grafana"),(0,i.kt)("li",{parentName:"ul"},"PagerDuty"),(0,i.kt)("li",{parentName:"ul"},"Slack")),(0,i.kt)("h3",{id:"data-source"},"Data source"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Databento"),(0,i.kt)("li",{parentName:"ul"},"Openbb")),(0,i.kt)("h3",{id:"geospatial"},"Geospatial"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xclim"),(0,i.kt)("li",{parentName:"ul"},"Xarray"),(0,i.kt)("li",{parentName:"ul"},"cdo"),(0,i.kt)("li",{parentName:"ul"},"Geopandas"),(0,i.kt)("li",{parentName:"ul"},"GDAL"),(0,i.kt)("li",{parentName:"ul"},"ESMF"),(0,i.kt)("li",{parentName:"ul"},"Zarr")),(0,i.kt)("h2",{id:"when-to-use-shakudo"},"When to use Shakudo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data engineering, including data transformation development and deployment"),(0,i.kt)("li",{parentName:"ul"},"Distributed computing for data larger than memory"),(0,i.kt)("li",{parentName:"ul"},"Data analytics and visualization"),(0,i.kt)("li",{parentName:"ul"},"Deployment of batch jobs"),(0,i.kt)("li",{parentName:"ul"},"Serving data applications and pipelines"),(0,i.kt)("li",{parentName:"ul"},"Machine learning model training"),(0,i.kt)("li",{parentName:"ul"},"Machine learning model serving")))}k.isMDXComponent=!0}}]);