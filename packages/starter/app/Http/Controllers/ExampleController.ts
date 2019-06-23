import { Controller, Post, Ctx, Get, Req } from 'routing-controllers'
import { Service } from 'typedi'
import { Context, Request } from 'koa'
import getRawBody from 'raw-body'

@Controller()
@Service()
export class ExampleController
{
    @Get('/test')
    async store(@Req() req: Request) {
        return {
            href: req.href,
            url: req.href.replace(`?${req.querystring}`, ''),
            headers: req.header
        }
    }
}
