# Error Handling

## Introduction

When you start a new Laravel project, error and exception handling is already configured for you. The `App\Exceptions\Handler.ts` class is where all exceptions triggered by your application are logged and then rendered back to the user. We'll dive deeper into this class throughout this documentation.


## Configuration

The `debug` option in your `config/index.ts` configuration file determines how much information about an error is actually displayed to the user. By default, this option is set to respect the value of the `APP_DEBUG` environment variable, which is stored in your `.env` file.

For local development, you should set the `APP_DEBUG` environment variable to `true`. In your production environment, this value should always be `false`. If the value is set to `true` in production, you risk exposing sensitive configuration values to your application's end users.


## The Exception Handler

### Via Express

All exceptions are handled by the `App\Exceptions\Handler` class. This class contains one method: `error`. 

The `error` method is responsible for converting a given exception into an HTTP response that should be sent back to the browser. By default, the exception is passed to the base class which generates a response for you. However, you are free to log the error or return your own custom response:

```typescript
import { Middleware } from "routing-controllers";
import { Request, Response } from "express";
import * as config from '../../config'
import { Handler as ExceptionHandler } from '@looped-ts/foundation'

@Middleware({ type: "after" })
export class CustomErrorHandler extends ExceptionHandler {

    debug = config.app.debug

    error(error: any, request: Request, response: Response, next: (err?: any) => any)
    {
        console.error(error)
      
        super.error(error, request, response, next)
    }

}
```

## HTTP Exceptions

Some exceptions describe HTTP error codes from the server. For example, this may be a "page not found" error (404), an "unauthorized error" (401) or even a developer generated 500 error. In order to generate such a response from anywhere in your application, you may use the `abort` helper:

```typescript
import { abort } from '@looped-ts/support'

abort(404);
```

The `abort` helper will immediately raise an exception which will be rendered by the exception handler. Optionally, you may provide the response text:

```typescript
abort(403, 'Unauthorized action.');
```

