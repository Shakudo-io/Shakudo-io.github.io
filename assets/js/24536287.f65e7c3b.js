"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5406],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={},o="Build and Deploy with Streamlit on Shakudo",p={unversionedId:"tutorials/streamlitapp",id:"tutorials/streamlitapp",title:"Build and Deploy with Streamlit on Shakudo",description:"In this tutorial, we will create a data app with Shakudo and Streamlit, the popular python library to build and share data apps in minutes.",source:"@site/docs/tutorials/streamlitapp.md",sourceDirName:"tutorials",slug:"/tutorials/streamlitapp",permalink:"/tutorials/streamlitapp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Confluence Q&A App on Shakudo with Langchain and ChatGPT",permalink:"/tutorials/confluenceapp"}},c={},u=[{value:"Building the App",id:"building-the-app",level:2},{value:"Deploying on Shakudo",id:"deploying-on-shakudo",level:2}],d={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-and-deploy-with-streamlit-on-shakudo"},"Build and Deploy with Streamlit on Shakudo"),(0,l.kt)("p",null,"In this tutorial, we will create a data app with Shakudo and ",(0,l.kt)("a",{parentName:"p",href:"https://streamlit.io/"},"Streamlit"),", the popular python library to build and share data apps in minutes."),(0,l.kt)("p",null,"While streamlit will let us build a webapp with no fuss or web expertise required, it will not scale by default. Shakudo automatically handles scaling and redundancy for you, so that you can deploy your app with confidence no matter your future workloads."),(0,l.kt)("h2",{id:"building-the-app"},"Building the App"),(0,l.kt)("p",null,"Let's create a small dashboard for demonstration purposes. We will call it ",(0,l.kt)("inlineCode",{parentName:"p"},"dashtest.py"),". Before we get started, let's create a script called ",(0,l.kt)("inlineCode",{parentName:"p"},"run.sh")," so we can just execute the script to easily run our streamlit app. Its contents should be as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"streamlit run streamlit_example/dashtest.py --server.port 8787 --browser.serverAddress localhost\n")),(0,l.kt)("p",null,"Remember to adjust your paths! When developing on Shakudo, the localhost port will automatically be forwarded when using vscode or codeserver. In vscode, the following notification will pop up to access the app from the local browser:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"VSCode port forwarding",src:n(1222).Z,width:"1284",height:"310"})),(0,l.kt)("p",null,"We will also maintain a ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file to keep track of our dependencies (in this case, that will be streamlit alone). It is recommended to keep track of the exact version of your dependencies to ease reproducibility, but that is not necessary for this demo."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"streamlit\n")),(0,l.kt)("p",null,"Now let's get started with the app proper."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import streamlit as st\n")),(0,l.kt)("p",null,"Let's set the page title and icon in our ",(0,l.kt)("inlineCode",{parentName:"p"},"dashtest.py")," script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'st.set_page_config(\n            page_title="Shakudo Streamlit Example",\n            page_icon=":shark:"\n        )\n')),(0,l.kt)("p",null,"And run the startup script to make sure everything is working fine. If all goes well, you should be able to access the page on ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8787"),". While the page is blank, the title should look like in this picture:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"My first streamlit app",src:n(4296).Z,width:"568",height:"166"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Next, let's organize a basic layout and play with some simple widgets:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'st.title("This is an example Title")\nst.subheader("multiple columns")\ncol1, col2, col3 = st.columns([2, 4, 5])\nwith col1:\n    st.button("Click me", on_click=lambda: st.balloons())\nwith col2:\n    st.text("this is a text place holder")\nwith col3:\n    st.table([[1, 2, 3], [4, 5, 6]])\n')),(0,l.kt)("p",null,"Here we created 3 columns spanning 2, 4, and 5 units of space. We then filled the first column with a button, the second with a simple text, and the third with a table. If all went well, we can now run our start script and Streamlit will load the page in the default browser. The result should look like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Streamlit columns",src:n(3465).Z,width:"1466",height:"526"})),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'col4, col5 = st.columns([5, 5])\n\nwith col4:\n    st.subheader("json content")\n    st.json("""{\n        "key" : "value",\n        "key2" : 123,\n        "somelist" : [1, 2, "3"]\n    }""")\nwith col5:\n    st.subheader(\'charts\')\n    st.bar_chart([1, 4, 5, 3, 2, 6])\n')),(0,l.kt)("p",null,"Streamlit supports many kinds of elements, including json displays and various charts, which are displayed beautifully without any user styling or tweaking."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Streamlit basic widgets",src:n(279).Z,width:"1470",height:"1334"})),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'st.subheader("Progress bar")\nimport time\nprogressbar =  st.empty()\nn = 0\n\nwith st.expander("expandable"):\n    st.text("""This is some text.\n            """* 30)\n\nwith st.sidebar:\n    st.slider("slider", 0, 100, 50)\n    st.select_slider("select slider", list(range(10)))\n    st.selectbox(\'select box\', [\'apple\', \'banana\', \'pear\'])\n    st.checkbox(\'check box 1\')\n    st.checkbox(\'check box 2\')\n    st.checkbox(\'check box 3\')\n    st.checkbox(\'check box 4\')\n    st.time_input("time")\n    st.date_input("Date")\n    st.text_input("text")\n\nwhile 1:\n    n += 1\n    with progressbar:\n        st.progress(n)\n    time.sleep(1)\n    if n == 100:\n        n = 0\n')),(0,l.kt)("p",null,"Here we show how streamlit allows us to easily interact with controls such as progress bars: it's as simple as a ",(0,l.kt)("inlineCode",{parentName:"p"},"st.progress"),' after "entering" the ',(0,l.kt)("inlineCode",{parentName:"p"},"progressbar")," in a ",(0,l.kt)("inlineCode",{parentName:"p"},"with")," block. Streamlit also allows quickly creating common UI elements like sidebars and supports various user inputs, like dates, times, dropdown selectors, and more. The final result is shown below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Streamlit dashboard demo",src:n(3481).Z,width:"2358",height:"1520"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"deploying-on-shakudo"},"Deploying on Shakudo"),(0,l.kt)("p",null,"For long-running tasks, Shakudo provides Services, which are defined with a simple yaml file that described the set of steps to run. For our deployment, all we need is the following pipeline definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  name: "streamlit"\n  requirements: "streamlit_example/requirements.txt"\n  tasks:\n  - name: "dashbaord example"\n    type: "bash script"\n    port: 8787\n    bash_script_path: "streamlit_example/run.sh"\n')),(0,l.kt)("p",null,"That's it! Now we can create a service, specify the repository where we pushed the code and yaml, the path from the repository's root, and run the service. Our app is now available on port 8787 at the endpoint we selected during service configuration on Shakudo."))}h.isMDXComponent=!0},3465:function(e,t,n){t.Z=n.p+"assets/images/streamlit_columns-f772788b758b861c86b391676f4b84c3.png"},3481:function(e,t,n){t.Z=n.p+"assets/images/streamlit_dashboard-51a9052478213bce571be6d0e75577d9.png"},4296:function(e,t,n){t.Z=n.p+"assets/images/streamlit_helloworld-f4532b6af6f1cb7be1a21b4abc5c8100.png"},279:function(e,t,n){t.Z=n.p+"assets/images/streamlit_widgets-72e3cd8933c1fdc840c102fedf2929c2.png"},1222:function(e,t,n){t.Z=n.p+"assets/images/vscode_port_forward-c754a1c563893f5ee25134ccb28f936c.png"}}]);