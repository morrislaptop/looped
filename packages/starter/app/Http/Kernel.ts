import { useContainer, useExpressServer } from 'routing-controllers';
import { controllers, routes } from '../../routes'
import * as config from '../../config'
import Container from 'typedi'
import express, { Express } from 'express'
import Limiter from 'express-rate-limit'
import { CustomErrorHandler } from '../Exceptions/Handler'

export function handleWithExpress(container: typeof Container)
{
    // creates express app, registers all controller routes and returns you express app instance
    useContainer(container);

    const server = express()

    server.use(new Limiter({ windowMs: 15 * 60 * 1000, max: 100 }))

    useExpressServer(server, {
        controllers,
        middlewares: [
            CustomErrorHandler,
        ],
        defaultErrorHandler: false,
        cors: true,
    })

    server.set('trust proxy', true)
    server.set('views', __dirname + '/../../resources/views')
    server.set('view engine', 'ejs')

    server.use(express.static('public'))

    for (const path in routes) {
        server.use(path, routes[path])
    }

    return server
}
