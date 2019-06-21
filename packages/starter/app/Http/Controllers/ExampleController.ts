import { Controller, Get } from 'routing-controllers'
import { Inject, Service } from 'typedi'

@Controller()
@Service()
export class ExampleController
{
    /**
     * @todo nly works for the memory cache driver
     */
    @Get("/")
    async home()
    {
        return 'Hello World'
    }
}
