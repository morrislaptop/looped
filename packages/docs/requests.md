# HTTP Requests

## Accessing The Request

To obtain an instance of the current [HTTP request](https://expressjs.com/en/api.html#req) via dependency injection, you should use the  `@Req()` decorator on your controller method. The incoming request instance will automatically be injected by the [service container](/container):

```typescript
import {Controller, Req, Res, Get} from 'routing-controllers'
import { Request } from 'koa'

@Controller()
export class UserController {

    @Get("/users")
    getAll(@Req() request: Request) {
        return request.query.hello
    }

}
```

#### Dependency Injection & Route Parameters

If your controller method is also expecting input from a route parameter you should list your route parameters after your other dependencies. For example, if your route is defined like so:

    @Get("/users/:id")

You may still type-hint the [HTTP request](https://koajs.com/#request) and access your route parameter `id` by defining your controller method as follows:

```typescript
import {Controller, Req, Res, Get} from 'routing-controllers'
import { Request } from 'express'

@Controller()
export class UserController {

    @Get("/users/:id")
    show(@Req() request: Request, @Param("id") id: number) {
        return `User #${id}`
    }

}
```

### Request Path & Method

The [HTTP request](https://koajs.com/#request) instance provides a variety of methods for examining the HTTP request for your application. We will discuss a few of the most important methods below.

#### Retrieving The Request Path

The `path` method returns the request's path information. So, if the incoming request is targeted at `http://domain.com/foo/bar`, the `path` method will return `foo/bar`:

```typescript
const uri = request.path
```

#### Retrieving The Request URL

To retrieve the full URL for the incoming request you may import the request helper and use the `url` or `fullUrl` methods. The `href` property will return the URL with the query string, removing the query string is a simple find and replace:

```typescript
// With Query String...
const href = request.href

// Without Query String...
const url = request.href.replace(`?${req.querystring}`, '')
```

> This doesn't include the port number by default (usually the port number will be set by whatever process runner you are using). If you need the port you can use `request.socket.localPort`

#### Retrieving The Request Method

The `method` method will return the HTTP verb for the request. You may use the `isMethod` method to verify that the HTTP verb matches a given string:

```typescript
const method = request.method

if (['POST', 'PUT'].includes(request.method)) {
    //
}
```

## Input Trimming & Normalization

By default, Looped includes the `TrimStrings` and `ConvertEmptyStringsToNull` middleware in your application's global middleware stack. These middleware are listed in the stack by the `bootstrap/app.ts` file. These middleware will automatically trim all incoming string fields on the request body, as well as convert any empty string fields to `null`. This allows you to not have to worry about these normalization concerns in your routes and controllers.

If you would like to disable this behavior, you may remove the two middleware from your application's middleware stack by removing them from the `middlewares` property of your `bootstrap/app.ts` file.

> Note: Looped does NOT apply this middleware to the query string

## Retrieving Input

#### Retrieving All Input Data

You may also retrieve all of the input data as an `object` using the `body` property:

```typescript
const input = request.body
```

Alternatively, you may use the `@Body()` decorator on a param:

```typescript
@Post("/users")
store(@Body() body: any) {
		return body
}
```

#### Retrieving Input From The Body

To access individual input from the body, you may use the `@BodyParam` decorator. 

```typescript
@Post("/users")
store(@BodyParam('name') name: string) {
		return name
}
```

You can specify a default value and type by simply specifying it in your method

```typescript
@Post("/users")
store(@BodyParam('age') age: number = 18) {
		return age
}
```

When working with forms that contain array inputs, use normal JavaScript to access data:

```typescript
const name = body.products[0].name

const names = body.products.map(product => product.name)
```

#### Retrieving Input From The Query String

The `@QueryParam` method will retrieve values from the query string:

```typescript
@Get("/users")
index(@QueryParam('search') search: string = '*') {
		return search
}
```

You may use the `@QueryParams` decorator in order to retrieve all of the query string values as an object:

```typescript
@Get("/users")
index(@QueryParams() query: any) {
		return query
}
```

#### Retrieving A Portion Of The Input Data

