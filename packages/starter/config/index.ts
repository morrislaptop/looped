import { config } from "dotenv"

config({ path: __dirname + `/../.env.${process.env.NODE_ENV}` })
config()

const app = {
    port: process.env.PORT || '3000',
    name: process.env.APP_NAME || 'Looped'
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
    }
}

const cache = {
    driver: process.env.CACHE_DRIVER,
}

export {
    app,
    services,
    cache
}
