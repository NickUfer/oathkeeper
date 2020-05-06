(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{252:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(274)),o={id:"multi-tenancy-multitenant",title:"Multitenancy"},s={id:"version-v0.2/guides/multi-tenancy-multitenant",title:"Multitenancy",description:"ORY Kratos does not implement multi-tenancy in its application logic, but it is",source:"@site/versioned_docs/version-v0.2/guides/multi-tenancy-multitenant.md",permalink:"/kratos/docs/guides/multi-tenancy-multitenant",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/guides/multi-tenancy-multitenant.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy"},next:{title:"High Availability",permalink:"/kratos/docs/guides/high-availability-ha"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos does not implement multi-tenancy in its application logic, but it is\npossible to implement multi-tenancy with ORY Kratos!"),Object(i.b)("p",null,"The recommended approach is to run one or more (depending on your scale) SQL\ndatabases and create one database schema per tenant in these database instances.\nSo one PostgreSQL database instance could, for example, host 15000 tenants who\neach have access to one schema."),Object(i.b)("p",null,"ORY Kratos itself should run as one instance per tenant with a configuration\ntailored for that specific tenant. The minimum required change is using\ndifferent secrets and the tenant's DSN\n(",Object(i.b)("inlineCode",{parentName:"p"},"postgresql://user:pass@.../tenant-123"),"). Because ORY Kratos is very\nlightweight, the deployment overhead becomes negligible."),Object(i.b)("p",null,"While deployment complexity increases - but is addressable with e.g.\nKubernetes - this approach has several advantages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Absolute isolation of tenants which implies: better security, better privacy,\nmore control."),Object(i.b)("li",{parentName:"ul"},"Easy sharding and partitioning because database schemas isolate tenants."),Object(i.b)("li",{parentName:"ul"},"No complexity in ORY Kratos' business logic and security defenses.")))}u.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,s({ref:t},l,{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);