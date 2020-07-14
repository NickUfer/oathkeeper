(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return h})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(9),s=(t(0),t(244)),i=t(246),r=(t(258),t(262)),c=t(263),d={id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},l={id:"guides/consent",isDocsHomePage:!1,title:"Implementing the Consent Endpoint & UI",description:"Please read the Consent Flow Documentation first!",source:"@site/docs/guides/consent.mdx",permalink:"/hydra/docs/next/guides/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/consent.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594381209,sidebar_label:"Consent Endpoint",sidebar:"docs",previous:{title:"Implementing the Login Endpoint",permalink:"/hydra/docs/next/guides/login"},next:{title:"Implementing the Logout Endpoint & UI",permalink:"/hydra/docs/next/guides/logout"},latestVersionMainDocPermalink:"/hydra/docs"},h=[{value:"Implementing the Consent HTML Form",id:"implementing-the-consent-html-form",children:[]},{value:"Accepting the Consent Request",id:"accepting-the-consent-request",children:[]},{value:"Rejecting the Consent Request",id:"rejecting-the-consent-request",children:[]},{value:"Complete Enpdoint",id:"complete-enpdoint",children:[]}],b={rightToc:h};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Please read the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/consent"}),"Consent Flow Documentation")," first!"))),Object(s.b)("p",null,"In this document, you will learn how to implement the Consent Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(s.b)("h2",{id:"implementing-the-consent-html-form"},"Implementing the Consent HTML Form"),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"The Consent HTML Form cannot be a Signle Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(s.b)(r.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("img",{src:Object(i.a)("/img/docs/consent-endpoint.png")})),Object(s.b)(c.a,{value:"node",mdxType:"TabItem"},Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Check out our\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/consent.ts"',title:'"routes/consent.ts"'}),"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@oryd/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/get', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the consent request from ORY hydraAdmin.\n  const challenge = String(query.consent_challenge)\n\n  hydraAdmin\n    .getConsentRequest(challenge)\n    // This will be called if the HTTP request was successful\n    .then(({ body }) => {\n      // If a user has granted this application the requested scope, hydra will tell us to not show the UI.\n      if (body.skip) {\n        // You can apply logic here, for example grant another scope, or do whatever...\n        // ...\n\n        // Now it's time to grant the consent request. You could also deny the request if something went terribly wrong\n        return hydraAdmin\n          .acceptConsentRequest(challenge, {\n            // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes\n            // are requested accidentally.\n            grantScope: body.requestedScope,\n\n            // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.\n            grantAccessTokenAudience: body.requestedAccessTokenAudience,\n\n            // The session allows us to set session data for id and access tokens\n            session: {\n              // This data will be available when introspecting the token. Try to avoid sensitive information here,\n              // unless you limit who can introspect tokens.\n              // accessToken: { foo: 'bar' },\n              // This data will be available in the ID token.\n              // idToken: { baz: 'bar' },\n            }\n          })\n          .then(({ body }) => {\n            // All we need to do now is to redirect the user back to hydra!\n            res.redirect(String(body.redirectTo))\n          })\n      }\n\n      // If consent can't be skipped we MUST show the consent UI.\n      res.render('consent', {\n        csrfToken: req.csrfToken(),\n        challenge: challenge,\n        // We have a bunch of data available from the response, check out the API docs to find what these values mean\n        // and what additional data you have available.\n        requested_scope: body.requestedScope,\n        user: body.subject,\n        client: body.client\n      })\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n"))),Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form action="/consent" method="POST">\n  <input type="hidden" name="challenge" value="#{ challenge }" />\n  <input type="hidden" name="_csrf" value="#{ csrfToken }" />\n  <p>\n    Hi #{ user }, application <strong>#{ client.client_name }</strong> wants\n    access resources on your behalf and to:\n  </p>\n\n  \x3c!--\n    In a real application, you would iterate over all the scopes the OAuth2 Client has requested here.\n\n    For the sake of simplicity, we\'ll just show the two scopes `openid` and `offline` here:\n    --\x3e\n  <input type="checkbox" id="openid" value="openid" name="grant_scope" />\n  <label for="openid">openid</label><br />\n\n  <input type="checkbox" id="offline" value="offline" name="grant_scope" />\n  <label for="offline">offline</label><br />\n\n  <p>\n    Do you want to be asked next time when this application wants to access your\n    data? The application will not be able to ask for more permissions without\n    your consent.\n  </p>\n\n  <input type="checkbox" id="remember" name="remember" value="1" />\n  <label for="remember">Do not ask me again</label><br />\n\n  <input type="submit" id="accept" name="submit" value="Allow access" />\n  <input type="submit" id="reject" name="submit" value="Deny access" />\n</form>\n')))),Object(s.b)("h2",{id:"accepting-the-consent-request"},"Accepting the Consent Request"),Object(s.b)(r.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"node",mdxType:"TabItem"},Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Check out our\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"hydraAdmin\n  .acceptConsentRequest(challenge, {\n    // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes\n    // are requested accidentally.\n    grantScope: ['email', 'openid'],\n\n    // The session allows us to set session data for id and access tokens\n    session: {\n      // This data will be available when introspecting the token. Try to avoid sensitive information here,\n      // unless you limit who can introspect tokens.\n      access_token: {\n        // foo: 'bar'\n      },\n\n      // This data will be available in the ID token.\n      id_token: {\n        // baz: 'bar'\n      }\n    },\n\n    // This tells hydra to remember this consent request and allow the same client to request the same\n    // scopes from the same user, without showing the UI, in the future.\n    remember: true,\n\n    // When this \"remember\" sesion expires, in seconds. Set this to 0 so it will never expire.\n    rememberFor: 3600\n  })\n  .then(({ body }) => {\n    // All we need to do now is to redirect the user back to hydra!\n    res.redirect(String(body.redirectTo))\n  })\n// This will handle any error that happens when making HTTP calls to hydra\n// .catch(next);\n")))),Object(s.b)("h2",{id:"rejecting-the-consent-request"},"Rejecting the Consent Request"),Object(s.b)(r.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"node",mdxType:"TabItem"},Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Check out our\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"hydraAdmin\n  .rejectConsentRequest(challenge, {\n    error: 'access_denied',\n    errorDescription: 'The resource owner denied the request'\n  })\n  .then(({ body }) => {\n    // All we need to do now is to redirect the browser back to hydra!\n    res.redirect(String(body.redirectTo))\n  })\n// This will handle any error that happens when making HTTP calls to hydra\n// .catch(next);\n")))),Object(s.b)("h2",{id:"complete-enpdoint"},"Complete Enpdoint"),Object(s.b)(r.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"node",mdxType:"TabItem"},Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Check out our\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"reference implementation")," of\nthis endpoint!"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="routes/consent.ts"',title:'"routes/consent.ts"'}),"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/consent', csrfProtection, (req, res, next) => {\n  // The challenge is now a hidden input field, so let's take it from the request body instead\n  const challenge = req.body.challenge;\n\n  // Let's see if the user decided to accept or reject the consent request..\n  if (req.body.submit !== 'Allow access') {\n    // Looks like the consent request was denied by the user\n    return hydraAdmin.rejectConsentRequest(challenge, {\n      error: 'access_denied',\n      errorDescription: 'The resource owner denied the request'\n    }).then(({body}) => {\n        // All we need to do now is to redirect the browser back to hydra!\n        res.redirect(String(body.redirectTo));\n      })\n      // This will handle any error that happens when making HTTP calls to hydra\n      .catch(next);\n  }\n\n  // Helps with form arrays\n  let grantScope = req.body.grant_scope\n  if (!Array.isArray(grantScope)) {\n    grantScope = [grantScope]\n  }\n\n  // The session allows us to set session data for id and access tokens\n  let session = {\n    // This data will be available when introspecting the token. Try to avoid sensitive information here,\n    // unless you limit who can introspect tokens.\n    accessToken: {\n      foo: 'bar'\n    },\n\n    // This data will be available in the ID token.\n    idToken: {\n      // baz: 'bar'\n    },\n  }\n\n  // Here is also the place to add data to the ID or access token. For example,\n  // if the scope 'profile' is added, add the family and given name to the ID Token claims:\n  if (grantScope.indexOf('profile')) {\n    session.idToken.family_name = 'Doe'\n    session.idToken.given_name = 'John'\n  }\n\n  // Let's fetch the consent request again to be able to set `grantAccessTokenAudience` properly.\n  hydraAdmin.getConsentRequest(challenge)\n    // This will be called if the HTTP request was successful\n    .then(({body}) => {\n      return hydraAdmin.acceptConsentRequest(challenge, {\n        // We can grant all scopes that have been requested - hydra already checked for us that no additional scopes\n        // are requested accidentally.\n        grantScope: grantScope,\n\n        // The session allows us to set session data for id and access tokens\n        session: session,\n\n        // ORY Hydra checks if requested audiences are allowed by the client, so we can simply echo this.\n        grantAccessTokenAudience: body.`requestedAccessTokenAudience`,\n\n        // This tells hydra to remember this consent request and allow the same client to request the same\n        // scopes from the same user, without showing the UI, in the future.\n        remember: Boolean(req.body.remember),\n\n        // When this \"remember\" sesion expires, in seconds. Set this to 0 so it will never expire.\n        rememberFor: 3600,\n      }).then(({body}) => {\n        // All we need to do now is to redirect the user back to hydra!\n        res.redirect(String(body.redirectTo));\n      })\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next);\n});\n")))))}p.isMDXComponent=!0},258:function(e,n,t){"use strict";t(269),t(20);var a=t(0),o=t.n(a),s=t(276),i=t.n(s),r=t(131),c=t.n(r),d=t(252),l=t.n(d);i.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});n.a=function(e){var n,t=e.chart,s=Object(a.useState)(!1),r=s[0],d=s[1],h=Object(a.useState)(void 0),b=h[0],p=h[1],m=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],u=function(){return d(!r)};return Object(a.useEffect)((function(){i.a.render(m,t,(function(e){p(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:u,className:l()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:b}}),o.a.createElement("div",{onClick:u,className:l()(c.a.overlay,c.a.pointer,c.a.graph,(n={},n[c.a.visible]=r,n))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:l()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:b}})))}},285:function(e,n,t){var a={"./locale":256,"./locale.js":256};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=285}}]);