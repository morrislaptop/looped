import { Request } from "express";

// import { request } from "express";
export const request = {
    fullUrl(request: Request) {
        return `${request.protocol}://${request.hostname}${request.path}`
    },

    fullUrlWithQueryString(request: Request) {

        return `${request.protocol}://${request.hostname}${request.originalUrl}`
    },
}
