(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(292)),c={id:"js",title:"JavaScript"},i={id:"version-v1.4/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"The JavaScript SDK is autogenerated and developer experience is not great. We",source:"@site/versioned_docs/version-v1.4/sdk/js.md",permalink:"/hydra/docs/v1.4/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/sdk/js.md",version:"v1.4",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"version-v1.4/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.4/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.4/sdk/php"},latestVersionMainDocPermalink:"/hydra/docs"},s=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The JavaScript SDK is autogenerated and developer experience is not great. We\nencourage you to use\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),Object(o.b)("inlineCode",{parentName:"a"},"fetch"))," instead.")),Object(o.b)("p",null,"To install the JavaScript SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save @oryd/hydra-client\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const Hydra = require('@oryd/hydra-client');\n\n// Set this to Hydra's URL\nHydra.ApiClient.instance.basePath = 'http://localhost:4445';\n")),Object(o.b)("h3",{id:"api-usage"},"API Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const hydra = new Hydra.AdminAPI();\n\n// for example, let's fetch all OAuth2 clients\nhydra.listOAuth2Clients((error, data, response) => {\n  if (error) {\n    // a network error occurred.\n    throw error;\n  } else if (response.statusCode < 200 || response.statusCode >= 400) {\n    // an application error occurred.\n    throw new Error(\n      'Consent endpoint gave status code ' +\n        response.statusCode +\n        ', but status code 200 was expected.'\n    );\n  }\n\n  console.log(response); // a list of OAuth2 clients.\n});\n")),Object(o.b)("h3",{id:"api-docs"},"API Docs"),Object(o.b)("p",null,"API docs are available\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"}),"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}p.isMDXComponent=!0},292:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);