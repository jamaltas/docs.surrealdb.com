"use strict";(self.webpackChunkdocs_surrealdb_com=self.webpackChunkdocs_surrealdb_com||[]).push([[7281],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=n.createContext({}),c=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(i),p=a,u=g["".concat(r,".").concat(p)]||g[p]||m[p]||o;return i?n.createElement(u,s(s({ref:t},d),{},{components:i})):n.createElement(u,s({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[g]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>v,metadata:()=>b,toc:()=>y});var n=i(7462),a=(i(7294),i(3905)),o=i(4996);const s={toc:[]},l=function(e){let{serverBoxes:t}=e;return(0,a.kt)("div",{className:"layout-boxes"},t.map(((e,t)=>(0,a.kt)("div",{className:"layout-boxes-content",key:t},(0,a.kt)("a",{href:e.link},(0,a.kt)("div",{className:"layout-boxes-item"},(0,a.kt)("div",null,(0,a.kt)("div",{className:"layout-boxes-container"},(0,a.kt)("h4",null,e.icon,(0,a.kt)("span",null,e.label)),(0,a.kt)("div",{className:"layout-boxes-available"},(0,a.kt)("l",{className:e.available?"green":"grey",r:""},e.available?"AVAILABLE":"COMING SOON"))))))))))};function r(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}))}r.isMDXComponent=!0;const c={toc:[]},d=function(e){let{clientBoxes:t}=e;return(0,a.kt)("div",{className:"layout-boxes"},t.map(((e,t)=>(0,a.kt)("div",{className:"layout-boxes-content",key:t},(0,a.kt)("a",{href:e.link},(0,a.kt)("div",{className:"layout-boxes-item"},(0,a.kt)("div",null,(0,a.kt)("div",{className:"layout-boxes-container"},(0,a.kt)("h4",null,e.icon,(0,a.kt)("span",null,e.label)),(0,a.kt)("div",{className:"layout-boxes-available"},(0,a.kt)("l",{className:e.available?"green":"grey",r:""},e.available?"AVAILABLE":"COMING SOON"))))))))))};function g(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0;const m={toc:[{value:"Client side SDKs",id:"client-side-sdks",level:3}]},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r,{serverBoxes:[{link:"/docs/integration/sdks/rust",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/rust-icon.png")}),label:"Rust",available:!0},{link:"/docs/integration/sdks/nodejs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/node-icon.png")}),label:"Node.js",available:!0},{link:"/docs/integration/sdks/python",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/python-icon.png")}),label:"Python",available:!0},{link:"/docs/integration/sdks/golang",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/golang-icon.png")}),label:"Golang",available:!0},{link:"/docs/integration/sdks/deno",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/deno-icon.png")}),label:"Deno",available:!0},{link:"/docs/integration/sdks/c",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/c-icon.png")}),label:"C",available:!0},{link:"/docs/integration/sdks/java",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/java-icon.png")}),label:"Java",available:!1},{link:"/docs/integration/sdks/ruby",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/ruby-icon.png")}),label:"Ruby",available:!1},{link:"/docs/integration/sdks/php",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/php-icon.png")}),label:"PHP",available:!1},{link:"/docs/integration/sdks/swift",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/swift-icon.png")}),label:"Swift",available:!1},{link:"/docs/integration/sdks/r",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/r-icon.png")}),label:"R",available:!1},{link:"/docs/integration/sdks/dotnet",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/dotnet-icon.png")}),label:".NET",available:!1},{link:"/docs/integration/sdks/erlang",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/erlang-icon.png")}),label:"Erlang",available:!1},{link:"/docs/integration/sdks/dart",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/dart-icon.png")}),label:"Dart",available:!1}],mdxType:"SDKServerBoxes"}),(0,a.kt)("h3",{id:"client-side-sdks"},"Client side SDKs"),(0,a.kt)(g,{clientBoxes:[{link:"/docs/integration/sdks/javascript",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/javascript-icon.png")}),label:"Javascript",available:!0},{link:"/docs/integration/sdks/emberjs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/emberjs-icon.png")}),label:"Ember.js",available:!1},{link:"/docs/integration/sdks/reactjs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/reactjs-icon.png")}),label:"React.js",available:!1},{link:"/docs/integration/sdks/angular",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/angular-icon.png")}),label:"Angular",available:!1},{link:"/docs/integration/sdks/vuejs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/vuejs-icon.png")}),label:"Vue.js",available:!1},{link:"/docs/integration/sdks/nextjs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/nextjs-icon.png")}),label:"Next.js",available:!1},{link:"/docs/integration/sdks/nuxtjs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/nuxtjs-icon.png")}),label:"Nuxt.js",available:!1},{link:"/docs/integration/sdks/nestjs",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/nestjs-icon.png")}),label:"Nest.js",available:!1},{link:"/docs/integration/sdks/svelte",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/sveltejs-icon.png")}),label:"Svelte",available:!1},{link:"/docs/integration/sdks/flutter",icon:(0,a.kt)("img",{width:"35",height:"35",className:"devicon",src:(0,o.Z)("/img/flutter-icon.png")}),label:"Flutter",available:!1}],mdxType:"SDKClientBoxes"}))}u.isMDXComponent=!0;const v={sidebar_position:1},k=void 0,b={unversionedId:"Integration/SDKs/Overview",id:"Integration/SDKs/Overview",title:"Overview",description:"SDK",source:"@site/docs/Integration/SDKs/Overview.mdx",sourceDirName:"Integration/SDKs",slug:"/Integration/SDKs/Overview",permalink:"/docs/Integration/SDKs/Overview",draft:!1,editUrl:"https://github.com/surrealdb/docs.surrealdb.com/edit/main/docs/Integration/SDKs/Overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Websockets",permalink:"/docs/Integration/websockets"},next:{title:"Rust",permalink:"/docs/Integration/sdks/rust"}},h={},y=[],f={toc:y},w="wrapper";function N(e){let{components:t,...i}=e;return(0,a.kt)(w,(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SDK\nConnect your application to your database with one of our official SDKs. The following SDKs are officially supported by SurrealDB. They are actively maintained, support new SurrealDB features, and receive bug fixes, performance enhancements, and security patches."),(0,a.kt)("p",null,"Connect your application to your database with one of our official SDKs. The following SDKs are officially supported by SurrealDB. They are actively maintained, support new SurrealDB features, and receive bug fixes, performance enhancements, and security patches."),(0,a.kt)("p",null,"Server side SDKs"),(0,a.kt)(u,{components:{sdk:()=>(0,a.kt)("div",{style:{backgroundColor:"red"}},"SdkContainer")},mdxType:"SdkContainer"}))}N.isMDXComponent=!0}}]);