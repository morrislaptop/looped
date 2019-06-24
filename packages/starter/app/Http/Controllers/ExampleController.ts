import { Controller, Post, Ctx, Get, Req } from 'routing-controllers'
import Container, { Service } from 'typedi'
import { Context, Request } from 'koa'
import getRawBody from 'raw-body'
import { User } from '../../User';

@Controller()
@Service()
export class ExampleController
{
    @Get('/')
    async index(@Req() req: Request) {
        return 'Hello'
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
