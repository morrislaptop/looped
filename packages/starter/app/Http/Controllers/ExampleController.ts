import { Controller, Post, Ctx, Get, Req } from 'routing-controllers'
import Container, { Service } from 'typedi'
import { Context, Request } from 'koa'
import getRawBody from 'raw-body'

@Controller()
@Service()
export class ExampleController
{
    @Get('/')
    async store(@Req() req: Request) {
        return 'Hello'
    }
}
