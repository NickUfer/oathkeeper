(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),o=(t(0),t(189)),i={id:"configure-deploy",title:"Configure and Deploy"},c={id:"version-v0.37/configure-deploy",isDocsHomePage:!1,title:"Configure and Deploy",description:"The ORY Oathkeeper HTTP serve process oathkeeper serve opens two ports",source:"@site/versioned_docs/version-v0.37/configure-deploy.md",permalink:"/oathkeeper/docs/v0.37/configure-deploy",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/configure-deploy.md",version:"v0.37",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177132,sidebar:"version-v0.37/docs",previous:{title:"Error Handlers",permalink:"/oathkeeper/docs/v0.37/pipeline/error"},next:{title:"Configuration",permalink:"/oathkeeper/docs/v0.37/reference/configuration"},latestVersionMainDocPermalink:"/oathkeeper/docs"},s=[{value:"Configure",id:"configure",children:[{value:"Access Rules",id:"access-rules",children:[]},{value:"Cryptographic Keys",id:"cryptographic-keys",children:[]},{value:"Dockerfile",id:"dockerfile",children:[]}]},{value:"Build &amp; Run",id:"build--run",children:[]},{value:"Authorizing Requests",id:"authorizing-requests",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ORY Oathkeeper HTTP serve process ",Object(o.b)("inlineCode",{parentName:"p"},"oathkeeper serve")," opens two ports\nexposing the"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/#reverse-proxy"}),"reverse proxy")),Object(o.b)("li",{parentName:"ul"},"REST API which serves the\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/oathkeeper/docs/v0.37/#access-control-decision-api"}),"Access Control Decision API")," as well as\nother API endpoints such as health checks, JSON Web Key Sets, and a list of\navailable rules.")),Object(o.b)("p",null,"For this guide we are using Docker. ORY Oathkeeper however can be\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/oathkeeper/docs/v0.37/install"}),"installed in a variety of ways"),"."),Object(o.b)("h2",{id:"configure"},"Configure"),Object(o.b)("p",null,"ORY Oathkeeper can be configured via the filesystem as well as environment\nvariables. For more information on mapping the keys to environment variables\nplease head over to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"configuration.md"}),"configuration chapter"),"."),Object(o.b)("p",null,"First, create an empty directory and ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir oathkeeper-demo\n$ cd oathkeeper-demo\n")),Object(o.b)("p",null,"Create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ cat << EOF > config.yaml\nserve:\n  proxy:\n    port: 4455 # run the proxy at port 4455\n  api:\n    port: 4456 # run the api at port 4456\n\naccess_rules:\n  repositories:\n    - file:///rules.json\n\nerrors:\n  fallback:\n    - json\n  handlers:\n    json:\n      enabled: true\n      config:\n        verbose: true\n    redirect:\n      enabled: true\n      config:\n        to: https://www.ory.sh/docs\n\nmutators:\n  header:\n    enabled: true\n    config:\n      headers:\n        X-User: "{{ print .Subject }}"\n        # You could add some other headers, for example with data from the\n        # session.\n        # X-Some-Arbitrary-Data: "{{ print .Extra.some.arbitrary.data }}"\n  noop:\n    enabled: true\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://localhost:4455/\n      jwks_url: file:///jwks.json\n\nauthorizers:\n  allow:\n    enabled: true\n  deny:\n    enabled: true\n\nauthenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\nEOF\n')),Object(o.b)("p",null,"This configuration file will run the proxy at port 4455, the api at port 4456,\nand enable the anonymous authenticator, the allow and deny authorizers, and the\nnoop and id_token mutators."),Object(o.b)("h3",{id:"access-rules"},"Access Rules"),Object(o.b)("p",null,"We will be using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://httpbin.org"}),"httpbin.org")," as the upstream server. The\nservice echoes incoming HTTP Requests and is perfect for seeing how ORY\nOathkeeper works. Let's define three rules:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An access rule that allowing anonymous access to\n",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/cookie")," and using the ",Object(o.b)("inlineCode",{parentName:"li"},"cookie")," mutator."),Object(o.b)("li",{parentName:"ol"},"An access rule denying every access to ",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/deny"),".\nIf the request header has ",Object(o.b)("inlineCode",{parentName:"li"},"Accept: application/json"),", we will receive a JSON\nresponse. If however the accept header has ",Object(o.b)("inlineCode",{parentName:"li"},"Accept: text/*"),", a HTTP Redirect\nwill be sent (to ",Object(o.b)("inlineCode",{parentName:"li"},"https://www.ory.sh/docs")," as configured above)."),Object(o.b)("li",{parentName:"ol"},"An access rule allowing anonymous access to\n",Object(o.b)("inlineCode",{parentName:"li"},"https://httpbin.org/anything/id_token")," and using the ",Object(o.b)("inlineCode",{parentName:"li"},"id_token")," mutator.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ cat << EOF > rules.json\n[\n  {\n    "id": "allow-anonymous-with-header-mutator",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/header"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/header",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "allow"\n    },\n    "mutators": [\n      {\n        "handler": "header",\n        "config": {\n          "headers": {\n            "X-User": "{{ print .Subject }}"\n          }\n        }\n      }\n    ]\n  },\n  {\n    "id": "deny-anonymous",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/deny"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/deny",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "deny"\n    },\n    "mutators": [\n      {\n        "handler": "noop"\n      }\n    ],\n    "errors": [\n      {\n        "handler": "json",\n        "config": {\n          "when": [\n            {\n              "request": {\n                "header": {\n                  "accept": ["application/json"]\n                }\n              }\n            }\n          ]\n        }\n      },\n      {\n        "handler": "redirect",\n        "config": {\n          "when": [\n            {\n              "request": {\n                "header": {\n                  "accept": ["text/*"]\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n  },\n  {\n    "id": "allow-anonymous-with-id-token-mutator",\n    "version": "v0.36.0-beta.4",\n    "upstream": {\n      "url": "https://httpbin.org/anything/id_token"\n    },\n    "match": {\n      "url": "http://<127.0.0.1|localhost>:4455/anything/id_token",\n      "methods": [\n        "GET"\n      ]\n    },\n    "authenticators": [\n      {\n        "handler": "anonymous"\n      }\n    ],\n    "authorizer": {\n      "handler": "allow"\n    },\n    "mutators": [\n      {\n        "handler": "id_token"\n      }\n    ]\n  }\n]\nEOF\n')),Object(o.b)("h3",{id:"cryptographic-keys"},"Cryptographic Keys"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"id_token")," mutator creates a signed JSON Web Token. For that to work, a\npublic/private key is required. Luckily, ORY Oathkeeper can assist you in\ncreating such keys. All common JWT algorithms are supported (RS256, ES256,\nHS256, ...). Let's generate a key for the RS256 algorithm that will be used by\nthe id_token mutator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker run oryd/oathkeeper:v0.37.1-beta.1 credentials generate --alg RS256 > jwks.json\n")),Object(o.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(o.b)("p",null,"Next we will be creating a custom Docker Image that adds these configuration\nfiles to the image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ cat << EOF > Dockerfile\nFROM oryd/oathkeeper:v0.37.1-beta.1\n\nADD config.yaml /config.yaml\nADD rules.json /rules.json\nADD jwks.json /jwks.json\nEOF\n")),Object(o.b)("p",null,"We are doing this for demonstration purposes only. In a production environment\nyou would separate these configuration values from the build artifact itself. In\nKuberentes, it would make most sense to provide the JSON Web Keys as a\nKubernetes Secret mounted as in a directory, for example."),Object(o.b)("p",null,"We encourage you to check out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://k8s.ory.sh/helm/"}),"helm charts")," which\napply these best practices."),Object(o.b)("h2",{id:"build--run"},"Build & Run"),Object(o.b)("p",null,"Before building the Docker Image, we need to make sure that the local ORY\nOathkeeper Docker Image is on the most recent version:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker pull oryd/oathkeeper:v0.37.1-beta.1\n")),Object(o.b)("p",null,"Next we will build our custom Docker Image"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ docker build -t ory-oathkeeper-demo .\n")),Object(o.b)("p",null,"and run it"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --rm \\\n  --name ory-oathkeeper-demo \\\n  -p 4455:4455 \\\n  -p 4456:4456 \\\n  ory-oathkeeper-demo \\\n  --config /config.yaml \\\n  serve\n")),Object(o.b)("p",null,"Let's open a new terminal and check if it is alive:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl http://127.0.0.1:4456/health/alive\n{"status":"ok"}\n\n$ curl http://127.0.0.1:4456/health/ready\n{"status":"ok"}\n')),Object(o.b)("p",null,"Let's also check if the rules have been imported properly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl http://127.0.0.1:4456/rules\n[{"id":"allow-anonymous-with-header-mutator","description":"","match":{"methods":["GET"],...\n')),Object(o.b)("h2",{id:"authorizing-requests"},"Authorizing Requests"),Object(o.b)("p",null,"Everything is up and running and configured! Let's make some requests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl -X GET http://127.0.0.1:4455/anything/header\n{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.54.0",\n    "X-User": "guest"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "172.17.0.1, 82.135.11.242, 172.17.0.1",\n  "url": "https://httpbin.org/anything/header/anything/header"\n}\n\n# Make request and accept JSON (we get an error response)\n$ curl -H "Accept: application/json" -X GET http://127.0.0.1:4455/anything/deny\n{\n  "error":{\n    "code":403,\n    "status":"Forbidden",\n    "message":"Access credentials are not sufficient to access this resource"\n  }\n}\n\n# Make request and accept text/* (we get a redirect response).\n$ curl -H "Accept: text/html" -X GET http://127.0.0.1:4455/anything/deny\n<a href="https://www.ory.sh/docs">Found</a>.\n\n$ curl -X GET http://127.0.0.1:4455/anything/id_token\n{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3N2E2NWE0LTUzM2YtNDFhYi1hODI2LTgxNDliMDM2NDQ0MyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTgwMTg1MTcsImlhdCI6MTU1ODAxODQ1NywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDU1LyIsImp0aSI6IjExNmRiNzhmLTQyMjEtNDU2ZC05OWIzLTY4NGJkMWVjYThjZSIsIm5iZiI6MTU1ODAxODQ1Nywic3ViIjoiZ3Vlc3QifQ.2VKW-oYtzkFGRPgK3sb4iRlObDSzW8PyHzgNiQubppFSlp0bzJLl4Rnt56orJndPqIa7hwsm8YIskf-Wp-FA1piv-aG_XljkUjgilKr3cncMXDP15yDRwZj8g0iVKEhnugQsw_zWf5gMU2YBev2Eyv4xciJxbhrKCat-X8xNT9SvAbwpY-VxQdu_rnpu1GKCA54DyIX6r-Qh5bQPrrT7NvIupA7jJQ23qq83m4C1cQfBgzlhm7dcCuPqKunYKRsc7NZuER3lT6TjkhsF1qhf7o7BZmCnhz6VuH8L8TwMZS8IJWKSjJd8dEKKwxwPkNXOcZO8A3hIO8SZx4Yd7jrONA",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.54.0"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "172.17.0.1, 82.135.11.242, 172.17.0.1",\n  "url": "https://httpbin.org/anything/id_token/anything/id_token"\n}\n')),Object(o.b)("p",null,"That's it! You can now clean up the demo using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker rm -f ory-oathkeeper-demo\n$ docker rmi -f ory-oathkeeper-demo\n$ rm -rf oathkeeper-demo\n")))}p.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);