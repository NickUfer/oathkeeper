(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(189)),i={id:"index",title:"Overview"},c={id:"version-v0.38/sdk/index",isDocsHomePage:!1,title:"Overview",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v0.38/sdk/index.md",permalink:"/oathkeeper/docs/sdk/index",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/sdk/index.md",version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588844820,sidebar:"version-v0.38/docs",previous:{title:"REST API",permalink:"/oathkeeper/docs/reference/api"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All SDKs use automated code generation provided by\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator"}),Object(o.b)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),Object(o.b)("p",null,"Before you check out the SDKs, head over to the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"oathkeeper/sdk/api.md"}),"REST API")," documentation which includes code samples for\ncommon programming languages for each REST endpoint."),Object(o.b)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://pypi.org/project/ory-oathkeeper-client/"}),"Python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://packagist.org/packages/ory/oathkeeper-client"}),"PHP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper-client-go"}),"Go")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@oryd/oathkeeper-client"}),"NodeJS")," (with\nTypeScript)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://search.maven.org/artifact/sh.ory.oathkeeper/oathkeeper-client"}),"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rubygems.org/gems/ory-oathkeeper-client"}),"Ruby"))),Object(o.b)("p",null,"Missing your programming language?\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/issues"}),"Create an issue")," and help us build,\ntest and publish the SDK for your programming language!"))}l.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);