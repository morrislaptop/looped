import { config } from "dotenv"

config({ path: __dirname + `/../.env.${process.env.NODE_ENV}` })
config()

const backend = process.env.BACKEND_REPOS!.split(',')
const frontend = process.env.FRONTEND_REPOS!.split(',')
const repos = backend.concat(frontend)

const app = {
    backend,
    frontend,
    repos,
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
