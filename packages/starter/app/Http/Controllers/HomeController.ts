import { Get, Render, Controller, Req } from 'routing-controllers'
import { Service } from 'typedi'
import { getLocale } from 'i18n';
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
}
