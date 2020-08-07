(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,b=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(236)),c={id:"common-oauth2-openid-connect-flows",title:"Using Common OAuth2 and OpenID Connect Flows"},i={unversionedId:"guides/common-oauth2-openid-connect-flows",id:"version-v1.6/guides/common-oauth2-openid-connect-flows",isDocsHomePage:!1,title:"Using Common OAuth2 and OpenID Connect Flows",description:"Authorize Code Flow with Refresh Token",source:"@site/versioned_docs/version-v1.6/guides/common-oauth2-openid-connect-flows.mdx",permalink:"/hydra/docs/guides/common-oauth2-openid-connect-flows",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/common-oauth2-openid-connect-flows.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Creating OAuth 2.0 Clients",permalink:"/hydra/docs/guides/oauth2-clients"},next:{title:"Using OAuth2",permalink:"/hydra/docs/guides/using-oauth2"}},l=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),Object(a.b)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope offline_access \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),Object(a.b)("p",null,"The OAuth 2.0 Client will be allowed to use values ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",Object(a.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),Object(a.b)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"    --token-endpoint-auth-method client_secret_post \\\n")),Object(a.b)("p",null,"The same can be achieved by setting\n",Object(a.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",Object(a.b)("inlineCode",{parentName:"p"},"POST /clients")," and ",Object(a.b)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),Object(a.b)("p",null,"To initiate the flow, redirect the user's browser to the OAuth2 Auth Code URL:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<a\n  href="https://ory-hydra:4444/oauth2/auth/?client_id=client-id&scope=offline_access&redirect_uri=http://my-app.com/callback"\n>\n  Connect with ...\n</a>\n')),Object(a.b)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),Object(a.b)("p",null,"To create a client only capable of performing the OAuth 2.0 Client Credentials\nflow, use:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}p.isMDXComponent=!0}}]);