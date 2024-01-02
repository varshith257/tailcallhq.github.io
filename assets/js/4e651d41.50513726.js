"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9727],{3936:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(5893),n=o(1151);const i={title:"@modify"},s=void 0,a={id:"operators/modify",title:"@modify",description:"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:",source:"@site/docs/operators/modify.md",sourceDirName:"operators",slug:"/operators/modify",permalink:"/docs/operators/modify",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcall/blob/main/docs/operators/modify.md",tags:[],version:"current",frontMatter:{title:"@modify"},sidebar:"tutorialSidebar",previous:{title:"@http",permalink:"/docs/operators/http"},next:{title:"@server",permalink:"/docs/operators/server"}},d={},c=[{value:"name",id:"name",level:2},{value:"omit",id:"omit",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@modify"})," operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:"]}),"\n",(0,r.jsx)(t.h2,{id:"name",children:"name"}),"\n",(0,r.jsxs)(t.p,{children:["You can rename a field or a node in your GraphQL schema using the ",(0,r.jsx)(t.code,{children:"name"})," argument in the ",(0,r.jsx)(t.code,{children:"@modify"})," operator. This can be helpful when the field name in your underlying data source doesn't match the desired field name in your schema. For instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int! @modify(name: "userId")\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:'@modify(name: "userId")'})," tells GraphQL that although the field is referred to as ",(0,r.jsx)(t.code,{children:"id"}),"in the underlying data source, it should be presented as ",(0,r.jsx)(t.code,{children:"userId"})," in your schema."]}),"\n",(0,r.jsx)(t.h2,{id:"omit",children:"omit"}),"\n",(0,r.jsxs)(t.p,{children:["You can exclude a field or a node from your GraphQL schema using the ",(0,r.jsx)(t.code,{children:"omit"})," argument in the ",(0,r.jsx)(t.code,{children:"@modify"})," operator. This can be useful if you want to keep certain data hidden from the client. For instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int! @modify(omit: true)\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@modify(omit: true)"})," tells GraphQL that the ",(0,r.jsx)(t.code,{children:"id"})," field should not be included in the schema, thus it won't be accessible to the client."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var r=o(7294);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);