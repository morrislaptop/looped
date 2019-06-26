import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers';
import { controllers, routes, middlewares } from '../../routes'
import * as config from '../../config'
import Container from 'typedi'
import express, { Express } from 'express'

export function handleWithExpress(container: typeof Container)
{
    // creates express app, registers all controller routes and returns you express app instance
    useContainer(container);

    const server: Express = createExpressServer({
        controllers,
        middlewares,
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
