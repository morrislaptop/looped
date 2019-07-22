import { Container } from 'typedi'
import * as config from '../../config'
import { createLogger, Logger, transports, format } from 'winston';



export class LoggingServiceProvider
{
    /**
     * Logs to the console in the format
     *
     * [2019-07-22 04:53:06] local.INFO: Hello {"world":true}
     */
    async register() {
        const logger = createLogger({
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
                format.simple(),
                format.printf((info) => {
                    const { timestamp, level, message, ...rest } = info
                    return `[${info.timestamp}] ${config.app.env}.${info.level.toUpperCase()}: ${info.message} ${JSON.stringify(rest)}`
                }),
            ),
            transports: [
                new transports.Console()
            ]
        })

        Container.set('Logger', logger)
    }

    async boot() { }
}
