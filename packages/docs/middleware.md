# Middleware


## Introduction

Middleware provide a convenient mechanism for filtering HTTP requests entering your application. 

Additional middleware can be written to perform a variety of tasks besides authentication. A CORS middleware might be responsible for adding the proper headers to all responses leaving your application. A logging middleware might log all incoming requests to your application.

Looped uses the Express framework for handling HTTP requests which has middleware packages available for almost anything that you need in your application. Routing Controllers also provides some easy shortcuts for defining your own middleware and applying it to certain controllers and/or actions. 

## Using Existing Middleware

Existing middleware should be registered directly with express in your `app/Http/Kernel.ts` file. 

```typescript
import Limiter from 'express-rate-limit'

export function handleWithExpress(container: typeof Container)
{
    const server = express()

    server.use(new Limiter({ windowMs: 15 * 60 * 1000, max: 100 }))
}
```

> Register the middleware before or after the `useExpressServer` to control the order of the middleware being applied. 

## Defining Middleware

To create a new middleware, use the `make:middleware` Looped command:

    yarn looped make:middleware CheckAge

This command will place a new `CheckAge` class within your `app/Http/Middleware` directory. In this middleware, we will only allow access to the route if the supplied `age` is greater than 200. Otherwise, we will redirect the users back to the `home` URI:

```typescript
import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";

@Middleware({ type: "before" })
export class CheckAge implements ExpressMiddlewareInterface {

    use(request: Request, response: Response, next: NextFunction): void {
        if (request.query.age <= 200) {
            return response.redirect('/home')
        }

        next()
    }

}
```

As you can see, if the given `age` is less than or equal to `200`, the middleware will return an HTTP redirect to the client; otherwise, the request will be passed further into the application. To pass the request deeper into the application (allowing the middleware to "pass"), call the `next` callback`.

It's best to envision middleware as a series of "layers" HTTP requests must pass through before they hit your application. Each layer can examine the request and even reject it entirely.

> All middleware are resolved via the [service container](/container), so you may type-hint any dependencies you need within a middleware's constructor or @Inject properties.

### Before & After Middleware

Whether a middleware runs before or after a request depends on how you use it. For example, the following middleware would perform some task **before** the request is handled by the application:

```typescript
@Get("/users/:id")
@UseBefore(MyMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```

However, this middleware would perform its task **after** the request is handled by the application:

```typescript
@Get("/users/:id")
@UseAfter(MyMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```


## Registering Middleware

### Global Middleware

If you want a middleware to run during every HTTP request to your application, list the middleware class in the `middlewares` array from the `app/Http/Kernel.ts` class.

You should also decorate the middleware and specify if it should run **before** or **after** the controller action.

```typescript
@Middleware({ type: "before" })
export class CheckAge implements ExpressMiddlewareInterface {
}
```

### Assigning Middleware To Routes

You may use the `middleware` method to assign middleware to a controller action:

```typescript
@Get("/users/:id")
@UseAfter(MyMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```

You may also assign middleware to an entire controller:

```typescript
import {Controller, UseBefore} from "routing-controllers";
import {MyMiddleware} from "./MyMiddleware";

@Controller()
@UseBefore(MyMiddleware)
export class UserController {

}
```
