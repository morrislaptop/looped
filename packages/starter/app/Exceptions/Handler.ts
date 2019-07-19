import { Middleware } from "routing-controllers";
import { Request, Response } from "express";
import * as config from '../../config'
import { Handler as ExceptionHandler } from '@looped-ts/foundation'

@Middleware({ type: "after" })
export class CustomErrorHandler extends ExceptionHandler {

    debug = config.app.debug

    error(error: any, request: Request, response: Response, next: (err?: any) => any)
    {
        super.error(error, request, response, next)
    }

}
