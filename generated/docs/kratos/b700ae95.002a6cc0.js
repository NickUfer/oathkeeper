(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),i=(a(0),a(274)),o=(a(276),{id:"zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy"}),c={id:"version-v0.2/guides/zero-trust-iap-proxy-identity-access-proxy",title:"Zero Trust with IAP Proxy",description:"import useBaseUrl from '@docusaurus/useBaseUrl'",source:"@site/versioned_docs/version-v0.2/guides/zero-trust-iap-proxy-identity-access-proxy.md",permalink:"/kratos/docs/guides/zero-trust-iap-proxy-identity-access-proxy",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/guides/zero-trust-iap-proxy-identity-access-proxy.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588672336,sidebar:"version-v0.2/docs",previous:{title:"Hooks",permalink:"/kratos/docs/self-service/hooks/index"},next:{title:"Multitenancy",permalink:"/kratos/docs/guides/multi-tenancy-multitenant"}},s=[{value:"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy",id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/quickstart"}),"Quickstart")," covers a basic set up that uses a pipe in\nSecureApp to forward requests to ORY Kratos."),Object(i.b)("p",null,"Systems that have more than a few components often use Reverse Proxies such as\nNginx, Envoy, Kong to route and authorize traffic to applications. ORY Kratos\nworks very well in such a environment and the purpose of this guide is\nclarifying how one can use a reverse proxy with IAP (Identity and Access Proxy)\ncapabilities to authorize incoming requests. In this tutorial, we will use ORY\nOathkeeper to achieve this."),Object(i.b)("p",null,"This guide expects that you have familiarized yourself with ORY Kratos' concepts\nand that builds on the components and flows established in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/quickstart"}),"Quickstart"),"."),Object(i.b)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we will use a reverse proxy\n(",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),") to deny all\nunauthenticated traffic to ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/dashboard")," and redirect the user\nto the login page at ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login"),". Further, we will configure\naccess to ",Object(i.b)("inlineCode",{parentName:"p"},"http://secure-app/auth/login")," in such a way that access only works if\none is not yet authenticated."),Object(i.b)("h2",{id:"running-ory-kratos-and-the-ory-oathkeeper-identity-and-access-proxy"},"Running ORY Kratos and the ORY Oathkeeper Identity and Access Proxy"),Object(i.b)("p",null,"Clone the ORY Kratos repository and fetch the latest images:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ory/kratos.git\n# or if you have git+ssh set up:\n#  git clone git@github.com:ory/kratos.git\ncd kratos\ngit checkout v0.2.1-alpha.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\n")),Object(i.b)("p",null,"Next, run the quickstart and add the ORY Oathkeeper config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose \\\n  -f quickstart.yml \\\n  -f quickstart-oathkeeper.yml \\\n  up --build --force-recreate\n")),Object(i.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'kratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for api, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4456","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"TLS has not been configured for proxy, skipping","time":"2020-01-20T09:22:09Z"}\noathkeeper_1                  | {"level":"info","msg":"Listening on http://:4455","time":"2020-01-20T09:22:09Z"}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"There are two important factors to get a fully functional system:")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(i.b)("inlineCode",{parentName:"li"},"4435"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4455"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4456"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(i.b)("inlineCode",{parentName:"li"},"4434"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"4436")," >\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"}),"are free"),"."),Object(i.b)("li",{parentName:"ul"},"Make sure to always use ",Object(i.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname, never use ",Object(i.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies. :::")),Object(i.b)("h3",Object(n.a)({parentName:"div"},{id:"network-architecture"}),"Network Architecture"),Object(i.b)("p",{parentName:"div"},"This demo makes use of several services / Docker Images:"),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ORY Kratos")),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("strong",{parentName:"li"},"SecureApp")," - an\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://github.com/ory/kratos-selfservice-ui-node"}),"example application written in NodeJS"),"\nthat implements the login, registration, logout, ..., and dashboard screen."),Object(i.b)("li",{parentName:"ol"},"A reverse proxy (",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),") to\nprotect the ",Object(i.b)("strong",{parentName:"li"},"SecureApp"),"."),Object(i.b)("li",{parentName:"ol"},"An SMTP server with which ORY Kratos can send E-Mails with. We will use\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mailhog/MailHog"}),"MailHog"),", a minimalistic SMTP throaway\nserver with an easy UI.")),Object(i.b)("p",{parentName:"div"},"To better understand how everything is wired, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker (Compose) Networks work:"),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtSZXZlcnNlIFByb3h5IGV4cG9zZWQgYXQgOjQ0NTVdKVxuICAgIFNNVFBVSShbTWFpbFNsdXJwZXIgVUkgZXhwb3NlZCBhdCA6NDQzNl0pXG5lbmRcblxuc3ViZ3JhcGggZG5bXCJJbnRlcm5hbCBEb2NrZXIgTmV0d29yayAoaW50cmFuZXQpXCJdXG4gICAgT0tQSE4tLT5PT1xuICAgIFNNVFBVSS0tPlNNVFBcbiAgICBPTy0tPnxQcm94aWVzIFVSTHNzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIE9PLS0-fFwiUHJveGllcyAvYXV0aC9sb2dpbiwgL2F1dGgvcmVnaXN0cmF0aW9uLCAvZGFzaGJvYXJkLCAuLi4gdG9cInxTQVxuICAgIFNBLS0-fFRhbGtzIHRvfE9LXG4gICAgT0stLT58U2VuZHMgbWFpbCB2aWF8U01UUFxuICAgIE9PLS0-fFZhbGlkYXRlcyBhdXRoIHNlc3Npb25zIHVzaW5nfE9LXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIE9PW1wiUmV2ZXJzZSBQcm94eSAoT1JZIE9hdGhrZWVwZXIpXCJdXG4gICAgU0FbXCJTZWN1cmVBcHAgKE9SWSBLcmF0b3MgU2VsZlNlcnZpY2UgVUkgTm9kZSBFeGFtcGxlKVwiXVxuICAgIFNNVFBbXCJTTVRQIFNlcnZlciAoTWFpbFNsdXJwZXIpXCJdXG5lbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJuZXV0cmFsIiwiZmxvd2NoYXJ0Ijp7InJhbmtTcGFjaW5nIjo2NSwibm9kZVNwYWNpbmciOjMwLCJjdXJ2ZSI6ImJhc2lzIn19fQ",alt:"User Login and Registration Network Topology"})))),Object(i.b)("p",{parentName:"div"},"As you can see, most requests are proxied through the Reverse Proxy\n(",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),"). The ",Object(i.b)("inlineCode",{parentName:"p"},"quickstart.yml")," file\nalso defines additional ports such as ",Object(i.b)("inlineCode",{parentName:"p"},"4434"),", ",Object(i.b)("inlineCode",{parentName:"p"},"4456"),", and others. These ports\nare only there for debugging and playing around with and are not actually\nrequired for the demo to work."),Object(i.b)("p",{parentName:"div"},"The next diagram shows how we've configured the routes in our Reverse Proxy\n(",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),"):"),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggcGlbUHVibGljIEludGVybmV0XVxuICAgIEJbQnJvd3Nlcl1cbmVuZFxuXG5zdWJncmFwaCB2cGNbVlBDIC8gQ2xvdWQgLyBEb2NrZXIgTmV0d29ya11cbnN1YmdyYXBoIFwiRGVtaWxpdGFyaXplZCBab25lIC8gRE1aXCJcbiAgICBPS1tPUlkgT2F0aGtlZXBlciA6NDQ1NV1cbiAgICBCIC0tPiBPS1xuZW5kXG5cbiAgICBPSyAtLT58XCJGb3J3YXJkcyB7LywvZGFzaGJvYXJkfSB0b1wifCBTQURcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9sb2dvdXQgdG9cInwgU0FMVVxuICAgIE9LIC0tPnxcIkZvcndhcmRzIC9hdXRoL2xvZ2luIHRvXCJ8IFNBTElcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvYXV0aC9yZWdpc3RyYXRpb24gdG9cInwgU0FSXG4gICAgT0sgLS0-fFwiRm9yd2FyZHMgL2F1dGgvKiB0b1wifCBTQUFcbiAgICBPSyAtLT58XCJGb3J3YXJkcyAvLm9yeS9rcmF0b3MvcHVibGljLyogdG9cInwgS1BcblxuICAgIHN1YmdyYXBoIFwiUHJpdmF0ZSBTdWJuZXQgLyBJbnRyYW5ldFwiXG4gICAgS1sgT1JZIEtyYXRvcyBdXG5cbiAgICBLUChbIE9SWSBLcmF0b3MgUHVibGljIEFQSSBdKVxuICAgIEtBKFsgT1JZIEtyYXRvcyBBZG1pbiBBUEkgXSlcbiAgICBTQSAtLT4gS0FcbiAgICBLQSAtLmJlbG9uZ3MgdG8uLT4gS1xuICAgIEtQIC0uYmVsb25ncyB0by4tPiBLXG5cbiAgICBzdWJncmFwaCBzYVtcIlNlY3VyZUFwcCAvIGtyYXRvcy1zZXJsZnNlcnZpY2UtdWktbm9kZSBFeGFtcGxlXCJdXG5cbiAgICAgICAgU0FbU2VjdXJlQXBwXVxuICAgICAgICBTQUQgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTFUgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBTEkgLS5iZWxvbmdzIHRvLi0-IFNBXG4gICAgICAgIFNBUiAtLmJlbG9uZ3MgdG8uLT4gU0FcbiAgICAgICAgU0FBIC0uYmVsb25ncyB0by4tPiBTQVxuXG4gICAgICAgIHN1YmdyYXBoIFwiSGFzIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBRChbUm91dGUgL2Rhc2hib2FyZF0pXG4gICAgICAgICAgICBTQUxVKFtSb3V0ZSAvYXV0aC9sb2dvdXRdKVxuICAgICAgICBlbmRcblxuICAgICAgICBzdWJncmFwaCBcIk5vIGFjdGl2ZSBsb2dpbiBzZXNzaW9uXCJcbiAgICAgICAgICAgIFNBTEkoW1JvdXRlIC9hdXRoL2xvZ2luXSkgXG4gICAgICAgICAgICBTQVIoW1JvdXRlIC9hdXRoL3JlZ2lzdHJhdGlvbl0pIFxuICAgICAgICAgICAgU0FBKFtSb3V0ZSAvYXV0aC8uLi5dKVxuICAgICAgICBlbmRcbiAgICBlbmRcbiAgICBlbmRcblxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NzAsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fX0",alt:"User Login and Registration Routes"})))),Object(i.b)("p",{parentName:"div"},"You might notice that we're also proxying requests to ORY Kratos' Public API. We\nare doing this because that way all requests are going to and coming from the\nsame hostname. This avoids common cross-domain issues with cookies."),Object(i.b)("h2",Object(n.a)({parentName:"div"},{id:"perform-registration-logout-login"}),"Perform registration, logout, login"),Object(i.b)("p",{parentName:"div"},"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",Object(i.b)("strong",{parentName:"p"},"go to\n",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"http://127.0.0.1:4455/dashboard"}),"127.0.0.1:4455/dashboard")),"."),Object(i.b)("p",{parentName:"div"},"Check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/quickstart"}),"Quickstart")," for the other flows!"),Object(i.b)("h2",Object(n.a)({parentName:"div"},{id:"configuration"}),"Configuration"),Object(i.b)("p",{parentName:"div"},"You can find all configuration files for this quickstart guide in\n",Object(i.b)("inlineCode",{parentName:"p"},"./contrib/quickstart"),", ",Object(i.b)("inlineCode",{parentName:"p"},"./quickstart.yml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"./quickstart-oathkeeper.yml"),"."),Object(i.b)("h3",Object(n.a)({parentName:"div"},{id:"ory-oathkeeper-identity-and-access-proxy"}),"ORY Oathkeeper: Identity and Access Proxy"),Object(i.b)("p",{parentName:"div"},"All configuration for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/oathkeeper/"}),"ORY Oathkeeper")," resides\nin ",Object(i.b)("inlineCode",{parentName:"p"},"./contrib/quickstart/oathkeeper"),"."),Object(i.b)("h4",Object(n.a)({parentName:"div"},{id:"configuration-1"}),"Configuration"),Object(i.b)("p",{parentName:"div"},"We define several configuration options for ORY Oathkeeper, such as the port\nwhere the proxy should run or where to load the access rules from."),Object(i.b)("h5",Object(n.a)({parentName:"div"},{id:"cookie-session-authenticator"}),"Cookie Session Authenticator"),Object(i.b)("p",{parentName:"div"},"The\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#cookie_session"}),"Cookie Session Authenticator"),"\nis enabled and points to\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/reference/api"}),"ORY Kratos' ",Object(i.b)("inlineCode",{parentName:"a"},"/sessions/whoami")," API"),". It uses the\n",Object(i.b)("inlineCode",{parentName:"p"},"ory_kratos_session")," cookie to identify if a request contains a session or not:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'# ...\nauthenticators\n  cookie_session:\n    enabled: true\n    config:\n      check_session_url: http://kratos:4433/sessions/whoami\n      preserve_path: true\n      extra_from: "@this"\n      subject_from: "identity.id"\n      only:\n        - ory_kratos_session\n# ...\n')),Object(i.b)("p",{parentName:"div"},"It's more or less doing what the ",Object(i.b)("inlineCode",{parentName:"p"},"needsLogin")," function does in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/quickstart"}),"Quickstart"),"."),Object(i.b)("h4",Object(n.a)({parentName:"div"},{id:"anonymous-authenticator"}),"Anonymous Authenticator"),Object(i.b)("p",{parentName:"div"},"The\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authn#anonymous"}),"Anonymous Authenticator"),"\nis useful for endpoints that do not need login, such as the registration screen:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthenticators\n  anonymous:\n    enabled: true\n    config:\n      subject: guest\n# ...\n")),Object(i.b)("h4",Object(n.a)({parentName:"div"},{id:"allowed-authorizer"}),"Allowed Authorizer"),Object(i.b)("p",{parentName:"div"},"The\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/authz#allowed"}),"Allowed Authenticator"),"\nsimply allows all users to access the URL. Since we don't have RBAC or ACL in\nplace for this example, this will be enough."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"# ...\nauthorizers\n  allowed:\n    enabled: true\n# ...\n")),Object(i.b)("h3",Object(n.a)({parentName:"div"},{id:"id-token-mutator"}),"ID Token Mutator"),Object(i.b)("p",{parentName:"div"},"The\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#id_token"}),"ID Token Mutator"),"\ntakes all the available session information and puts it into a JSON Web Token\n(JWT). The protected SecureApp will now receive ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization: bearer <jwt...>"),"\nin the HTTP Header instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Cookie: ory_kratos_session=..."),". The JWT is\nsigned using a RS256 key. To verify the JWT we can use the public key provided\nby ORY Oathkeeper's JWKS API ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4456/.well-known/jwks.json"),". You\ncan generate the RS256 key yourself by running:\n",Object(i.b)("inlineCode",{parentName:"p"},"oathkeeper credentials generate --alg RS256 > id_token.jwks.json"),"."),Object(i.b)("p",{parentName:"div"},"We also enabled the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#"}),"NoOp Mutator")," for the\nlogin, registration, ... endpoints:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),'mutators:\n  noop:\n    enabled: true\n\n  id_token:\n    enabled: true\n    config:\n      issuer_url: http://127.0.0.1:4455/\n      jwks_url: file:///etc/config/oathkeeper/id_token.jwks.json\n      claims: |\n        {\n          "session": {{ .Extra | toJson }}\n        }\n')),Object(i.b)("p",{parentName:"div"},"You could obviously also use other mutators such as the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ory.sh/docs/oathkeeper/pipeline/mutator#header"}),"Header Mutator")," and\nuse headers such as ",Object(i.b)("inlineCode",{parentName:"p"},"X-User-ID")," instead of the JWT."),Object(i.b)("h3",Object(n.a)({parentName:"div"},{id:"error-handling"}),"Error Handling"),Object(i.b)("p",{parentName:"div"},"We configure the error handling in such a way that a missing or invalid login\nsession (when accessed from a browser) leads to a redirect to ",Object(i.b)("inlineCode",{parentName:"p"},"/auth/login"),":"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"errors:\n  fallback:\n    - json\n\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        to: http://127.0.0.1:4455/auth/login\n        when:\n          - error:\n              - unauthorized\n              - forbidden\n            request:\n              header:\n                accept:\n                  # We don't want this for application/json requests, only browser requests!\n                  - text/html\n    json:\n      enabled: true\n      config:\n        verbose: true\n")),Object(i.b)("h3",Object(n.a)({parentName:"div"},{id:"access-rules"}),"Access Rules"),Object(i.b)("p",{parentName:"div"},"We use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gobwas/glob"}),"glob matching")," to match the HTTP\nrequests for our access rules:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/.oathkeeper.yml"',title:'"contrib/quickstart/oathkeeper/.oathkeeper.yml"'}),"access_rules:\n  matching_strategy: glob\n  repositories:\n    - file:///etc/config/oathkeeper/`access-rules.yml`\n")),Object(i.b)("p",{parentName:"div"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"access-rules.yml")," we define three rules. The first rule forwards all traffic\nmatching ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/")," to ORY Kratos' Public API:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"- id: 'ory:kratos:public'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos:4433'\n    strip_path: /.ory/kratos/public\n  match:\n    url: 'http://127.0.0.1:4455/.ory/kratos/public/<**>'\n    methods:\n      - GET\n      - POST\n      - PUT\n      - DELETE\n      - PATCH\n  authenticators:\n    - handler: noop\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(i.b)("p",{parentName:"div"},"The second rule allows anonymous requests to login, registration, re-send\nverification email, and the error page plus any assets:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:anonymous'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{error,verify,auth/*,**.css,**.js}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: anonymous\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: noop\n")),Object(i.b)("p",{parentName:"div"},"And the final rule requires a valid session before allowing requests to the\ndashboard and user settings:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="contrib/quickstart/oathkeeper/access-rules.yml"',title:'"contrib/quickstart/oathkeeper/access-rules.yml"'}),"# ...\n- id: 'ory:kratos-selfservice-ui-node:protected'\n  upstream:\n    preserve_host: true\n    url: 'http://kratos-selfservice-ui-node:4435'\n  match:\n    url: 'http://127.0.0.1:4455/<{,debug,dashboard,settings}{/,}>'\n    methods:\n      - GET\n  authenticators:\n    - handler: cookie_session\n  authorizer:\n    handler: allow\n  mutators:\n    - handler: id_token\n  errors:\n    - handler: redirect\n      config:\n        to: http://127.0.0.1:4455/auth/login\n")),Object(i.b)("h2",Object(n.a)({parentName:"div"},{id:"cleaning-up-docker"}),"Cleaning up Docker"),Object(i.b)("p",{parentName:"div"},"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml -f quickstart-oathkeeper.yml down -v\ndocker-compose -f quickstart.yml -f quickstart-oathkeeper.yml rm -f -s -v\n")))))}l.isMDXComponent=!0},274:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(h,c({ref:t},b,{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},275:function(e,t,a){"use strict";var n=a(0),r=a(52);t.a=function(){return Object(n.useContext)(r.a)}},276:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(277);var n=a(275);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},277:function(e,t,a){"use strict";var n=a(12),r=a(25),i=a(278),o="".startsWith;n(n.P+n.F*a(279)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},278:function(e,t,a){var n=a(76),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},279:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);