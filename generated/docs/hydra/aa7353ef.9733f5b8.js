(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(236)),i=(n(238),{id:"using-oauth2",title:"Using OAuth2"}),u={unversionedId:"guides/using-oauth2",id:"guides/using-oauth2",isDocsHomePage:!1,title:"Using OAuth2",description:"Please, do not write your own code to interact with OAuth 2.0. Use open",source:"@site/docs/guides/using-oauth2.mdx",permalink:"/hydra/docs/next/guides/using-oauth2",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/using-oauth2.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,sidebar:"docs",previous:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/next/guides/common-oauth2-openid-connect-flows"},next:{title:"Configuring Expiration",permalink:"/hydra/docs/next/guides/token-expiration"}},c=[],l={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Please, do not write your own code to interact with OAuth 2.0"),". Use open\nsource & battle-tested libraries instead. Here are some examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"NodeJS",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.passportjs.org/"}),"passport")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/lelylan/simple-oauth2"}),"simple-oauth2")))),Object(o.b)("li",{parentName:"ul"},"Golang",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/golang/oauth2"}),"golang/oauth2")," ","*",Object(o.b)("em",{parentName:"li"},"recommended")))),Object(o.b)("li",{parentName:"ul"},"PHP",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/thephpleague/oauth2-client"}),"oauth2-client")))),Object(o.b)("li",{parentName:"ul"},"Java",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://spring.io/projects/spring-security-oauth"}),"Spring Security OAuth"))))),Object(o.b)("p",null,"For a full list of client libraries go ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://oauth.net/code/"}),"here"),"."))}s.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,u(u({ref:t},l),{},{components:n})):a.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},238:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(237),a=n(239);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},239:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);