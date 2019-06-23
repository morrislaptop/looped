import { Middleware, ExpressMiddlewareInterface, KoaMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'
import { mapValues } from 'lodash'
import { Context } from 'koa';
import { isString, isArray, isObject } from 'lodash';
import { TransformsRequests } from './TransformsRequests';

@Middleware({ type: "before" })
export class ConvertEmptyStringsToNull extends TransformsRequests {
    transform(value: any, key: any) {
        return value === '' ? null : value
    }
}
