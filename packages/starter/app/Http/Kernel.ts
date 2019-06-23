import { createKoaServer, useContainer } from 'routing-controllers';
import { controllers } from '../../routes/controllers'
import Koa from 'koa';
import { TrimStringsMiddleware, ConvertEmptyStringsToNull } from '@looped-ts/foundation';
import * as config from '../../config'
import Container from 'typedi';

export function handle(container: typeof Container)
{
    // creates express app, registers all controller routes and returns you express app instance
    useContainer(container);

    const app: Koa = createKoaServer({
        controllers,
        middlewares: [
            TrimStringsMiddleware,
            ConvertEmptyStringsToNull,
        ]
    })

    app.proxy = true
    // app.set('views', __dirname + '/../resources/views');
    // app.set('view engine', 'ejs')
    // app.use(express.static('public'))

    return app
}
