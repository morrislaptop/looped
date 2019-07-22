# Logging

## Introduction

To help you learn more about what's happening within your application, Looped provides robust logging services that allow you to log messages to files, the system error log, and even to Slack to notify your entire team.

Under the hood, Looped utilizes the [Winston](https://github.com/winstonjs/winston) library, which provides support for a variety of powerful log transports. Looped makes it a cinch to configure these handlers, allowing you to mix and match them to customize your application's log handling.

## Configuration

All of the configuration for your application's logging system is housed in the `app/Providers/LoggingServiceProvider.ts` file. This file allows you to configure your application's log transports, so be sure to review each of the available transports and their options. We'll review a few common options below.

### Configuring Mutliple Transports

To illustrate how to use transports, let's take a look at an example configuration that you might see in a production application:

```typescript
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
```

Let's dissect this configuration. First, notice our `transports` array has two transports configured: `Console` and `SlackHook`. So, when logging messages, both of these transports will have the opportunity to log the message.

> Check out the types directory for an example of how to include types for a package where types aren't available.

#### Log Levels

Take note of the `level` configuration option present on the `slack` transport in the example above. This option determines the minimum "level" a message must be in order to be logged by the transport. Winston, which powers Looped's logging services, offers all of the log levels defined in the [RFC 5424 specification](https://tools.ietf.org/html/rfc5424): **emergency**, **alert**, **critical**, **error**, **warning**, **notice**, **info**, and **debug**.

So, imagine we log a message using the `debug` method:

```typescript
this.logger.debug('An informational message.');
```

Given our configuration, the `console` transport will write the message to the system console; however, since the error message is not `error` or above, it will not be sent to Slack. However, if we log an `emergency` message, it will be sent to both the system log and Slack since the `emergency` level is above our minimum level threshold for both channels:

```typescript
this.logger.emerg('The system is down!');
```

## Writing Log Messages

You may write information to the logs using the `Logger` instance from the Container. As previously mentioned, the logger provides the eight logging levels defined in the [RFC 5424 specification](https://tools.ietf.org/html/rfc5424): **emergency**, **alert**, **critical**, **error**, **warning**, **notice**, **info** and **debug**:

```typescript
logger.emerg(message);
logger.alert(message);
logger.crit(message);
logger.error(message);
logger.warning(message);
logger.notice(message);
logger.info(message);
logger.debug(message);
```

So, you may call any of these methods to log a message for the corresponding level. By default, the message will be written to the default log channel as configured by your `config/logging.php` configuration file:

```typescript
import { JsonController, Get } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { Logger } from 'winston';

@JsonController()
@Service()
export class PostController
{
    @Inject('Logger')
    logger: Logger

    @Get('/')
    async home() {
        this.logger.info('Showing the homepage')

        return 'Hello World'
    }
}
```

#### Contextual Information

An array of contextual data may also be passed to the log methods. This contextual data will be formatted and displayed with the log message:

```typescript
this.logger.info('User failed to login.', { id: user.id })
```
