"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5751],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={sidebar_position:1},s="Milvus",c={unversionedId:"Shakudo-stack/vectorStores/milvus",id:"Shakudo-stack/vectorStores/milvus",title:"Milvus",description:"Milvus is a high-performance, highly scalable vector database. It is one of the most popular vector database as of this writing. Milvus is a great choice to manage large collections of documents for applications ranging from knowledgebase-oriented information retrieval to image similarity search.",source:"@site/docs/Shakudo-stack/vectorStores/milvus.md",sourceDirName:"Shakudo-stack/vectorStores",slug:"/Shakudo-stack/vectorStores/milvus",permalink:"/Shakudo-stack/vectorStores/milvus",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vector Stores",permalink:"/category/vector-stores"},next:{title:"Data Transformation",permalink:"/category/data-transformation"}},d={},p=[{value:"Connections",id:"connections",level:2},{value:"Creating a connection",id:"creating-a-connection",level:3},{value:"Closing a connection",id:"closing-a-connection",level:3},{value:"Databases",id:"databases",level:2},{value:"Collections",id:"collections",level:2},{value:"Creating a Collection",id:"creating-a-collection",level:3},{value:"Inserting data in a collection",id:"inserting-data-in-a-collection",level:3},{value:"Creating an index",id:"creating-an-index",level:3},{value:"Referring to an existing collection",id:"referring-to-an-existing-collection",level:3},{value:"Loading a collection",id:"loading-a-collection",level:3},{value:"Releasing a collection",id:"releasing-a-collection",level:3},{value:"Search",id:"search",level:2},{value:"Query",id:"query",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"milvus"},"Milvus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://milvus.io"},"Milvus")," is a high-performance, highly scalable vector database. It is one of the most popular vector database as of this writing. Milvus is a great choice to manage large collections of documents for applications ranging from knowledgebase-oriented information retrieval to image similarity search."),(0,o.kt)("p",null,"The Milvus deployment on Shakudo also comes with ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/v2.0.x/attu.md"},"Attu")," enabled for a web-based management interface."),(0,o.kt)("h2",{id:"connections"},"Connections"),(0,o.kt)("p",null,"A milvus connection must be established before further operations can be performed. The alias names the connection for future reference. Functions that use the connection will typically have a ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," parameter with a default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"'default'"),", so opening a connection with ",(0,o.kt)("inlineCode",{parentName:"p"},"alias='default'")," allows us to operate other pymilvus facilities while omitting the connection name."),(0,o.kt)("h3",{id:"creating-a-connection"},"Creating a connection"),(0,o.kt)("p",null,"Connections are created with the pymilvus ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pymilvus import connections\nconnections.connect(\n  alias=\"default\",\n  host=os.environ['MILVUS_HOST'],\n  port=os.environ['MILVUS_PORT']\n)\n")),(0,o.kt)("p",null,"For more details on the connection parameters, see ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/manage_connection.md"},"the official pymilvus documentation")),(0,o.kt)("h3",{id:"closing-a-connection"},"Closing a connection"),(0,o.kt)("p",null,"Since there is no management object for Milvus connections, they must be released explicitly through the connections manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'connections.disconnect("default")\n')),(0,o.kt)("h2",{id:"databases"},"Databases"),(0,o.kt)("p",null,"It is optionally possible to create Databases, which allows setting user permissions ranging over a set of collections. Details on database management ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/manage_databases.md"},"are available in the milvus documentation")),(0,o.kt)("h2",{id:"collections"},"Collections"),(0,o.kt)("p",null,"Milvus data is stored in collections, which have to be loaded in memory before they can be searched against. Loading is not necessary when filling the collection, however."),(0,o.kt)("h3",{id:"creating-a-collection"},"Creating a Collection"),(0,o.kt)("p",null,"Milvus can operate in schema or schemaless mode depending on how the collection is created. Simply set ",(0,o.kt)("inlineCode",{parentName:"p"},"allow_dynamic_fields=True")," to enable schemaless."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pymilvus import Collection, FieldSchema, CollectionSchema, DataType\n\nMAX_TITLE = 512\nMAX_TEXT = 1024\nMAX_VEC = 384\n\nNAME = "WikiHow"\n\nwhschema = CollectionSchema(\n    fields=[\n        FieldSchema(name="pk", dtype=DataType.INT64, is_primary=True, auto_id=True),\n        FieldSchema(name="title", dtype=DataType.VARCHAR, max_length=65535, default_value=""),\n        FieldSchema(name="text", dtype=DataType.VARCHAR, max_length=65535, default_value=""),\n        FieldSchema(name="vector", dtype=DataType.FLOAT_VECTOR, dim=384, description="embedding vector")\n    ],\n    enable_dynamic_fields=False,\n    description="WikiHow collection"\n)\nwhcollection = Collection(\n    name=NAME,\n    schema=whschema,\n    consistency_level="Session"\n)\n')),(0,o.kt)("p",null,"As for connections, the official pymilvus documentation ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/create_collection.md"},"provides more extensive details"),".\nNote that the field size limits are in bytes and depend on the encoding used in milvus, it is not based on character count for VARCHAR. The list of available datatypes is ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/create_collection.md#Prepare-Schema"},"available here"),"."),(0,o.kt)("p",null,"Importantly, the primary key may be either ",(0,o.kt)("inlineCode",{parentName:"p"},"INT64")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR")," and vectors can be either ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOAT_VECTOR")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"BINARY_VECTOR"),"."),(0,o.kt)("p",null,"The consistency level of the collection is discussed further in the ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/consistency.md#Consistency-levels"},"Consistency article")," at ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io"},"milvus.io"),". Briefly, ",(0,o.kt)("inlineCode",{parentName:"p"},'consistency_level="Session"')," is a good default which means that queries will always happen after reads in our current session, even though they could happen before writes from other sessions are actualized. By comparison, ",(0,o.kt)("inlineCode",{parentName:"p"},"Strong")," consistency ensures queries will always happen after all writes are completed. ",(0,o.kt)("inlineCode",{parentName:"p"},"Eventually")," is the weakest consistency level and will process reads immediately, against whatever values are available in the replica at the time."),(0,o.kt)("h3",{id:"inserting-data-in-a-collection"},"Inserting data in a collection"),(0,o.kt)("p",null,"Given a collection, its ",(0,o.kt)("inlineCode",{parentName:"p"},"insert")," function can be used to insert a batch of data. If using an ",(0,o.kt)("inlineCode",{parentName:"p"},"auto_id")," key, the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," field should be elided from the input. The argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"insert")," is a list of lists of field values, positionally ordered as in the schema, such as the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def insert_data(data):\n    vecs = embed_documents([d['title'] for d in data])\n    \n    entries = [[], [], []]\n\n    for i in range(len(data)):\n        entries[0].append(data[i]['title'])\n        entries[1].append(data[i]['text'])\n        entries[2].append(vecs[i])\n\n    whcollection.insert(entries)\n")),(0,o.kt)("p",null,"Note that if a Milvus worker crashes (e.g. OOM) during operations, although Milvus features redundancy and a second node will come online to keep smooth operations, the default ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," value (in the insert function) may be too low and may cause failure. Increasing it to a much larger value will allow the process to keep running across a worker crash."),(0,o.kt)("p",null,'Milvus will not finalize an insertion (i.e. "seal a segment") unless enough data has been inserted since the last sealed segment. To force Milvus to seal a segment, it is important to ',(0,o.kt)("inlineCode",{parentName:"p"},"flush")," the collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"whcollection.flush()\n")),(0,o.kt)("h3",{id:"creating-an-index"},"Creating an index"),(0,o.kt)("p",null,"Bruteforce searches against vectros in the database can be very slow. Setting up an index can drastically speed up the search."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'whcollection.create_index(field_name="vector", index_params={"metric_type": "L2", "index_type": "IVF_FLAT", "nlist": "1024"})\n')),(0,o.kt)("p",null,"In the above example, we have created an index on the field named ",(0,o.kt)("inlineCode",{parentName:"p"},"vector")," with a flat index using an inverted file, a maximum of 1024 clusters, and an L2 metric. More details about how to parameterize index creation ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/build_index.md"},"can be found at this link")),(0,o.kt)("p",null,"Milvus also supports creating indexes on (and searching against) scalar data (possibly in combination with the vector search)."),(0,o.kt)("h3",{id:"referring-to-an-existing-collection"},"Referring to an existing collection"),(0,o.kt)("p",null,"An existing collection on the ",(0,o.kt)("inlineCode",{parentName:"p"},"'default'")," connection can be loaded with a simple"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'NAME = "WikiHow"\nwhcollection = Collection(NAME)\n')),(0,o.kt)("h3",{id:"loading-a-collection"},"Loading a collection"),(0,o.kt)("p",null,"Collections cannot be queried against unless they are ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),"ed first. This is simply achieved as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"whcollection.load()\n")),(0,o.kt)("h3",{id:"releasing-a-collection"},"Releasing a collection"),(0,o.kt)("p",null,"The collection will stay loaded until it is ",(0,o.kt)("inlineCode",{parentName:"p"},"release"),"d, either programmatically or through Attu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"whcollection.release()\n")),(0,o.kt)("h2",{id:"search"},"Search"),(0,o.kt)("p",null,"Search is conducted on a loaded collection as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"hits = whcollection.search(\n        [embed_query(what)], # Vector for the query\n        anns_field=\"vector\", # Name of the field to search against\n        param={'metric_type': 'L2', # Search params...\n                    'offset': 0,\n                    'params': {'nprobe': 1}\n                    },\n        limit=1,\n        output_fields=['text', 'title']) # Fields to retrieve\n")),(0,o.kt)("p",null,"The full documentation for the search parameters ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/search.md"},"can be found here"),". In the above example, we obtain the top search result provided the embeddings for the data to search for. Milvus also supports filter expressions (discribed ",(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/boolean.md"},"in the documentation"),"). The ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," field relates to the index(es) defined on the collection. A ",(0,o.kt)("inlineCode",{parentName:"p"},"consistency_level")," can also be specified for the query."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hits")," returned by a Milvus search contains a list of hits as specified by the search parameters for each input vector. Since we provided a single input vector in this case, we can obtain more details about the hits corresponding to this vector as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'query_hits = hits[0]\ntop_query_hit = query_hits[0]\nprint(f"Title: {top_query_hit.entity.get(\'title\')}")\nprint(f"Text: {top_query_hit.entity.get(\'text\')}")\nprint(f"Distance between query embedding and document embedding: {top_query_hit.distance}")\n')),(0,o.kt)("p",null,"Since we specified that we only wanted the top hit, we only need to care about the first (i.e. only) hit returned for the first (once again, only) input vector in our search. In the above, we print out the fields retrieved from the search as specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"output_fields")," in our call, and the distance between the embedding we used to search the database and the document's embedding."),(0,o.kt)("h2",{id:"query"},"Query"),(0,o.kt)("p",null,'Milvus can also do scalar searches, termed "query". For details, ',(0,o.kt)("a",{parentName:"p",href:"https://milvus.io/docs/query.md"},"see the Milvus documentation on Query")))}h.isMDXComponent=!0}}]);