(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{464:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(470)),a={id:"cookies",title:"Configuring Cookies"},c={unversionedId:"guides/cookies",id:"guides/cookies",isDocsHomePage:!1,title:"Configuring Cookies",description:"By default, cookies sent by the Hydra Public endpoints are set without",source:"@site/docs/guides/cookies.mdx",slug:"/guides/cookies",permalink:"/hydra/docs/next/guides/cookies",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/cookies.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,sidebar:"docs",previous:{title:"SSL/TLS, HTTPS, Self-Signed Certificates",permalink:"/hydra/docs/next/guides/ssl-https-tls"},next:{title:"Scaling ORY Hydra",permalink:"/hydra/docs/next/guides/scaling-hydra"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, cookies sent by the Hydra Public endpoints are set without\nexplicitly specifying a SameSite mode. If you wish for these cookies to be set\nwith a mode you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," setting. Possible\nvalues are ",Object(i.b)("inlineCode",{parentName:"p"},"Strict"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Lax")," or ",Object(i.b)("inlineCode",{parentName:"p"},"None"),"."),Object(i.b)("p",null,"If you wish to embed requests to hydra on a third party site (for example an\niframe that periodically polls to check session status) you will need to set the\nmode to ",Object(i.b)("inlineCode",{parentName:"p"},"None"),"."),Object(i.b)("p",null,"Some\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.chromium.org/updates/same-site/incompatible-clients"}),"browser versions"),"\nreject cookies using the ",Object(i.b)("inlineCode",{parentName:"p"},"Same-Site=None")," attribute. Hydra implements a\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients"}),"workaround"),"\nthat can be enabled by setting ",Object(i.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_legacy_workaround")," to\n",Object(i.b)("inlineCode",{parentName:"p"},"true"),". This workaround is disabled by default, and only takes effect when\n",Object(i.b)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"None"),"."))}l.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);