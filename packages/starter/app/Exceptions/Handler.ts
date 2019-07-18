import {Middleware, ExpressErrorMiddlewareInterface, HttpError} from "routing-controllers";
import { Request } from "express";
import * as config from '../../config'

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: Request, response: any, next: (err?: any) => any)
    {
        if (error.httpCode) {
            response.status(error.httpCode);
        } else {
            response.status(500);
        }

        // send error content
        if (request.accepts('json')) {
            response.json(this.processJsonError(error));
        } else {
            response.send(this.processTextError(error));
        }
    }

    protected processJsonError(error: any)
    {
        if (typeof error.toJSON === "function")
            return error.toJSON();

        let processedError: any = {};
        if (error instanceof Error) {
            const name = error.name && error.name !== "Error" ? error.name : error.constructor.name;
            processedError.name = name;

            if (error.message)
                processedError.message = error.message;
            if (error.stack && config.app.debug)
                processedError.stack = error.stack;

            Object.keys(error)
                .filter(key => key !== "stack" && key !== "name" && key !== "message" && (!(error instanceof HttpError) || key !== "httpCode"))
                .forEach(key => processedError[key] = (error as any)[key]);

            return Object.keys(processedError).length > 0 ? processedError : undefined;
        }

        return error;
    }

    protected processTextError(error: any) {
        if (error instanceof Error) {
            if (config.app.debug && error.stack) {
                return error.stack;

            } else if (error.message) {
                return error.message;
            }
        }
        return error;
    }

}
