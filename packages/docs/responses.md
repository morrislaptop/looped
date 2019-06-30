# HTTP Responses

## Creating Responses

#### Strings & Arrays

All routes and controllers should return a response to be sent back to the user's browser. Looped provides several different ways to return responses. The most basic response is returning a string from a route or controller. The framework will automatically convert the string into a full HTTP response:

```typescript
@Get('/')
async index() {
		return 'Hello world'
}
```

In addition to returning strings from your routes and controllers, you may also return arrays. The framework will automatically convert the array into a JSON response:

```typescript
@Get('/')
async index() {
    return [1, 2, 3]
}
```

#### Response Objects

Typically, you won't just be returning simple strings or arrays from your route actions. Instead, you will be returning full objects or collections of objects.

Routing Controllers provides a variety of decorators for building HTTP responses.

```typescript
@Get('/')
@HttpCode(201)
@Header("Content-Type", "text/plain")
async index(@Res() res: any) {
    return 'Hello World'
}
```


## Redirects

The simplest method is to use the  `@Redirect` decorator:

```typescript
@Get('/')
@Redirect('/')
async index(@Res() res: any) {
    return 'Hello World'
}
```

## Other Response Types

Express allows you to respond with many different types of responses using the `Response` object.

### View Responses

If you need control over the response's status and headers but also need to return a [view](/views) as the response's content, you should use the `view` method:

```typescript
@Get('/')
@Render("index.ejs")
async index(@Req() req: Request) {
    return {
		    hello: 'Looped',
    }
}
```

Of course, if you do not need to pass a custom HTTP status code or custom headers, you should use the global `view` helper function.

### JSON Responses

The `json` method will automatically set the `Content-Type` header to `application/json`, as well as convert the given array to JSON using the `json_encode` PHP function:

```typescript
@Get('/')
async index(@Res() res: Response) {
		return res.json('Hello World')
}
```

If you would like to create a JSONP response, you may use the `jsonp` method:

```typescript
@Get('/')
async index(@Res() res: Response) {
		return res.jsonp('Hello Callback')
}
```

### File Downloads

The `download` method may be used to generate a response that forces the user's browser to download the file at the given path. The `download` method accepts a file name as the second argument to the method, which will determine the file name that is seen by the user downloading the file. Finally, you may pass an array of HTTP headers as the third argument to the method:

```typescript
import { promisify } from 'util'

@Get('/')
async index(@Res() res: Response) {
    const download = promisify(res.download).bind(res)

    return await download('path/to/file.pdf')
}
```

#### Streamed Downloads

Sometimes you may wish to turn the string response of a given operation into a downloadable response without having to write the contents of the operation to disk. You may use the `attachment` method in this scenario, then simply return the buffer or string from the methodl.

```typescript
@Get('/')
async index(@Res() res: Response) {
    const data = readFileSync('/docs/responses.md')

    res.attachment('responses.md')

    return data
}
```

### File Responses

The `sendFile` method may be used to display a file, such as an image or PDF, directly in the user's browser instead of initiating a download. 

```typescript
import { promisify } from 'util'

@Get('/')
async index(@Res() res: Response) {
	  const sendFile = promisify(res.sendFile).bind(res)

		return await sendFile(resolve('/users/avatar.png'))
}
```

#### Streamed Responses

Similarly to streamed downloads, you may wish to serve a file without reading from the disk. You may use the `type` method to set the correct headers and then simply return the data.

```typescript
@Get('/')
async index(@Res() res: Response) {
    const data = readFileSync('/docs/responses.md')

    res.type('md')

    return data
}
```

