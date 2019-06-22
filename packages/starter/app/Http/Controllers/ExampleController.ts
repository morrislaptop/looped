import { Controller, Get, Req, Res, Post, Body, JsonController, UseBefore } from 'routing-controllers'
import { Request } from 'express'
import * as support from '@looped-ts/support'
import { Inject, Service } from 'typedi'
import { RequestError } from 'request-promise/errors';
import { TrimStringsMiddleware } from '@looped-ts/foundation'

@JsonController()
@Service()
export class ExampleController
{
    /**
     * @todo nly works for the memory cache driver
     */
    @Get("/")
    async home()
    {
        return 'Hello World'
    }

    @Post("/test")
    @UseBefore(TrimStringsMiddleware)
    getAll(@Req() req: Request, @Body() body: any) {
        console.log('query', req.query)
        return Object.assign({}, req.query, req.body)
    }
}
