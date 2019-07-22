import { Container } from 'typedi'
import * as config from '../../config'
import { createLogger, Logger, transports, format } from 'winston';
import SlackHook from "winston-slack-webhook-transport";
import { logFormat } from '@looped-ts/support';

export class LoggingServiceProvider
{
    /**
     * Logs to the console in the format
     *
     * [2019-07-22 04:53:06] local.INFO: Hello {"world":true}
     */
    async register() {
        const logger = createLogger({
            format: logFormat(config.app.env),
            transports: [
                new transports.Console(),
                new SlackHook({
                    webhookUrl: config.services.slack.log_webhook_url,
                    level: 'error',
                }),
            ]
        })

        Container.set('Logger', logger)
    }

    async boot() { }
}
