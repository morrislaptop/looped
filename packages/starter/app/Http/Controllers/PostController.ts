import { Post, Body, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
import { CreatePostRequest } from '../Requests/CreatePostRequest';

@JsonController()
@Service()
export class PostController
{
    @Post('/posts')
    async store(@Body() post: CreatePostRequest) {
        return {
            title: post.title
        }
    }
}
