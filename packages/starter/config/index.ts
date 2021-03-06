import { config } from "dotenv"
import { ConnectionOptions } from "typeorm";

config({ path: __dirname + `/../.env.${process.env.NODE_ENV}` })
config()

const app = {
    port: process.env.PORT || '3000',
    name: process.env.APP_NAME || 'Looped',
    env: process.env.APP_ENV || 'local',
    debug: process.env.APP_DEBUG === 'true',
    locale: 'en',
}

const services = {
    github: {
        token: process.env.GITHUB_ACCESS_TOKEN,
    },
    netlify: {
        token: process.env.NETLIFY_ACCESS_TOKEN,
    },
    heroku: {
        token: process.env.HEROKU_ACCESS_TOKEN,
    },
    s3: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    slack: {
        log_webhook_url: 'https://hooks.slack.com/services/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'
    }
}

const database: ConnectionOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL || 'postgres://127.0.0.1',
    entities: ['app/*.ts'],
    synchronize: true,
}

const cache = {
    driver: process.env.CACHE_DRIVER,
}

export {
    app,
    services,
    cache,
    database,
}
