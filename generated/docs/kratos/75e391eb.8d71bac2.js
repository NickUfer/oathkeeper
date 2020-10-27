(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(413)),o={},s={unversionedId:"self-service/flows/user-profile-management",id:"version-v0.1/self-service/flows/user-profile-management",isDocsHomePage:!1,title:"user-profile-management",description:"ORY Kratos allows users to update their own profile information using two",source:"@site/versioned_docs/version-v0.1/self-service/flows/user-profile-management.md",slug:"/self-service/flows/user-profile-management",permalink:"/kratos/docs/v0.1/self-service/flows/user-profile-management",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/flows/user-profile-management.md",version:"v0.1",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,sidebar:"version-v0.1/docs",previous:{title:"User Logout",permalink:"/kratos/docs/v0.1/self-service/flows/user-logout"},next:{title:"Account Recovery",permalink:"/kratos/docs/v0.1/self-service/flows/password-reset-account-recovery"}},l=[{value:"Self-Service User Profile Management for Browser Applications",id:"self-service-user-profile-management-for-browser-applications",children:[{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Profile Management for API Clients",id:"self-service-user-profile-management-for-api-clients",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Kratos allows users to update their own profile information using two\nprincipal flows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(i.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(i.b)("p",null,"This flow does not allow updates of security-sensitive information such as the\npassword, fields associated with login (e.g. email), fields associated with\naccount recovery (e.g. recovery email address). These fields must be updated\nusing a separate flow which requires prior security checks."),Object(i.b)("p",null,"The updated profile must be valid against the JSON Schema defined for its\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/identity-user-model"}),"Identity Traits"),'. If one or more fields\ndo not validate (e.g. "Not an email"), the profile will not be updated.'),Object(i.b)("p",null,"The only required configuration is setting the Profile UI URL in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.1/reference/configuration"}),"ORY Kratos configuration file"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"urls:\n  profile_ui: https://.../..\n")),Object(i.b)("h2",{id:"self-service-user-profile-management-for-browser-applications"},"Self-Service User Profile Management for Browser Applications"),Object(i.b)("p",null,"This flow is similar to\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"}),"User Login and User Registration")," but does not\nsupport before/after work flows or individual strategies. It uses the already\nestablished ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"}),"Network Flows for Browsers"),"."),Object(i.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"}),"Network Flows for Browsers")," works as\nfollows for Profile Management:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"An initial HTTP Request is made to\n",Object(i.b)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/profile"),"."),Object(i.b)("li",{parentName:"ol"},"ORY Kratos redirects the browser to the URL set in ",Object(i.b)("inlineCode",{parentName:"li"},"urls.profile_ui")," and\nappends the ",Object(i.b)("inlineCode",{parentName:"li"},"request")," URL Query Parameter (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"https://example.org/profile?request=abcde"),")."),Object(i.b)("li",{parentName:"ol"},"The Endpoint at ",Object(i.b)("inlineCode",{parentName:"li"},"/profile")," makes a HTTP GET Request to\n",Object(i.b)("inlineCode",{parentName:"li"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"\nand fetches Profile Management Request JSON Payload that represent the\nindividual fields that can be updated."),Object(i.b)("li",{parentName:"ol"},"The User updates the profile data and sends a HTTP POST request to\n",Object(i.b)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/profile/update?request=abcde"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the profile data is invalid, all validation errors will be collected and\nadded to the Profile Management JSON Payload. The Browser is redirected to\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"urls.profile_ui")," URL (e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"https://example.org/profile?request=abcde"),")."),Object(i.b)("li",{parentName:"ul"},"If the profile data is valid, the identity's traits are updated and the\nprocess is complete.")))),Object(i.b)("p",null,"Assuming the Identity's Traits JSON Schema is defined as"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.org/identity.traits.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "minLength": 3,\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string",\n          "minLength": 5\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  },\n  "required": ["email"],\n  "additionalProperties": false\n}\n')),Object(i.b)("p",null,"the resulting JSON Payload coming from\n",Object(i.b)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"\nwould look something along the lines of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "48068b5d-3438-4d6f-9955-331b96c41762",\n  "expires_at": "2020-01-27T23:03:58.5986947Z",\n  "issued_at": "2020-01-27T22:03:58.5987099Z",\n  "request_url": "http://127.0.0.1:4455/profiles",\n  "form": {\n    "action": "https://example.org/.ory/kratos/public/profiles?48068b5d-3438-4d6f-9955-331b96c41762",\n    "method": "POST",\n    "fields": {\n      "csrf_token": {\n        "name": "csrf_token",\n        "type": "hidden",\n        "required": true,\n        "value": "+5+WxP7+leOpfjHHkWWe99APD7845i82p4wGtfdWKHBK5fFg4BS7JjzdeI7kdsOUElyrG10ZR5vIqi7asNpqAA=="\n      },\n      "traits.email": {\n        "name": "traits.email",\n        "type": "text",\n        "value": "foobar@ory.sh"\n      },\n      "traits.name.first": {\n        "name": "traits.name.first",\n        "type": "text",\n        "value": "Foobar"\n      },\n      "traits.name.last": {\n        "name": "traits.name.last",\n        "type": "text",\n        "value": "Barbaz"\n      }\n    }\n  },\n  "identity": {\n    "id": "c631e58a-445a-4844-ae80-f0b426a1e11e",\n    "traits_schema_id": "default",\n    "traits_schema_url": "https://example.org/identity.traits.schema.json",\n    "traits": {\n      "email": "foobar@ory.sh",\n      "name": {\n        "last": "Foobar",\n        "first": "Barbaz"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"If the user tries to save profile data that does not validate against the\nprovided JSON Schema, error payloads will be added to the fields affected:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: '48068b5d-3438-4d6f-9955-331b96c41762',\n  // ...\n  form: {\n    // ...\n    fields: {\n      // ...\n      'traits.name.first': {\n        name: 'traits.name.first',\n        type: 'text',\n        value: 'abc',\n        errors: [\n          {\n            message: 'traits.name.first: Must be at least 5 characters long',\n          },\n        ],\n      },\n      // ...\n    },\n  },\n  // ...\n}\n")),Object(i.b)("p",null,"Keep in mind that it is not possible to update the ",Object(i.b)("inlineCode",{parentName:"p"},"traits.email")," field as\nupdating that field requires prior authentication."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Updating these "protected" fields will be implemented in a future release of\nORY Kratos.')),Object(i.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(i.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(i.b)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/requests/profile?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(i.b)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to ",Object(i.b)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/profiles"),"\nMUST be set and available when calling this endpoint!")),Object(i.b)("h2",{id:"self-service-user-profile-management-for-api-clients"},"Self-Service User Profile Management for API Clients"),Object(i.b)("p",null,"Will be addressed in a future release."))}p.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,u=d["".concat(o,".").concat(b)]||d[b]||f[b]||i;return r?a.a.createElement(u,s(s({ref:t},c),{},{components:r})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);