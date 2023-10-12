"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[7990],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),c=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(d.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=n,f=u["".concat(d,".").concat(p)]||u[p]||h[p]||o;return t?a.createElement(f,i(i({ref:r},l),{},{components:t})):a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7059:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:7},i=void 0,s={unversionedId:"Introduction/architecture",id:"Introduction/architecture",title:"architecture",description:"Architecture",source:"@site/docs/Introduction/architecture.mdx",sourceDirName:"Introduction",slug:"/Introduction/architecture",permalink:"/docs/Introduction/architecture",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Introduction/architecture.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"concepts",permalink:"/docs/Introduction/concepts"},next:{title:"SurrealDB for MongoDB developers",permalink:"/docs/Introduction/SurrealDB for MongoDB developers"}},d={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Query layer",id:"query-layer",level:2},{value:"Storage layer",id:"storage-layer",level:2},{value:"RocksDB",id:"rocksdb",level:2},{value:"TiKV",id:"tikv",level:2},{value:"IndexedDB",id:"indexeddb",level:2}],l={toc:c},u="wrapper";function h(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"This page aims to give details about some of the core architecture choices of SurrealDB, including details about the different layers which make up a SurrealDB instance, or SurrealDB cluster. SurrealDB is built using a layered approach, with compute separated from the storage. This allows us, if necessary, to scale up the compute layer, and the storage layer independently from each other."),(0,n.kt)("h2",{id:"query-layer"},"Query layer"),(0,n.kt)("p",null,"The SurrealDB query layer (otherwise known as the compute layer) handles queries from the client, analysing which records need to be selected, created, updated, or deleted. To begin with, the query engine runs the SurrealQL query through a ",(0,n.kt)("inlineCode",{parentName:"p"},"parser"),", returning a parsed query definition. The parsed query is then run through the ",(0,n.kt)("inlineCode",{parentName:"p"},"executor")," which breaks up each statement within the query, managing those transactions which should be run within the same transaction. Next, each statement is run through the ",(0,n.kt)("inlineCode",{parentName:"p"},"iterator")," which determines which data should be fetched from the key-value storage engine, and handles index query planning, grouping, ordering, and limiting. Finally, each record is passed through the ",(0,n.kt)("inlineCode",{parentName:"p"},"document")," processor, processing permissions, and determining which data is merged, altered, and stored on disk."),(0,n.kt)("h2",{id:"storage-layer"},"Storage layer"),(0,n.kt)("p",null,"The storage layer handles the storage of the data for the query layer. Each storage layer implementation stores data in an ordered list, handling storage on disk, or sharding across a cluster. SurrealDB can use a number of underlying storage engines - some support concurrent readers, and some support concurrent readers and writers. Each storage engine must support a transaction-based approach, with the ability to support reading and writing of individual keys, and key ranges within each transaction."),(0,n.kt)("h2",{id:"rocksdb"},"RocksDB"),(0,n.kt)("p",null,"In embedded mode, SurrealDB uses ",(0,n.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB")," to store data on disk. RocksDB is a high performance embedded database for key-value data. It is originally a fork of Google's LevelDB optimized to exploit many CPU cores, and make efficient use of fast storage, such as solid-state drives and high-speed disk drives. It is based on a log-structured merge-tree data structure."),(0,n.kt)("h2",{id:"tikv"},"TiKV"),(0,n.kt)("p",null,"In distributed mode, SurrealDB can be configured to use ",(0,n.kt)("a",{parentName:"p",href:"https://tikv.org/"},"TiKV")," to store data. TiKV is a highly scalable, low latency, and easy to use key-value datastore. TiKV supports raw and transaction-based querying with ACID compliance, and support for multiple concurrent readers and writers. The design of TiKV is inspired by distributed systems from Google, such as BigTable, Spanner, and Percolator, and some of the latest achievements in academia in recent years, such as the Raft consensus algorithm."),(0,n.kt)("h2",{id:"indexeddb"},"IndexedDB"),(0,n.kt)("p",null,"When running in a web browser, SurrealDB can be configured to use ",(0,n.kt)("a",{parentName:"p",href:"https://web.dev/indexeddb/"},"IndexedDB")," to store and persist data within the web browser. SurrealDB first serializes both keys and values into a Uint8Array, utilizing IndexedDB as a binary key-value store - offering good performance, and with the ability to offer all of the functionality and features that SurrealDB offers when running in alternative ways."))}h.isMDXComponent=!0}}]);