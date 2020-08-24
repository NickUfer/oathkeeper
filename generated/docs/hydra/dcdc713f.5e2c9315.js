(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{257:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(2),a=t(6),i=(t(0),t(309)),o={id:"hydra-migrate-sql",title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans"},c={unversionedId:"cli/hydra-migrate-sql",id:"cli/hydra-migrate-sql",isDocsHomePage:!1,title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans",source:"@site/docs/cli/hydra-migrate-sql.md",permalink:"/hydra/docs/next/cli/hydra-migrate-sql",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-migrate-sql.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598023928,sidebar:"docs",previous:{title:"hydra migrate",permalink:"/hydra/docs/next/cli/hydra-migrate"},next:{title:"hydra serve",permalink:"/hydra/docs/next/cli/hydra-serve"}},s=[{value:"hydra migrate sql",id:"hydra-migrate-sql",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"WARNING",id:"warning",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:s};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-migrate-sql"},"hydra migrate sql"),Object(i.b)("p",null,"Create SQL schemas and apply migration plans"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Run this command on a fresh SQL installation and when you upgrade Hydra to a new\nminor version. For example, upgrading Hydra 0.7.0 to 0.8.0 requires running this\ncommand."),Object(i.b)("p",null,"It is recommended to run this command close to the SQL instance (e.g. same\nsubnet) instead of over the public internet. This decreases risk of failure and\ndecreases time required."),Object(i.b)("p",null,"You can read in the database URL using the -e flag, for example: export DSN=...\nhydra migrate sql -e"),Object(i.b)("h3",{id:"warning"},"WARNING"),Object(i.b)("p",null,"Before running this command on an existing database, create a back up!"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"hydra migrate sql <database-url> [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help            help for sql\n  -e, --read-from-env   If set, reads the database connection string from the environment variable DSN or config file key dsn.\n  -y, --yes             If set all confirmation requests are accepted without user interaction.\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-migrate"}),"hydra migrate")," - Various migration helpers")))}d.isMDXComponent=!0},309:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?a.a.createElement(b,c(c({ref:r},l),{},{components:t})):a.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);