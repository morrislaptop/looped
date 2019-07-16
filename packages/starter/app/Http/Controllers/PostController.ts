import { Post, Body, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
import { validate } from 'indicative/validator'

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
}
