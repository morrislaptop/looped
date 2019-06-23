import { Middleware, ExpressMiddlewareInterface, KoaMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'
import { Context } from 'koa';
import { isString, isArray, isObject, map, mapValues } from 'lodash';

export class TransformsRequests implements KoaMiddlewareInterface {

    async use(ctx: Context, next: (err?: any) => any) {
        ctx.request.body = this.cleanObject(ctx.request.body)

        return next();
    }

    cleanObject(obj: any): any {
        const fn: any = isArray(obj) ? map : mapValues

        return fn(obj, this.cleanValue.bind(this))
    }

    cleanValue(value: any, key: any): any {
        if (isObject(value)) return this.cleanObject(value)

        return this.transform(value, key)
    }

    transform(value: any, key: any) {
        return value
    }
}
