import { Middleware, ExpressMiddlewareInterface, KoaMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'
import { mapValues } from 'lodash'
import { Context } from 'koa';
import { isString, isArray, isObject } from 'lodash';

@Middleware({ type: "before" })
export class TrimStringsMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err?: any) => any): any {
        console.log("do something...");
        next();
    }

}
