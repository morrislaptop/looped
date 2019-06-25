import { createKoaServer, useContainer } from 'routing-controllers';
import { controllers, routes, middlewares } from '../../routes'
import Koa from 'koa';
import * as config from '../../config'
import Container from 'typedi';

export function handle(container: typeof Container)
{
    // creates express app, registers all controller routes and returns you express app instance
    useContainer(container);

    const koa: Koa = createKoaServer({
        controllers,
        middlewares,
    })

    koa.use(routes)

    koa.proxy = true
    // app.set('views', __dirname + '/../resources/views');
    // app.set('view engine', 'ejs')
    // app.use(express.static('public'))

    return koa
}
