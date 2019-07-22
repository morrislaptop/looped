import { Post, Body, JsonController, Get } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { CreatePostRequest } from '../Requests/CreatePostRequest';
import { validate } from 'indicative/validator'
import { abort } from '@looped-ts/support'
import { Logger } from 'winston';

@JsonController()
@Service()
export class PostController
{
    @Inject('Logger')
    logger: Logger

    @Get('/')
    async home() {
        this.logger.info('Hi', { world: true })

        return 'Hello World'
    }

    @Post('/posts')
    async store(@Body() post: any) {
        await validate(post, { password: 'required|min:4' })

        return {
            title: post.title
        }
    }

    @Post('/posts2')
    async store2(@Body() post: CreatePostRequest) {
        return {
            title: post.title
        }
    }

    @Get('/abort')
    async abort() {
        abort(419, 'Im a teapot')

        return 'hello world';
    }
}
