import { createKoaServer, useContainer } from 'routing-controllers';
import { controllers, routes, middlewares } from '../../routes'
import Koa from 'koa';
import * as config from '../../config'
import Container from 'typedi'
import views from 'koa-views'
import serve from 'koa-static'

export function handle(container: typeof Container)
{
    // creates express app, registers all controller routes and returns you express app instance
    useContainer(container);

    const koa: Koa = createKoaServer({
        controllers,
        middlewares,
    })

    koa.proxy = true
    koa.use(routes)
    koa.use(views(__dirname + '/../../resources/views', { map: { ejs: 'ejs' } } ))
    koa.use(serve('public'))

    return koa
}
