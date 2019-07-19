import { Post, Body, JsonController, Get } from 'routing-controllers'
import { Service } from 'typedi'
import { CreatePostRequest } from '../Requests/CreatePostRequest';
import { validate } from 'indicative/validator'
import { abort } from '@looped-ts/support'

@JsonController()
@Service()
export class PostController
{
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
