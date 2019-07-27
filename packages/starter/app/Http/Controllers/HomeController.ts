import { Get, Render, Controller, CurrentUser, Req } from 'routing-controllers'
import { Service } from 'typedi'
import { getLocale } from 'i18n';
import { User } from '../../User';
import { Request } from 'express';

@Controller()
@Service()
export class HomeController
{
    @Get('/')
    @Render('welcome.ejs')
    async home() {
        return { role: 'admin', user: { name: 'Samantha' } }
    }

    @Get('/user')
    async user(@CurrentUser({ required: true }) user: User, @Req() request: Request) {
        return { user }
    }
}
