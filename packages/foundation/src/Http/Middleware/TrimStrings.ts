import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'
import { mapValues } from 'lodash'

@Middleware({ type: "before", priority: -1 })
export class TrimStringsMiddleware implements ExpressMiddlewareInterface {

    use(request: Request, response: Response, next: (err?: any) => any): void {
        console.log('req.body', request.body)

        request.query = this.trim(request.query)
        request.body = this.trim(request.body)

        next();
    }

    trim(obj: any) {
        return mapValues(obj, val => val.trim())
    }

}
