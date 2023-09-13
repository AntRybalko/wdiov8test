import { config as sharedConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.BROWSERSTACK_USERNAME,
        key: process.env.BROWSERSTACK_ACCESS_KEY,
        services:
            [
                ['browserstack', {
                    testObservability: true,
                    testObservabilityOptions: {
                        projectName: 'Test Demo',
                        buildName: `Dummy Build`,
                        buildTag: `Test Tag`,
                    },
                    buildIdentifier: 'Test Build',
                },
                    'shared-store',
                ],
            ],
        capabilities: {
            myChromeDriver: {
                maxInstances: 5,
                browserName: 'chrome',
                browserVersion: 'latest',
                platformName: 'Windows 10',
                'goog:chromeOptions': {
                    //headless: true
                }
            }
        }
    }
}
