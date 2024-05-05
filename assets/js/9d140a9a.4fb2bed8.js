"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},l="Jobs - Deploy",p={unversionedId:"shakudo-platform-core/jobs",id:"shakudo-platform-core/jobs",title:"Jobs - Deploy",description:"Shakudo Jobs can be used to schedule one-time or recurrent tasks, depending on the kind of job selected in the Jobs menu",source:"@site/docs/shakudo-platform-core/jobs.md",sourceDirName:"shakudo-platform-core",slug:"/shakudo-platform-core/jobs",permalink:"/shakudo-platform-core/jobs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integrating git into Sessions Jupyterlab",permalink:"/shakudo-platform-core/sessions/versionControl"},next:{title:"Microservices - Serving",permalink:"/shakudo-platform-core/service"}},c={},u=[{value:"Creating a Job",id:"creating-a-job",level:2},{value:"Job Specification (multi-step)",id:"job-specification-multi-step",level:3},{value:"Bash Script (single step job)",id:"bash-script-single-step-job",level:3},{value:"Immediate Jobs",id:"immediate-jobs",level:3},{value:"Scheduled Jobs",id:"scheduled-jobs",level:3},{value:"Parameterizing Notebooks",id:"parameterizing-notebooks",level:2}],d={toc:u};function b(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jobs---deploy"},"Jobs - Deploy"),(0,i.kt)("p",null,"Shakudo Jobs can be used to schedule one-time or recurrent tasks, depending on the kind of job selected in the Jobs menu"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jobs menu",src:n(6434).Z,width:"526",height:"268"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-a-job"},"Creating a Job"),(0,i.kt)("p",null,"Jobs can be created from the corresponding job menu (immediate or scheduled) depending on the desired job type. As the names imply, immediate jobs will run immediately while scheduled jobs will run on a configured schedule."),(0,i.kt)("p",null,"Shakudo supports various job types, including ipython notebooks and python scripts."),(0,i.kt)("h3",{id:"job-specification-multi-step"},"Job Specification (multi-step)"),(0,i.kt)("p",null,"Jobs are specified in a pipeline yaml format. A basic pipeline yaml will resemble the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\nname: [name of your pipeline job]\nworking_dir: (optional) directory where pipeline is ran from (default is the root of the repository)\ntasks:\n  - name: \u201cstep1\u201d\n    type: type of file\n    notebook_path: path to notebook\n    notebook output path: output notebook location\n    depends_on : run steps in parallel or specify dependencies\n    working_dir: (optional) directory where task is ran from (default is the root of the repository)\n")),(0,i.kt)("p",null,"Additional steps can be specified as per job requirements simply by adding more step entries within the tasks list."),(0,i.kt)("p",null,"For the type of file, the following are accepted:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'VSCode notebook: "vscode notebook"'),(0,i.kt)("li",{parentName:"ul"},'Python scripts: "python script", "python", or "py"'),(0,i.kt)("li",{parentName:"ul"},'Javascript: "js script", "javascript", or "js"'),(0,i.kt)("li",{parentName:"ul"},'Jupyter notebooks: "jupyter notebook", "jupyter", "notebook", or "ipynb"')),(0,i.kt)("p",null,"Jobs can be specified for sequential, parallel, or mixed execution. Steps will run sequentially by default. Specifying dependencies in the ",(0,i.kt)("inlineCode",{parentName:"p"},"depends_on")," field of a step entry allows steps to dispatch in parallel, so long as their dependencies (i.e. jobs, identified by name, which have to have completed execution before this step executes) are fulfilled. An empty list (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),") as a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"depends_on")," will dispatch the step immediately (since it has no dependencies), in parallel with other jobs that are ready to run."),(0,i.kt)("p",null,"The following example specifies a step to run in parallel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: \u201cparallelStep\u201d\n    type: type of file\n    notebook_path: path to notebook\n    notebook output path: output notebook location\n    depends_on : []\n")),(0,i.kt)("p",null,"For more examples of pipeline yaml files, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/devsentient/examples/tree/main/example_notebooks/pipelines/advanced_dag_pipeline"},"Shakudo examples repository")),(0,i.kt)("p",null,"Below are example step specifications for job types supported by Shakudo."),(0,i.kt)("p",null,"To add a jupyter notebook step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: "[your_step_name]"\n    type: "jupyter notebook"\n    notebook_path: "[notebook/path/relative/to/top/level/of/repo.ipynb]"\n    notebook_output_path: "[some/notebook_output_name.ipynb]"\n')),(0,i.kt)("p",null,"To add a vscode notebook step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: "[another_step_name]"\n    type: "vscode notebook"\n    py_path: "[py/file/relative/to/top/level/of/repo.py]"\n')),(0,i.kt)("p",null,"To add a Node.js javascript step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: "[another_step_name]"\n    type: "js script"\n    js_path: "[js/file/relative/to/top/level/of/repo.js]"\n')),(0,i.kt)("p",null,"To add a bash script step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: "[another_step_name]"\n    type: "bash script"\n    bash_script_path: "[sh/file/relative/to/top/level/of/repo.sh]"\n')),(0,i.kt)("h3",{id:"bash-script-single-step-job"},"Bash Script (single step job)"),(0,i.kt)("p",null,'If you only need to run a single step consisting of a bash script, select "Shell" instead of "Multi-step" in the Job creation dialogue. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Job with bash script",src:n(3335).Z,width:"1200",height:"749"})),(0,i.kt)("p",null,"As you would for multi-step pipeline YAMLs, specify the path to the bash script relative to the root of your git repo."),(0,i.kt)("p",null,"An example bash script might look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\nset -e\nPROJECT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"\n\ncd "$PROJECT_DIR"\n\npip install foo-package==bar-version\npython ./a-script.py\n')),(0,i.kt)("p",null,"Note the shebang for bash. The -e flag detects errors in the currently running script, and stops the script when one of the commands within returns a non-zero status. PROJECT_DIR finds the current directory of the current bash script. It is useful when you want to reference things relative to the current bash script."),(0,i.kt)("h3",{id:"immediate-jobs"},"Immediate Jobs"),(0,i.kt)("p",null,'Immediate jobs can be created by clicking "start a job" on the Shakudo landing page.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create immediate job",src:n(4643).Z,width:"1466",height:"572"})),(0,i.kt)("p",null,"Creating a job involves, at minimum, filling in the job name (automatically generated by default), environment configuration (which works the same way as for Shakudo sessions or services), and specifying the job yaml specification as described above."),(0,i.kt)("p",null,"When using a non-default environment configuration, advanced settings like source git repository, job timeout, and job retry count can be modified to suit job requirements."),(0,i.kt)("p",null,"Immediate Jobs can be rerun as scheduled jobs from the immediate jobs page by using the actions menu (see ",(0,i.kt)("a",{parentName:"p",href:"#scheduled-jobs"},"Scheduled Jobs")," below), which will clone the job specification and change it into a Scheduled Job."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Immediate jobs actions menu",src:n(520).Z,width:"348",height:"406"})),(0,i.kt)("h3",{id:"scheduled-jobs"},"Scheduled Jobs"),(0,i.kt)("p",null,"Scheduled jobs can be created from the Scheduled Jobs page by first selecting the appropriate menu item"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jobs menu",src:n(6434).Z,width:"526",height:"268"})),(0,i.kt)("p",null,'And clicking on the "create scheduled job" button on the Scheduled Jobs page.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scheduled Jobs",src:n(9919).Z,width:"2640",height:"786"})),(0,i.kt)("p",null,"Scheduled jobs work like ",(0,i.kt)("a",{parentName:"p",href:"#immediate-jobs"},"Immediate Jobs"),", except that a schedule in ",(0,i.kt)("a",{parentName:"p",href:"https://crontab.guru"},"crontab format")," must be specified in addition to other basic fields."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parameterizing-notebooks"},"Parameterizing Notebooks"),(0,i.kt)("p",null,"Jupyter notebooks run as jobs can be parameterized. Parameters can then be specified in the job creation menu in the Parameters tab."),(0,i.kt)("p",null,"To prepare a notebook to use parameters in jupyterlab, click on the cog icon on the top right corner of the cell to parameterize and add a tag called ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters"),'.\nIn vscode, this is the "mark cell as parameters" option in the breadcrumb menu for the cell of interest.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"parameters_jupyter",src:n(2604).Z,width:"1069",height:"251"})),(0,i.kt)("p",null,"The cell's contents will be overwritten by the parameter's value as specified in the Parameters tab, if applicable."))}b.isMDXComponent=!0},4643:function(e,t,n){t.Z=n.p+"assets/images/homepage_start_job-12155ba0b214928e18099116ec5b6f6e.png"},520:function(e,t,n){t.Z=n.p+"assets/images/job_actions_menu-775ddb5c10bcda36b14b059c1a3199c6.png"},3335:function(e,t,n){t.Z=n.p+"assets/images/job_with_bash_script-9a81fd3dd12bd255cfd5f26c3cf5dc86.png"},6434:function(e,t,n){t.Z=n.p+"assets/images/jobs_menu-dc0f9403e156c421b6175230fc0aa19e.png"},2604:function(e,t,n){t.Z=n.p+"assets/images/parameters_jupyter-4b8b5adee6f2360f3ba0f6dd1004d9d8.png"},9919:function(e,t,n){t.Z=n.p+"assets/images/scheduled_jobs_page-a08d2f9f9fe0340b5bab718272ebcae8.png"}}]);