If you need to retrieve a subset of the input data, you can use JavaScript's destructoring..

```typescript
# Only get username and password
const { username, password } = request.body

# Omit credit card data
const { credit_card, ...data } = request.body
```

## Files

You can handle uploaded files via [form-data](#retrieving-uploaded-files) or [raw binary uploads](#binary-uploads).

### Retrieving Uploaded Files

You may access uploaded files using the `@UploadedFile()` decorator. The decorator returns an instance of the [File](https://github.com/expressjs/multer#file-information) class, which provides a variety of properties for interacting with the file:

```typescript
import { File } from 'koa-multer'

@Post("/users")
store(@UploadedFile("avatar") avatar: File) {
	  return avatar.name
}
```

#### File Contents

The `File` object will store the contents of the file in memory, inside the `buffer` property.

```typescript
@Post("/users")
@ContentType('image/png')
store(@UploadedFile("fileName") file: File) {
 		return file.buffer
}
```

#### File Extensions

The `extension` method will attempt to guess the file's extension based on its contents. This extension may be different from the extension that was supplied by the client:

It's recommended to decide on an extension based on the mimetype of the file rather than the one provided by the client. You may do this via the 

```typescript
# yarn add mime-types @types/mime-types

import { extension } from 'mime-types'

const ext = extension(file.mimetype)
```

### Storing Uploaded Files

If you would like to store the file somewhere automatically, the `@UploadedFile` decorator can be configured to do this by passing an [options](https://github.com/expressjs/multer#multeropts) object in your method.

```typescript
import { Controller, Post, UploadedFile } from 'routing-controllers'
import { Service } from 'typedi'
import { File, Options } from 'koa-multer'

const options: Options = {
    dest: 'uploads/'
}

@Controller()
@Service()
export class ExampleController
{
    @Post("/files")
    store(@UploadedFile("fileName", { options }) file: File) {
        return file.path
    }
}
```

The `destination`, `filename` and `path` properties on the File object are now available instead of the `buffer` property.

If you do not want the file name to be automatically generated, you may [create your own storage method](https://github.com/expressjs/multer#diskstorage) and pass this to options.

```typescript
import { diskStorage, Options } from 'koa-multer'

const options: Options = {
    storage: diskStorage({
        filename(req, file, cb) {
            cb(null, file.originalname)
        }
    })
}
```

If you would like to store your files somewhere more reliable, like S3, then it's recommended to use the [multer-s3](https://github.com/badunk/multer-s3) package.

```typescript
import { Options, StorageEngine } from 'koa-multer'
import s3storage from 'multer-s3'
import { S3 } from 'aws-sdk'
import * as config from '../../../config'

const s3 = new S3({
    accessKeyId: config.services.s3.key,
    secretAccessKey: config.services.s3.secret,
})

const options: Options = {
    storage: s3storage({ s3, bucket: 'looped-ts' }) as StorageEngine
}
```

When using this package, additional properties are available on the `File` object like `location` which contains the URL to the uploaded file.

> If you are uploading multipe files, use the `@UploadedFiles` decorator instead

### Binary Uploads

You can access the raw body using the [raw-body]() package:

```typescript
import { Controller, Post, Ctx } from 'routing-controllers'
import { Service } from 'typedi'
import { Context } from 'koa'
import getRawBody from 'raw-body'

@Controller()
@Service()
export class ExampleController
{
    @Post("/files")
    async store(@Ctx() ctx: Context) {
        const body = await getRawBody(ctx.req)

        return body
    }
}
```



## Configuring Trusted Proxies

When running your applications behind a load balancer that terminates TLS / SSL certificates, you may notice your application sometimes does not generate HTTPS links. Typically this is because your application is being forwarded traffic from your load balancer on port and does not know it should generate secure links.

To solve this, you may set the `proxy` property of the Koa application to true in your `bootstrap/app.ts` file.



App\Http\Middleware\TrustProxies` middleware that is included in your Laravel application, which allows you to quickly customize the load balancers or proxies that should be trusted by your application. Your trusted proxies should be listed as an array on the `$proxies` property of this middleware. 