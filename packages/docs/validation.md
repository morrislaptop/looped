# Validation

## Introduction

Looped provides several different approaches to validate your application's incoming data. By default, Looped validates your incoming requests using [class-validator](https://github.com/typestack/class-validator) and [class-transformer](https://github.com/typestack/class-transformer) which uses [validator.js](https://github.com/validatorjs/validator.js) under the hood. This provides a convenient method to validate and use strongly typed incoming HTTP requests.

## Request Validation

To learn about Looped's powerful validation features, let's look at a complete example of validating a form and displaying the error messages back to the user.

### Defining The Routes

First, let's assume we have registered the controller in our `routes/controllers.ts` file:

```typescript
import { PostController } from '../app/Http/Controllers/PostController'

export const controllers = [
    PostController
]
```

### Creating The Controller

Next, let's take a look at a simple controller that handles these routes.

```typescript
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

```


### Writing The Validation Logic

Now we are ready to fill in our `CreatePostRequest` method with the logic to validate the new blog post. To do this, we will use the decorators provided by the `class-validator` library. If the validation rules pass, your code will keep executing normally; however, if validation fails, an exception will be thrown and the proper error response will automatically be sent back to the user.

```typescript
import { IsString, IsEmail } from "class-validator";

export class CreatePostRequest {

    @IsString()
    title: string

    @IsEmail()
    email: string

}
```

As you can see, we define the parameters of the request and detail the validation requirements via decorators. 

### The Validation Response

The JSON response will be sent with a 400 HTTP status code with a JSON payload detailing the validation errors occured.

```typescript
{
    "name": "BadRequestError",
    "message": "Invalid body, check 'errors' property for more info.",
    "errors": [
        {
            "property": "title",
            "constraints": {
                "isString": "title must be a string"
            }
        },
        {
            "property": "email",
            "constraints": {
                "isEmail": "email must be an email"
            }
        }
    ]
}
```


## Manually Creating Validators

If you do not want to use the `decorators` on a request object, you may create a validator instance manually using the [indicative](https://github.com/poppinss/indicative) library. 

```typescript
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
```

The first argument passed to the `validate` method is the data under validation. The second argument is the validation rules that should be applied to the data.
