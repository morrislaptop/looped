import { Get, Render, Controller } from 'routing-controllers'
import { Service } from 'typedi'

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
