"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5076],{3658:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=o(5893),n=o(1151);const r={title:"Operator Composition"},i="Composition",a={id:"guides/operator-composition",title:"Operator Composition",description:"Operators can be composed and used together to create new and powerful transformations.",source:"@site/docs/guides/operator-composition.md",sourceDirName:"guides",slug:"/guides/operator-composition",permalink:"/docs/guides/operator-composition",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcall/blob/main/docs/guides/operator-composition.md",tags:[],version:"current",frontMatter:{title:"Operator Composition"},sidebar:"tutorialSidebar",previous:{title:"Tackling N + 1",permalink:"/docs/guides/n+1"},next:{title:"Watch Mode",permalink:"/docs/guides/watch-mode"}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"composition",children:"Composition"}),"\n",(0,s.jsx)(t.p,{children:"Operators can be composed and used together to create new and powerful transformations."}),"\n",(0,s.jsx)(t.p,{children:'This example illustrates the concept of composition in GraphQL, which allows you to combine multiple operations (known as "operators") to build more complex transformations of data.'}),"\n",(0,s.jsxs)(t.p,{children:["The given schema is defining two data types - ",(0,s.jsx)(t.code,{children:"User"})," and ",(0,s.jsx)(t.code,{children:"Post"}),". The ",(0,s.jsx)(t.code,{children:"User"})," type has fields ",(0,s.jsx)(t.code,{children:"id"})," and ",(0,s.jsx)(t.code,{children:"name"}),", and the ",(0,s.jsx)(t.code,{children:"Post"})," type initially has fields ",(0,s.jsx)(t.code,{children:"user"})," and ",(0,s.jsx)(t.code,{children:"userId"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int\n  name: String\n}\n\ntype Post @addField(name: "userName", path: ["user", "name"]) {\n  user: User @modify(omit: true) @http(path: "/users/{{userId}}")\n  userId: Int!\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["However, it uses a series of operators to modify the ",(0,s.jsx)(t.code,{children:"user"})," field."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:'@addField(name: "userName", path: ["user", "name"])'})," operator is used to extract the ",(0,s.jsx)(t.code,{children:"name"})," field from ",(0,s.jsx)(t.code,{children:"user"})," and add a field called ",(0,s.jsx)(t.code,{children:"userName"})," to the ",(0,s.jsx)(t.code,{children:"Post"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"@modify(omit: true)"})," operator is used to remove the ",(0,s.jsx)(t.code,{children:"user"})," field from the final Schema."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:'@http(path: "/users/{{userId}}")'})," operator is used to instruct the resolver to make an HTTP request to fetch the user data from a specified path (i.e., ",(0,s.jsx)(t.code,{children:"/users/{{userId}}"}),"), where ",(0,s.jsx)(t.code,{children:"{{userId}}"})," is a placeholder that would be replaced with the actual ",(0,s.jsx)(t.code,{children:"userId"})," when making the request."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The schema after this transformation looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int\n  name: String\n}\n\ntype Post {\n  userName: String\n  userId: Int!\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["So, we've used composition of operators to take a complex object (the ",(0,s.jsx)(t.code,{children:"User"})," inside the ",(0,s.jsx)(t.code,{children:"Post"}),"), extract a specific part of it (",(0,s.jsx)(t.code,{children:"name"}),"), name that part (",(0,s.jsx)(t.code,{children:"userName"}),"), and then instruct GraphQL how to fetch the data using an HTTP request."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["It is important to note that the order of the operators ",(0,s.jsx)(t.code,{children:"@modify"})," and ",(0,s.jsx)(t.code,{children:"@http"})," doesn't matter. The resulting schema will always be the same."]})}),"\n",(0,s.jsx)(t.p,{children:"This is a powerful mechanism that allows you to make your GraphQL schema more precise, easier to understand, and more suitable for the specific needs of your application."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(7294);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);