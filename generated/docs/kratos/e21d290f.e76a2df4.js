(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(413)),o={id:"credentials",title:"Overview"},c={unversionedId:"concepts/credentials",id:"version-v0.5/concepts/credentials",isDocsHomePage:!1,title:"Overview",description:"Each identity has one or more credentials associated with it:",source:"@site/versioned_docs/version-v0.5/concepts/credentials.md",slug:"/concepts/credentials",permalink:"/kratos/docs/concepts/credentials",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/credentials.md",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Identity Data Model",permalink:"/kratos/docs/concepts/identity-user-model"},next:{title:"Username / Email & Password",permalink:"/kratos/docs/concepts/credentials/username-email-password"}},s=[],d={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each identity has one or more credentials associated with it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n")),Object(i.b)("p",null,"ORY Kratos supports several credential types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password"),": The most common ",Object(i.b)("em",{parentName:"li"},"identifier (username, email, ...) + password"),"\ncredential."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"oidc"),': The "Log in with Google/Facebook/GitHub/..." credential.'),Object(i.b)("li",{parentName:"ul"},"Other credentials - support other credential types (X509 Certificates,\nBiometrics, ...) at will be added a later stage.")),Object(i.b)("p",null,"Each credential - regardless of its type - has one or more identifiers attached\nto it. Each identifier is universally unique. Assuming we had one identity with\ncredentials"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n")),Object(i.b)("p",null,"and tried to create (or update) another identity with the same identifier\n(",Object(i.b)("inlineCode",{parentName:"p"},"john.doe@acme.com"),"), the system would reject the request with a 409 Conflict\nstate."),Object(i.b)("p",null,"While credentials must be unique per type, there can be duplicates amongst\nmultiple types:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# This is ok:\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")),Object(i.b)("p",null,"The same would apply if those were two separate identities:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Identity 1\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n---\n# Identity 2\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);