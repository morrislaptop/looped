import { JsonController, Get } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { Logger } from 'winston';

@JsonController()
@Service()
export class PostController
{
    @Inject('Logger')
    logger: Logger

    @Get('/')
    async home() {
        this.logger.info('Showing the homepage')

        return 'Hello World'
    }
}
