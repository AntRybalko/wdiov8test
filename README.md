
### Run instructions

1. `npm i`
2. `npm run test-local` - for local running in order to generate Allure report
3. `npm run test-browserstack` - for running on BS (please add you private keys inside `wdio.browserstack.conf.ts` config)
4. `npm run allure-report` - generation of the Allure report

`wdio.local.conf.ts` config contains Multiremote capabilities for Chrome Browser for local runs
`wdio.browserstack.conf.ts` config contains Multiremote capabilities for runs on BS

Main issues are:
1. Screenshots on failure are not attached to Allure report in case of Multiremote capabilities
2. BrowserStack Observability report is empty in case of Multiremote capabilities

For run on BS you need to set the following 2 envs:
1. BROWSERSTACK_USERNAME
2. BROWSERSTACK_ACCESS_KEY
