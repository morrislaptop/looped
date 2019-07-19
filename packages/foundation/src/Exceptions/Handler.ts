import {Middleware, ExpressErrorMiddlewareInterface, HttpError} from "routing-controllers";
import { Request, Response } from "express";

export class Handler implements ExpressErrorMiddlewareInterface {

    debug = false

    error(error: any, request: Request, response: Response, next: (err?: any) => any)
    {
        if (this.isValidationError(error)) {
            response.status(422);
        }
        else if (error.httpCode) {
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

    isValidationError(error: any) {
        const classValidator = error.message && error.message.includes('Invalid')
        const indicative = error[0] && error[0].validation

        return classValidator || indicative
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
            if (error.stack && this.debug)
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
            if (this.debug && error.stack) {
                return error.stack;

            } else if (error.message) {
                return error.message;
            }
        }
        return error;
    }

}
