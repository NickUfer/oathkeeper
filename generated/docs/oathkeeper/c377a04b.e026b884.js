(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(188)),o={id:"index",title:"Introduction"},c={id:"index",title:"Introduction",description:"ORY Oathkeeper authorizes incoming HTTP requests. It can be the Policy",source:"@site/docs/index.md",permalink:"/oathkeeper/docs/next/index",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/index.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177132,sidebar:"docs",next:{title:"Installation",permalink:"/oathkeeper/docs/next/install"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Operating Modes",id:"operating-modes",children:[{value:"Reverse Proxy",id:"reverse-proxy",children:[]},{value:"Access Control Decision API",id:"access-control-decision-api",children:[]}]},{value:"Decision Engine",id:"decision-engine",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORY Oathkeeper authorizes incoming HTTP requests. It can be the Policy\nEnforcement Point in your cloud architecture, i.e. a reverse proxy in front of\nyour upstream API or web server that rejects unauthorized requests and forwards\nauthorized ones to your server. If you want to use another API Gateway (Kong,\nNginx, Envoy, AWS API Gateway, ...), Oathkeeper can also plug into that and act\nas its Policy Decision Point."),Object(i.b)("p",null,"The implemented problem domain and scope is called Zero-Trust Network\nArchitecture, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.beyondcorp.com"}),"BeyondCorp"),", and Identity And Access\nProxy (IAP)."),Object(i.b)("p",null,"While ORY Oathkeeper works well with ORY Hydra and ORY Keto, ORY Oathkeeper can\nbe used completely standalone and alongside other stacks with adjacent problem\ndomains (Keycloak, Gluu, Vault, ...). ORY Oathkeeper's Access Control Decision\nAPI works with"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/datawire/ambassador"}),"Ambassador")," via\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.getambassador.io/reference/services/auth-service"}),"auth service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.envoyproxy.io"}),"Envoy")," via the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/security/ext_authz_filter.html"}),"External Authorization HTTP Filter")),Object(i.b)("li",{parentName:"ul"},"AWS API Gateway via\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://aws.amazon.com/de/blogs/compute/introducing-custom-authorizers-in-amazon-api-gateway/"}),"Custom Authorizers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nginx.com"}),"Nginx")," via\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-subrequest-authentication/"}),"Authentication Based on Subrequest Result"))),Object(i.b)("p",null,"among others."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"ORY Oathkeeper does not have any dependencies to other services. It can work\ncompletely in isolation and does not require a database or any other type of\npersistent storage. ORY Oathkeeper is configurable with yaml configuration\nfiles, JSON files, and environment variables."),Object(i.b)("h2",{id:"operating-modes"},"Operating Modes"),Object(i.b)("p",null,"Starting Oathkeeper via ",Object(i.b)("inlineCode",{parentName:"p"},"oathkeeper serve")," exposes two ports: One port serves\nthe reverse proxy, the other ORY Oathkeeper's API."),Object(i.b)("h3",{id:"reverse-proxy"},"Reverse Proxy"),Object(i.b)("p",null,"The port exposing the reverse proxy forwards requests to the upstream server,\ndefined in the rule, if the request is allowed. If the request is not allowed,\nORY Oathkeeper does not forward the request and instead returns an error\nmessage."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEhUVFAgUmVxdWVzdFxuICAgIE8tLT4-TzogQ2hlY2sgaWYgcmVxdWVzdCBpcyBhbGxvd2VkXG4gICAgYWx0IGlzIG5vdCBhbGxvd2VkXG4gICAgTy0-PkM6IFJldHVybiBIVFRQIEVycm9yIFxuICAgIGVsc2UgaXMgYWxsb3dlZFxuICAgIE8tPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdCBcbiAgICBBLT4-TzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBPLT4-QzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBlbmQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBPIGFzIE9hdGhrZWVwZXIgUHJveHlcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-Pk86IEhUVFAgUmVxdWVzdFxuICAgIE8tLT4-TzogQ2hlY2sgaWYgcmVxdWVzdCBpcyBhbGxvd2VkXG4gICAgYWx0IGlzIG5vdCBhbGxvd2VkXG4gICAgTy0-PkM6IFJldHVybiBIVFRQIEVycm9yIFxuICAgIGVsc2UgaXMgYWxsb3dlZFxuICAgIE8tPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdCBcbiAgICBBLT4-TzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBPLT4-QzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBlbmQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"ORY Oathkeeper deployed as a Reverse Proxy"})))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"Assuming the following request"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /my-service/whatever HTTP/1.1\nHost: oathkeeper-proxy:4455\nAuthorization: bearer some-token\n")),Object(i.b)("p",null,"and you have the following rule defined (which allows this request)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://oathkeeper-proxy:4455/my-service/whatever",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),Object(i.b)("p",null,"then the request will be forwarded by ORY Oathkeeper as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /my-service/whatever HTTP/1.1\nHost: my-backend-service:4455\nAuthorization: bearer some-token\n")),Object(i.b)("p",null,"The response of this request will then be sent to the client that made the\nrequest to ORY Oathkeeper."),Object(i.b)("h3",{id:"access-control-decision-api"},"Access Control Decision API"),Object(i.b)("p",null,"The ORY Oathkeeper Access Control Decision API follows best-practices and works\nwith most (if not all) modern API gateways and reverse proxies. To verify a\nrequest, send it to the ",Object(i.b)("inlineCode",{parentName:"p"},"decisions")," endpoint located at the Ory Authkeeper API\nport. It matches every sub-path and HTTP Method:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET /decisions/v1/api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PUT /decisions/my/other/api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DELETE /decisions/users?foo=?bar"))),Object(i.b)("p",null,"When matching a rule, the ",Object(i.b)("inlineCode",{parentName:"p"},"/decision")," prefix is stripped from the matching path."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBBRyBhcyBBUEkgR2F0ZXdheVxuICAgIHBhcnRpY2lwYW50IE8gYXMgT2F0aGtlZXBlciBBUElcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-PkFHOiBIVFRQIFJlcXVlc3RcbiAgICBBRy0-Pk86IEFzayBqdWRnZSBBUEkgZm9yIGF1dGhvcml6YXRpb25cblxuICAgIGFsdCBpcyBhbGxvd2VkXG4gICAgTy0-PkFHOiBSZXR1cm4gYXV0aCBpbmZvXG4gICAgQUctPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdFxuICAgIEEtPj5BRzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBBRy0-PkM6IFJldHVybiBIVFRQIFJlc3BvbnNlXG4gICAgZWxzZSBpcyBub3QgYWxsb3dlZFxuICAgIE8tPj5BRzogRGVueSByZXF1ZXN0XG4gICAgQUctPj5DOiBSZXR1cm4gSFRUUCBFcnJvclxuICAgIGVuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgcGFydGljaXBhbnQgQyBhcyBDbGllbnRcbiAgICBwYXJ0aWNpcGFudCBBRyBhcyBBUEkgR2F0ZXdheVxuICAgIHBhcnRpY2lwYW50IE8gYXMgT2F0aGtlZXBlciBBUElcbiAgICBwYXJ0aWNpcGFudCBBIGFzIFByb3RlY3RlZCBTZXJ2ZXIvQVBJXG4gICAgQy0-PkFHOiBIVFRQIFJlcXVlc3RcbiAgICBBRy0-Pk86IEFzayBqdWRnZSBBUEkgZm9yIGF1dGhvcml6YXRpb25cblxuICAgIGFsdCBpcyBhbGxvd2VkXG4gICAgTy0-PkFHOiBSZXR1cm4gYXV0aCBpbmZvXG4gICAgQUctPj5BOiBGb3J3YXJkIEhUVFAgUmVxdWVzdFxuICAgIEEtPj5BRzogUmV0dXJuIEhUVFAgUmVzcG9uc2VcbiAgICBBRy0-PkM6IFJldHVybiBIVFRQIFJlc3BvbnNlXG4gICAgZWxzZSBpcyBub3QgYWxsb3dlZFxuICAgIE8tPj5BRzogRGVueSByZXF1ZXN0XG4gICAgQUctPj5DOiBSZXR1cm4gSFRUUCBFcnJvclxuICAgIGVuZCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19",alt:"ORY Oathkeeper deployed as an Decision API"})))),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("p",null,"Assuming you are making the following request to ORY Oathkeeper's Access Control\nDecision API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /decision/my-service/whatever HTTP/1.1\nHost: oathkeeper-api:4456\nAuthorization: bearer some-token\n")),Object(i.b)("p",null,"and you have the following rule defined (which allows this request)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "match": {\n    "url": "http://oathkeeper-api:4456/my-service/whatever",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "noop"\n    }\n  ],\n  "authorizer": {\n    "handler": "allow"\n  },\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),Object(i.b)("p",null,"then this endpoint will directly respond with HTTP Status Code 200:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"HTTP/1.1 200 OK\nAuthorization: bearer some-token\n")),Object(i.b)("p",null,"If any other status code is returned, the request must not be allowed, for\nexample:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"HTTP/1.1 401 OK\nContent-Length: 0\nConnection: Closed\n")),Object(i.b)("p",null,"It is also possible to have this endpoint return other error responses such as\nthe HTTP Status Found (HTTP Status Code ",Object(i.b)("inlineCode",{parentName:"p"},"302"),"), depending configured on the\nerror handling. Use this feature only if your Reverse Proxy supports these type\nof responses."),Object(i.b)("p",null,"Depending on the mutator defined by the access rule, the HTTP Response might\ncontain additional or mutated HTTP Headers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"HTTP/1.1 200 OK\nX-User-ID: john.doe\n")),Object(i.b)("h2",{id:"decision-engine"},"Decision Engine"),Object(i.b)("p",null,"The decision engine allows to configure how ORY Oathkeeper authorizes HTTP\nrequests. Authorization happens in four steps, each of which can be configured:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Access Rule Matching:")," Verifies that the HTTP method, path, and host of\nthe incoming HTTP request conform to your access rules. The request is denied\nif no access rules match. The configuration of the matching access rule\nbecomes the input for the next steps."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Authentication:"),' Oathkeeper can validate credentials via a variety of\nmethods like Bearer Token, Basic Authorization, or cookie. Invalid\ncredentials result in denial of the request. The "internal" session state\n(e.g. user ID) of valid (authenticated) credentials becomes input for the\nnext steps.'),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Authorization:"),' Access Rules can check permissions. To secure, for\nexample, an API that requires admin privileges, configure the authorizer to\ncheck if the user ID from step 2 has the "admin" permission or role.\nOathkeeper supports a variety of authorizers. Failed authorization (e.g. user\ndoes not have role "admin") results denial of the request.'),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Mutation:")," The Access Rule can add session data to the HTTP request that\nit forwards to the upstream API. For example, the mutator could add\n",Object(i.b)("inlineCode",{parentName:"li"},"X-User-ID: the-user-id")," to the HTTP headers or generate a JWT with session\ninformation and set it as ",Object(i.b)("inlineCode",{parentName:"li"},"Authorization: Bearer the.jwt.token"),".")),Object(i.b)("p",null,"Additionally, error handling can be configured. You may want to send an\n",Object(i.b)("inlineCode",{parentName:"p"},"application/json")," response for API clients and a HTTP Redirect response for\nbrowsers with an end user."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxucihIVFRQIFJlcXVlc3QpIC0tPiBhcm0oQWNjZXNzIFJ1bGUgTWF0Y2hlcilcbmFybSAtLWZvdW5kIG1hdGNoaW5nIGFjY2VzcyBydWxlLS0-IGFuKEF1dGhlbnRpY2F0b3IpXG5hcm0gLS1kaWQgbm90IGZpbmQgYWNjZXNzIHJ1bGUtLT4gZWhcbmFuIC0tY3JlZGVudGlhbHMgaW4gcmVxdWVzdCBhcmUgdmFsaWQtLT5heihBdXRob3JpemVyKVxuYW4gLS1jcmVkZW50aWFscyBpbiByZXF1ZXN0IGFyZSBpbnZhbGlkLS0-IGVoXG5heiAtLXJlcXVlc3QgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uLS0-IGVoXG5heiAtLXJlcXVlc3QgaGFzIHBlcm1pc3Npb24tLT5tdChNdXRhdG9yKVxubXQtLXRyYW5zZm9ybSBodHRwIHJlcXVlc3QtLT5yZXMoRm9yd2FyZCBIVFRQIFJlcXVlc3QpXG5cbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMganNvbiAtLT4gZWhqc29uKEhUVFAgSlNPTiBFcnJvciByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMgcmVkaXJlY3QgLS0-IGVocmVkaXJlY3QoSFRUUCBSZWRpcmVjdCByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIG90aGVycyAtLT4gZWhvdGhlcihFeGVjdXRlIGFueSBvdGhlciBlcnJvciBoYW5kbGluZyBsb2dpYy4uLikiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lQ1NTIjoiLmxhYmVsIGZvcmVpZ25PYmplY3QgeyBvdmVyZmxvdzogdmlzaWJsZTsgZm9udC1zaXplOiAxM3B4IH0ifX0"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxucihIVFRQIFJlcXVlc3QpIC0tPiBhcm0oQWNjZXNzIFJ1bGUgTWF0Y2hlcilcbmFybSAtLWZvdW5kIG1hdGNoaW5nIGFjY2VzcyBydWxlLS0-IGFuKEF1dGhlbnRpY2F0b3IpXG5hcm0gLS1kaWQgbm90IGZpbmQgYWNjZXNzIHJ1bGUtLT4gZWhcbmFuIC0tY3JlZGVudGlhbHMgaW4gcmVxdWVzdCBhcmUgdmFsaWQtLT5heihBdXRob3JpemVyKVxuYW4gLS1jcmVkZW50aWFscyBpbiByZXF1ZXN0IGFyZSBpbnZhbGlkLS0-IGVoXG5heiAtLXJlcXVlc3QgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uLS0-IGVoXG5heiAtLXJlcXVlc3QgaGFzIHBlcm1pc3Npb24tLT5tdChNdXRhdG9yKVxubXQtLXRyYW5zZm9ybSBodHRwIHJlcXVlc3QtLT5yZXMoRm9yd2FyZCBIVFRQIFJlcXVlc3QpXG5cbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMganNvbiAtLT4gZWhqc29uKEhUVFAgSlNPTiBFcnJvciByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIGlmIGVycm9yIGhhbmRsZWQgYXMgcmVkaXJlY3QgLS0-IGVocmVkaXJlY3QoSFRUUCBSZWRpcmVjdCByZXNwb25zZSlcbmVoKEVycm9yIEhhbmRsZXIpIC0tIG90aGVycyAtLT4gZWhvdGhlcihFeGVjdXRlIGFueSBvdGhlciBlcnJvciBoYW5kbGluZyBsb2dpYy4uLikiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lQ1NTIjoiLmxhYmVsIGZvcmVpZ25PYmplY3QgeyBvdmVyZmxvdzogdmlzaWJsZTsgZm9udC1zaXplOiAxM3B4IH0ifX0",alt:"ORY Oathkeeper Pipeline"})))))}b.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,u=d["".concat(o,".").concat(p)]||d[p]||h[p]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);