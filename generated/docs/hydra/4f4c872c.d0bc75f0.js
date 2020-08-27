(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(309)),i={id:"hydra-token",title:"hydra token",description:"hydra token Issue and Manage OAuth2 tokens"},c={unversionedId:"cli/hydra-token",id:"cli/hydra-token",isDocsHomePage:!1,title:"hydra token",description:"hydra token Issue and Manage OAuth2 tokens",source:"@site/docs/cli/hydra-token.md",permalink:"/hydra/docs/next/cli/hydra-token",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-token.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598260139,sidebar:"docs",previous:{title:"hydra serve public",permalink:"/hydra/docs/next/cli/hydra-serve-public"},next:{title:"hydra token client",permalink:"/hydra/docs/next/cli/hydra-token-client"}},l=[{value:"hydra token",id:"hydra-token",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-token"},"hydra token"),Object(o.b)("p",null,"Issue and Manage OAuth2 tokens"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Issue and Manage OAuth2 tokens"),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n  -h, --help                   help for token\n')),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra"}),"hydra")," - Run and manage ORY Hydra"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token-client"}),"hydra token client")," - An exemplary OAuth 2.0 Client\nperforming the OAuth 2.0 Client Credentials Flow"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token-flush"}),"hydra token flush")," - Removes inactive access tokens from\nthe database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token-introspect"}),"hydra token introspect")," - Introspect an access or\nrefresh token"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token-revoke"}),"hydra token revoke")," - Revoke an access or refresh token"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token-user"}),"hydra token user")," - An exemplary OAuth 2.0 Client\nperforming the OAuth 2.0 Authorize Code Flow")))}d.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);