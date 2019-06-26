import { Controller, Post, Ctx, Get, Req, Render } from 'routing-controllers'
import Container, { Service } from 'typedi'
import { Context, Request } from 'koa'
import getRawBody from 'raw-body'
import { User } from '../../User';

@Controller()
@Service()
export class ExampleController
{
    @Get('/')
    @Render("index.ejs")
    async index(@Req() req: Request) {
        return {
            hello: 'Looped',
        }
    }

    @Get('/hello')
    @Render("hello.ejs")
    async hello(@Req() req: Request) {
        return 'Hello Controller'
    }

    @Post('/')
    async store() {
        const user = new User()

        user.firstName = 'Craig'
        user.lastName = 'Morris'
        user.age = 33

        await user.save()

        return user
    }
}
