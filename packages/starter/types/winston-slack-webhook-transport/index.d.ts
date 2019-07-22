// Type definitions for winston-slack-webhook-transport 1.1
// Project: https://github.com/TheAppleFreak/winston-slack-webhook-transport#readme
// Definitions by: Craig Morris <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Transport from 'winston-transport'

interface SlackHookOptions extends Transport.TransportStreamOptions {
    webhookUrl: string,
}

export interface SlackHookInstance extends Transport {
    new(options: SlackHookOptions): SlackHookInstance
}

declare let SlackHook: SlackHookInstance

export default SlackHook
