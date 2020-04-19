(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return _}));var o=t(1),a=t(9),r=(t(0),t(215)),i={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1587302185,sidebar:"docs",previous:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/next/guides/zero-trust-iap-proxy-identity-access-proxy"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},u=[],l={rightToc:u};function _(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# DSN is used to specify the database credentials as a connection URI.\n#\n# Examples:\n# - "postgres://user:\n#   password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n#   4"\n# - mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n# - cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n# - sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: https://zVbTRNDDXbeLTxSPtVChpgZagxnMVHTMH.flCWHzRIAQT.s95BMKdBKQno,RgjTVmDfYAiuw7HXU\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - 59316544.56863704\n      - false\n      - null\n      - 97130208.98696202\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: http://ATpwxsrZtnh.dzhqoxTJemHX,77aoNa0X8,ICDAvTtY+sFYnhHEMaaWfBVbBm9nybDsUCWRw\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: false\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: ut sit amet\n            provider: google\n            client_id: do irure cupidatat Excepteur pariatur\n            client_secret: eiusmod fugiat laborum\n            schema_url: http://PApDPukzsQNpFtrUCynkS.pjmvPVGYiqMLjPoFMjpvq1P1LZuSINteg59,MH8c+qJD0DKZeFlulEsrv\n            issuer_url: http://wGijKgXCxGXFeoNKsjAv.wvRxHUQZfpe+L\n            auth_url: http://mDuzKBVpMkhJVbjNGRHFoaJQcP.tislCaX+H3K-\n            token_url: http://EvCEhzxQmsvEfDSiRFwbXYgHXBLThSgo.ziXpKti36N-uS6m895px0r9msaN.X-LLp\n            scope:\n              - non\n              - amet ut nulla occaecat proident\n              - in occaecat labore consectetur\n              - dolore\n              - in in cillum officia\n          - id: aliqua quis consectetur magna\n            provider: generic\n            client_id: sint et\n            client_secret: ipsum officia ad in qui\n            schema_url: http://AgokHOLmiWlMJpoMW.smw8gGYV\n            issuer_url: https://tsmEZQfKUWuXpJgYlBjRVIsmqjCvxJWhQ.udhjE8GNz2rmnStif-z,CXVuylxdzw6UW479uPL,87EB-KzEswa2NmPbxsEx,M\n            auth_url: http://RSkEBuwqf.izhuYGQ7d+.3LpGuZuyVNK.vQ6wNU6PiHg7-ZtvMvEof3LxcDIJY\n            token_url: https://rPxvCzwVqmFFVhDomyo.rpthiUHnkgOEXxQE9ihLjMADUemJOqcG-R1zsdHEg9miWNKFokkMoiMpD4\n            scope:\n              - consectetur laborum Duis\n              - aliqua aliquip Excepteur\n          - id: Lorem ea consectetur veniam sed\n            provider: generic\n            client_id: ut amet\n            client_secret: aliqua nulla dolore consectetur dolor\n            schema_url: https://MxLtdNIgxqXhHcj.mrzRoobXHk.5I6ZgrQEymkVShmJXRF-c8teAWCm9FK6gsxzxdl,6XIs38IZwMx8QbjH.\n            issuer_url: https://MpbjdSeQhw.nnfpTmgNEftPBYy6SeXF4q5KnnHSlX3c\n            auth_url: http://SfYhEIoFfMD.akbLDhHC4OSDMW1hML-6pDGbJz75aTJ,DcKN\n            token_url: http://jQAF.bbhGfnX7s-FfIOo7CX,\n            scope:\n              - Ut irure nostrud\n              - nostrud irure cillum Excepteur aliquip\n              - Ut ea ad enim dolor\n              - deserunt culpa\n          - id: do Duis anim eu\n            provider: generic\n            client_id: aute sit\n            client_secret: quis in\n            schema_url: http://CXCkD.csumUfyxO9.9g15K+S5F2tKRUHAu3FjfqUj51-mTH35NLh9wiT\n            issuer_url: http://uPRZcFHLKosZFxVhSqCfhTMVHUPtec.kdwdmAQ31Wv-cm0qW1qmZlyhbM3k3.QTBXa5SaFT.cwSDjJXphC4BSymM8xw07-1BV\n            auth_url: https://FKFUPrSodspyIoNziMIGlKCKBaDnkrjw.khvZ3UqD2GSI5Kfftdg.IrNrCsRUYmFuUAFshnRDlemNKRGv\n            token_url: https://iphyefIKIlUrrH.jxulfkeT6cqkFDp.4YcWNgPkddFnfCMwUqkZhQast7Z.Fx5IKz\n            scope:\n              - ipsum\n              - Ut aliqua proident\n              - et nostrud consequat anim est\n\n  ## settings ##\n  #\n  settings:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 674443h\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 2755932us\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n      ## profile ##\n      #\n      profile:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 358682447ms\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 512556h\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 99us\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: https://T.tdzZCCfL5nu\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: http://ZLgbEhxkLGetrlpdSpEWx.dumdWFRR5md9D-PYCxIM9tFu7LIky9iksyknNbHq\n            allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 61ms\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: https://FpnSZeSfI.fdaROzrZ2oy.gVu6u,KxOWf,BSA,,\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: https://YZpIuKwZMqJuT.tsBxbHWerS2VDgsWGx9cSWQLVQQgGMVJ9idKAscl\n            allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: redirect\n            config:\n              default_redirect_url: https://smB.iceiWc2RBOWdVoA5-T10sw2MlZf6ixEumLSi6L4nPoWBtL8epzLvR1IaG\n              allow_user_defined_redirect: false\n          - hook: session\n          - hook: verify\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: redirect\n            config:\n              default_redirect_url: http://ZLaEmfJTcbOGLwgeudBPJBfp.ualo5A8P7-55v9GQMw7hiQY4jXlkLqeWpSW-5mwOar.\n              allow_user_defined_redirect: true\n          - hook: session\n          - hook: redirect\n            config:\n              default_redirect_url: https://ILFpVtsjQ.oesnd7KaS\n              allow_user_defined_redirect: true\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server. Use the query parameter to allow (`?skip_ssl_verify=true`) or disallow (`?skip_ssl_verify=false`) self-signed TLS certificates. Please keep in mind that any host other than localhost / 127.0.0.1 must use smtp over TLS (smtps) or the connection will not be possible.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: qrknrrJlzg-U57T@CqcjSTKXSWGGNvVFzwmrsOwhpY.luo\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: irure commodo\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: in dolor\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## Settings UI URL ##\n  #\n  # URL where the Settings UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/user/settings\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_SETTINGS_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_SETTINGS_UI=<value>\n  #\n  settings_ui: https://my-app.com/user/settings\n\n  ## Login UI URL ##\n  #\n  # URL where the Login UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/login\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: https://my-app.com/login\n\n  ## Registration UI URL ##\n  #\n  # URL where the Registration UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/signup\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: https://my-app.com/signup\n\n  ## ORY Kratos Error UI URL ##\n  #\n  # URL where the ORY Kratos Error UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/kratos-error\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://my-app.com/kratos-error\n\n  ## Verify UI URL ##\n  #\n  # URL where the ORY Verify UI is hosted. This is the page where users activate and / or verify their email or telephone number. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/verify\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://my-app.com/verify\n\n  ## Default Return To URL ##\n  #\n  # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n  #\n  # Examples:\n  # - https://my-app.com/dashboard\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://my-app.com/dashboard\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Examples:\n    # - https://my-app.com/.ory/kratos/public\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://my-app.com/.ory/kratos/public\n\n    ## admin ##\n    #\n    # Examples:\n    # - https://kratos.private-network:4434/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://kratos.private-network:4434/\n\n  ## Multi-Factor UI URL ##\n  #\n  # URL where the Multi-Factor UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/login/mfa\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: https://my-app.com/login/mfa\n\n  ## Whitelisted Return To URLs ##\n  #\n  # List of URLs that are allowed to be redirected to. A redirection request is made by appending `?return_to=...` to Login, Registration, and other self-service flows.\n  #\n  # Examples:\n  # - https://app.my-app.com/dashboard\n  # - https://www.my-app.com/\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  #\n  whitelisted_return_to_urls: https://www.my-app.com/\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: warning\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - sed exercitation amet consequat\n    - irure in nisi ad id\n    - do elit sintdolor nisi tempor in dolore\n    - temporcillum ipsum consequat culpa\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 4574197\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 29875709\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 20161301\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 45206675\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 29116833\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: None\n')))}_.isMDXComponent=!0},215:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return S}));var o=t(0),a=t.n(o);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),_=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},m=function(n){var e=_(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},c=Object(o.forwardRef)((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),m=_(t),c=o,S=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return t?a.a.createElement(S,s({ref:e},l,{components:t})):a.a.createElement(S,s({ref:e},l))}));function S(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);