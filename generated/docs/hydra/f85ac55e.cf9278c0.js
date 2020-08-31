(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{289:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(310)),i={id:"hydra-keys-import",title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store"},s={unversionedId:"cli/hydra-keys-import",id:"cli/hydra-keys-import",isDocsHomePage:!1,title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store",source:"@site/docs/cli/hydra-keys-import.md",permalink:"/hydra/docs/next/cli/hydra-keys-import",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-keys-import.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598528831,sidebar:"docs",previous:{title:"hydra keys get",permalink:"/hydra/docs/next/cli/hydra-keys-get"},next:{title:"hydra migrate",permalink:"/hydra/docs/next/cli/hydra-migrate"}},c=[{value:"hydra keys import",id:"hydra-keys-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-keys-import"},"hydra keys import"),Object(o.b)("p",null,"Imports cryptographic keys of any format to the JSON Web Key Store"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command allows you to import cryptographic keys to the JSON Web Key Store."),Object(o.b)("p",null,"Currently supported formats are raw JSON Web Keys or PEM/DER encoded data. If\nthe JSON Web Key Set exists already, the imported keys will be added to that\nset. Otherwise, a new set will be created."),Object(o.b)("p",null,"Please be aware that importing a private key does not automatically import its\npublic key as well."),Object(o.b)("p",null,"Examples: hydra keys import my-set ./path/to/jwk.json ./path/to/jwk-2.json hydra\nkeys import my-set ./path/to/rsa.key ./path/to/rsa.pub"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"hydra keys import <set> <file-1> [<file-2> [<file-3 [<...>]]] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'  -h, --help         help for import\n      --use string   Sets the "use" value of the JSON Web Key if not "use" value was defined by the key itself (default "sig")\n')),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-keys"}),"hydra keys")," - Manage JSON Web Keys")))}l.isMDXComponent=!0},310:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||y[u]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);