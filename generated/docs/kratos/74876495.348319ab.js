(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(274)),i=n(276),s={id:"quickstart",title:"Quickstart"},c={id:"quickstart",title:"Quickstart",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/quickstart.mdx",permalink:"/kratos/docs/next/quickstart",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/quickstart.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588672336,sidebar:"docs",previous:{title:"Introduction",permalink:"/kratos/docs/next/index"},next:{title:"Installation",permalink:"/kratos/docs/next/install"}},l=[{value:"Use case: You want login and registration for your Application",id:"use-case-you-want-login-and-registration-for-your-application",children:[]},{value:"Setup",id:"setup",children:[{value:"Clone ORY Kratos and run it in Docker",id:"clone-ory-kratos-and-run-it-in-docker",children:[]},{value:"Network Architecture",id:"network-architecture",children:[]}]},{value:"Perform registration, logout, login",id:"perform-registration-logout-login",children:[{value:"Understanding how Login and Registration works",id:"understanding-how-login-and-registration-works",children:[]},{value:"Email Verification",id:"email-verification",children:[]}]},{value:"Cleaning up Docker",id:"cleaning-up-docker",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos has several moving parts and getting everything right from the\nbeginning can be challenging. This getting started guide will help you install\nORY Kratos and some additional dependencies so that you can see how ORY Kratos\nworks."),Object(o.b)("p",null,"Please be aware that this guide is not a replacement for studying the docs. You\nmust understand core concepts and APIs to use ORY Kratos productively. This is\nmerely a guide to get you set up with some examples."),Object(o.b)("h2",{id:"use-case-you-want-login-and-registration-for-your-application"},"Use case: You want login and registration for your Application"),Object(o.b)("p",null,"This section gives you some context on what we want to achieve and what tools we\nneed for that. You will also learn about the network set up we picked for this\nguide."),Object(o.b)("p",null,"This quickstart guide operates on the assumption that we are writing a NodeJS\napp called ",Object(o.b)("strong",{parentName:"p"},"SecureApp"),". This app is using nothing fancy - some ExpressJS and a\nbit of HTML Templating using Handlebars. We do want to use TypeScript but only\nbecause it's more readable - not because we're doing anything out of the\nordinary!"),Object(o.b)("p",null,"You could pick any technology here, of course. This works with Swift, ReactJS,\nor Angular (client side) as well as with PHP, Ruby, Python, Java (server side) -\nyou name it! We picked NodeJS + TypeScript because we believe it is the easiest\nto understand, and because JavaScript and NodeJS are universally understood and\neasy to install."),Object(o.b)("p",null,"We don't really know what SecureApp should do one day. But we do know that it\nwill have some type of dashboard and that it needs users, therefore we need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Login"),Object(o.b)("li",{parentName:"ul"},"Logout"),Object(o.b)("li",{parentName:"ul"},"Registration"),Object(o.b)("li",{parentName:"ul"},'Profile management ("update first name", "update avatar ...")'),Object(o.b)("li",{parentName:"ul"},'Credentials Management ("add a new recovery email", "change password", "...")'),Object(o.b)("li",{parentName:"ul"},'Account Recovery ("password reset")'),Object(o.b)("li",{parentName:"ul"},"Two Factor Authentication with Google Authenticator"),Object(o.b)("li",{parentName:"ul"},'"Sign in with Google" and "Sign in with GitHub"')),Object(o.b)("p",null,"and of course:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A dashboard that shows "Hello {{ firstName }} {{ lastName }}, your birthday is\non {{ birthday }}!". It is only visible when the user is signed in!')),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"As you might already know, ORY Kratos is API-only. It does not have a UI or HTML\nTemplating Engine. We will implement all the user-facing UIs (dashboard, login,\nregistration, ...) in our NodeJS SecureApp!"),Object(o.b)("p",null,"To ensure that no one can access the dashboard without prior authentication\n(login), we can use a small piece of code (here ExpressJS) to do that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Import the ORY Kratos SDK. SDKs are available for all popular programming\n// languages!\n//\n// We will add examples for other programming languages here soon!\nimport { KratosPublicSDK } from '@oryd/kratos-client';\n\n// You can use protect as a middleware for expressJS:\n//\n//   import express from 'express'\n//   const app = express()\n//   app.get(\"/dashboard\", needsLogin, dashboard)\n//\nconst needsLogin = (req, res, next) => {\n  new KratosPublicSDK('https://public.ory-kratos')\n    .whoami(req)\n    .then(({ body }) => {\n      req.user = { session: body };\n      next();\n    })\n    .catch(() => {\n      res.redirect('/login');\n    });\n};\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"ORY Kratos is not just an API, it uses cookies, HTTP redirects, Anti-CSRF Tokens\nand more so you don't have to!"))),Object(o.b)("p",null,"Because our SecureApp and ORY Kratos need to share cookies, in order for\nAnti-CSRF Tokens and Login Session to work, we will set up path with forwards\nrequests to ORY Krato's Public API. If a HTTP Request to\n",Object(o.b)("inlineCode",{parentName:"p"},"https://my-secureap/.ory/kratos/public/self-service/browser/flows/login")," is\nmade, we forward (like a proxy) the request to\n",Object(o.b)("inlineCode",{parentName:"p"},"https://public.ory-kratos/self-service/browser/flows/login")," and pipe the\nresponse back to the initial HTTP Request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import express from 'express';\nimport request from 'request';\nconst app = express();\n\nconst pathPrefix = '/.ory/kratos/public';\napp.use(pathPrefix + '/', (req, res) => {\n  const url = 'https://public.ory-kratos' + req.url.replace(pathPrefix, '');\n\n  // Uses the request library to forward the request to ORY Kratos\n  req.pipe(request(url, { followRedirect: false })).pipe(res);\n});\n\n// ...\n// app.get(\"/dashboard\", needsLogin, dashboard)\n// ...\n")),Object(o.b)("p",null,"ORY Kratos does not ship with an administrative user interface. You must\nimplement that yourself or choose the ORY Cloud offering (to be announced). In\nthis quickstart, we will use ORY Kratos CLI (Command Line Interface) to interact\nwith ORY Kratos' Administrative APIs."),Object(o.b)("p",null,"The quickstart also comes with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mailslurper.com"}),"MailSlurper"),", a mock\nSMTP server the demo uses to show how e.g. email verification works."),Object(o.b)("h3",{id:"clone-ory-kratos-and-run-it-in-docker"},"Clone ORY Kratos and run it in Docker"),Object(o.b)("p",null,"To get this example working, you will need Git and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"Docker, and Docker Compose")," installed on\nyour system. No other dependencies are required. Before you start, make sure\nthat Docker has enough disk space."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This tutorial uses Docker-Compose volumes which have reported to run out of disk\nspace. Check the remaining disk space using ",Object(o.b)("inlineCode",{parentName:"p"},"docker system df"),". If the volumes\nare above the 85% threshold,\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/config/pruning/"}),"prune old Docker objects")," before you\nstart!"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you encounter build errors (e.g. network timeout), make sure that the network\nis running correctly and run ",Object(o.b)("inlineCode",{parentName:"p"},"macke docker")," again. If the problem persists, feel\nfree to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/new/choose"}),"open an issue"),"."))),Object(o.b)("p",null,"Let's clone ORY Kratos and run ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"git clone https://github.com/ory/kratos.git\n# or if you have git+ssh set up:\n#  git clone git@github.com:ory/kratos.git\ncd kratos\ngit checkout v0.2.1-alpha.1\nmake quickstart\n\n# or if you don't have make installed:\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n")),Object(o.b)("p",null,"This might take a minute or two. Once the output slows down and logs indicate a\nhealthy system you're ready to roll! A healthy system will show something along\nthe lines of (the order of messages might be reversed):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'kratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the admin httpd on: 0.0.0.0:4434"\nkratos_1                      | time="2020-01-20T14:52:13Z" level=info msg="Starting the public httpd on: 0.0.0.0:4433"\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are two important factors to get a fully functional system:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"You need to make sure that ports ",Object(o.b)("inlineCode",{parentName:"li"},"4455"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4433"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4434"),", ",Object(o.b)("inlineCode",{parentName:"li"},"4436")," >\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://serverfault.com/questions/309052/check-if-port-is-open-or-closed-on-a-linux-server"}),"are free"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure to always use ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1")," as the hostname, never use ",Object(o.b)("inlineCode",{parentName:"li"},"localhost"),"!\nThis is important because browsers treat these two as separate domains and\nwill therefore have issues with setting and using the right cookies.")))),Object(o.b)("p",null,"You might notice that no database is being used in this example. ORY Kratos\nsupports SQLite, PostgreSQL, MySQL, and CockroachDB as database backends. For\nthe quickstart, we're mounting a persistent volume to store the SQLite database\nin. Future guides will explain how to set up a production system!"),Object(o.b)("h3",{id:"network-architecture"},"Network Architecture"),Object(o.b)("p",null,"This demo makes use of several services / Docker Images:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/kratos"}),"ORY Kratos")),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("strong",{parentName:"li"},"SecureApp")," - an\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://github.com/ory/kratos-selfservice-ui-node"}),"example application written in NodeJS"),"\nthat implements the login, registration, logout, ..., and dashboard screen."),Object(o.b)("li",{parentName:"ol"},"An SMTP server with which ORY Kratos can send E-Mails with. We will use\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mailhog/MailHog"}),"MailHog"),", a minimalistic SMTP throaway\nserver with an easy UI.")),Object(o.b)("p",null,"To better understand how everything is wired, let's take a look at the network\nconfiguration. This assumes that you have at least some understanding of how\nDocker (Compose) Networks work:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtTZWN1cmVBcHAgZXhwb3NlZCBhdCA6NDQ1NV0pXG4gICAgU01UUFVJKFtNYWlsU2x1cnBlciBVSSBleHBvc2VkIGF0IDo0NDM2XSlcbmVuZFxuXG5zdWJncmFwaCBkbltcIkludGVybmFsIERvY2tlciBOZXR3b3JrIChpbnRyYW5ldClcIl1cbiAgICBPS1BITi0uLT5TQVxuICAgIFNNVFBVSS0uLT5TTVRQXG4gICAgU0EtLT58UHJveGllcyBVUkxzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIFNBLS0-fFRhbGtzIHRvIGFuZCB2YWxpZGF0ZXMgbG9naW4gc2Vzc2lvbnMgdXNpbmd8T0tcbiAgICBPSy0tPnxTZW5kcyBtYWlsIHZpYXxTTVRQXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIFNBW1wiU2VjdXJlQXBwIChPUlkgS3JhdG9zIFNlbGZTZXJ2aWNlIFVJIE5vZGUgRXhhbXBsZSlcIl1cbiAgICBTTVRQW1wiU01UUCBTZXJ2ZXIgKE1haWxTbHVycGVyKVwiXVxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NjUsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblxuc3ViZ3JhcGggaG5bSG9zdCBOZXR3b3JrXVxuICAgIEJbQnJvd3Nlcl1cbiAgICBCLS0-fENhbiBhY2Nlc3MgVVJMcyB2aWEgMTI3LjAuMC4xOjQ0NTV8T0tQSE5cbiAgICBCLS0-fENhbiBhY2Nlc3MgVUkgdmlhIDEyNy4wLjAuMTo0NDM2fFNNVFBVSVxuICAgIE9LUEhOKFtTZWN1cmVBcHAgZXhwb3NlZCBhdCA6NDQ1NV0pXG4gICAgU01UUFVJKFtNYWlsU2x1cnBlciBVSSBleHBvc2VkIGF0IDo0NDM2XSlcbmVuZFxuXG5zdWJncmFwaCBkbltcIkludGVybmFsIERvY2tlciBOZXR3b3JrIChpbnRyYW5ldClcIl1cbiAgICBPS1BITi0uLT5TQVxuICAgIFNNVFBVSS0uLT5TTVRQXG4gICAgU0EtLT58UHJveGllcyBVUkxzIC8ub3J5L2tyYXRvcy9wdWJsaWMvKiB0b3xPS1xuICAgIFNBLS0-fFRhbGtzIHRvIGFuZCB2YWxpZGF0ZXMgbG9naW4gc2Vzc2lvbnMgdXNpbmd8T0tcbiAgICBPSy0tPnxTZW5kcyBtYWlsIHZpYXxTTVRQXG5cbiAgICBPS1tPUlkgS3JhdG9zXVxuICAgIFNBW1wiU2VjdXJlQXBwIChPUlkgS3JhdG9zIFNlbGZTZXJ2aWNlIFVJIE5vZGUgRXhhbXBsZSlcIl1cbiAgICBTTVRQW1wiU01UUCBTZXJ2ZXIgKE1haWxTbHVycGVyKVwiXVxuZW5kXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoibmV1dHJhbCIsImZsb3djaGFydCI6eyJyYW5rU3BhY2luZyI6NjUsIm5vZGVTcGFjaW5nIjozMCwiY3VydmUiOiJiYXNpcyJ9fSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"User Login and Registration Network Topology"})))),Object(o.b)("p",null,"As already explained, we're proxying requests to ORY Kratos' Public API. We are\ndoing this because that way all requests are going to and coming from the same\nhostname. This avoids common cross-domain issues with cookies."),Object(o.b)("h2",{id:"perform-registration-logout-login"},"Perform registration, logout, login"),Object(o.b)("p",null,"Enough theory, it's time to get this thing going! Let's start by trying to open\nthe dashboard - ",Object(o.b)("strong",{parentName:"p"},"go to\n",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"http://127.0.0.1:4455/dashboard"}),"127.0.0.1:4455/dashboard")),". You will probably\nnotice that you're ending up at the login endpoint:"),Object(o.b)("img",{alt:"Login screen of your secured app",src:Object(i.a)("img/docs/secureapp-login.png")}),Object(o.b)("p",null,"Looking at the network stack, you can see two redirects happening:"),Object(o.b)("img",{alt:"Network trace of your secured app",src:Object(i.a)("img/docs/secureapp-login-ntrace.png")}),Object(o.b)("p",null,"The first redirect from ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/dashboard")," to\n",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login")," is\ninitiated because the browser does not have a valid authentication (login)\nsession yet. The redirect points to one of ORY Krato's APIs used for logging in\nbrowser-based applications. ORY Kratos does some security checks and prepares\nform data and redirects the browser to ",Object(o.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4445/auth/login"),",\nappending a ",Object(o.b)("inlineCode",{parentName:"p"},"?request=...")," query parameter. The endpoint at ",Object(o.b)("inlineCode",{parentName:"p"},"/auth/login")," (which\nbelongs to our SecureApp) then fetches data important for rendering the forms\nfrom ORY Krato's Admin API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/login?request=<request-id>\n{\n    "id": "27aa98bc-a074-418f-96fa-8b8146050209",\n    "expires_at": "2020-01-20T21:10:12.7365393Z",\n    "issued_at": "2020-01-20T21:00:12.7365532Z",\n    "request_url": "http://127.0.0.1:4455/self-service/browser/flows/login",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/login?request=27aa98bc-a074-418f-96fa-8b8146050209",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "Ii8iIEdnn12vVQ2vyz2YaHjmXMUK5eSQgw9pgENGxPjXi1PHC9gOG51x61o2GT9LGvC81ddvmNXYeLvlPxA04g=="\n                    },\n                    {\n                        "name": "identifier",\n                        "type": "text",\n                        "required": true\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"This data is then rendered as an HTML form. This flow also works with Single\nPage Apps (SPA) and Frameworks like Angular or ReactJS. For more details about\nthe specific flows (login, registration, logout, ...), head over to the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/index"}),"concept")," chapter."),Object(o.b)("p",null,'Let\'s move on to the next flow - registration! Click on "Create an account",\nwhich initiates a flow similar to the one we just used:'),Object(o.b)("img",{alt:"Registration screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration.png")}),Object(o.b)("p",null,"The network trace looks familiar by now:"),Object(o.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration-ntrace.png")}),Object(o.b)("p",null,"If we try to sign up using a password like ",Object(o.b)("inlineCode",{parentName:"p"},"123456"),", ORY Krato's password policy\nwill complain:"),Object(o.b)("img",{alt:"Registration with network trace screen of your secured app",src:Object(i.a)("img/docs/secureapp-registration-pwpolicy.png")}),Object(o.b)("p",null,"The error message is coming directly from ORY Krato's API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl http://127.0.0.1:4434/self-service/browser/flows/requests/registration?request=<request-id>\n{\n    "id": "79349cbd-c785-476a-8db8-d0d71c5b003c",\n    "expires_at": "2020-01-20T21:17:00.5077381Z",\n    "issued_at": "2020-01-20T21:07:00.5077527Z",\n    "request_url": "http://127.0.0.1:4455/self-service/browser/flows/registration",\n    "methods": {\n        "password": {\n            "method": "password",\n            "config": {\n                "action": "http://127.0.0.1:4455/.ory/kratos/public/auth/browser/methods/password/registration?request=79349cbd-c785-476a-8db8-d0d71c5b003c",\n                "method": "POST",\n                "fields": [\n                    {\n                        "name": "csrf_token",\n                        "type": "hidden",\n                        "required": true,\n                        "value": "+ZQ8x5cVgdtt4xtPIRJXQPKMVU5c/S2Mj2MuudP32vsMME0g26oQnV/H/brcNvBjkJq1XoF3UcnUFPzcr6Eq4Q=="\n                    },\n                    {\n                        "name": "password",\n                        "type": "password",\n                        "required": true\n                    },\n                    {\n                        "name": "traits.email",\n                        "type": "text",\n                        "value": "hello@ory.sh"\n                    },\n                    {\n                        "name": "traits.full_name",\n                        "type": "text"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"Setting a password that doesn't violate these policies, we will be immediately\nredirected to the Dashboard:"),Object(o.b)("img",{alt:"SecureApp Dashboard",src:Object(i.a)("img/docs/secureapp-dashboard.png")}),Object(o.b)("p",null,'By using "logout" you will be redirected to the log in screen again an will be\nable to use the credentials just set up to log in!'),Object(o.b)("h3",{id:"understanding-how-login-and-registration-works"},"Understanding how Login and Registration works"),Object(o.b)("p",null,"Head over to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/index"}),"Self-Service Flows Chapter")," for a\nin-depth explanation of how the individual flows work."),Object(o.b)("h3",{id:"email-verification"},"Email Verification"),Object(o.b)("p",null,"As you've signed up, an email was sent to the email address you used. Because\nthe quickstart uses a fake SMTP server, the email did not arrive in your inbox.\nYou can retrieve the email however by opening the MailSlurper UI at\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:4436"}),"127.0.0.1:4436"),"."),Object(o.b)("p",null,"You should see something like this:"),Object(o.b)("img",{alt:"User Email Verification",src:Object(i.a)("img/docs/mailslurper-quickstart.png")}),Object(o.b)("p",null,"If not, hard refresh the tab or click on the home icon in the menu bar."),Object(o.b)("p",null,"Next, click the verification link. You will end up at the dashboard, with a\nverified E-Mail Address (check the ",Object(o.b)("inlineCode",{parentName:"p"},"verified")," and ",Object(o.b)("inlineCode",{parentName:"p"},"verified_at")," field in the\nJSON Payload):"),Object(o.b)("img",{alt:"SecureApp Dashboard",src:Object(i.a)("img/docs/secureapp-verified-dashboard.png")}),Object(o.b)("p",null,"To re-request the verification email, fill out the form at\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:4455/verify"}),"127.0.0.1:4455/verify"),"."),Object(o.b)("h4",{id:"configuration-used"},"Configuration Used"),Object(o.b)("p",null,"You can find all configuration files for this quickstart guide in\n",Object(o.b)("inlineCode",{parentName:"p"},"./contrib/quickstart")," and ",Object(o.b)("inlineCode",{parentName:"p"},"./quickstart.yml"),". To understand what each of those\nindividual configuration files are doing, you must consult the other chapters of\nthis documentation."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To get a minimal version of ORY Kratos running, you need to set configuration\nitems ",Object(o.b)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dsn"),". You should also configure\n",Object(o.b)("inlineCode",{parentName:"p"},"urls.*_ui")," because your users will end up at fallbacks otherwise."))),Object(o.b)("p",null,"In the future, this guide will support more use cases such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use GitHub to login in and sign up")),Object(o.b)("h2",{id:"cleaning-up-docker"},"Cleaning up Docker"),Object(o.b)("p",null,"To clean everything up, you need to bring down the Docker Compose environment\nand remove all mounted volumes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -f -s -v\n")))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(h,s({ref:t},l,{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},275:function(e,t,n){"use strict";var a=n(0),r=n(52);t.a=function(){return Object(a.useContext)(r.a)}},276:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(277);var a=n(275);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},277:function(e,t,n){"use strict";var a=n(12),r=n(25),o=n(278),i="".startsWith;a(a.P+a.F*n(279)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},278:function(e,t,n){var a=n(76),r=n(26);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},279:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);