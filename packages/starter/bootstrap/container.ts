import 'reflect-metadata'
import * as config from '../config'
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { ExampleController } from '../app/Http/Controllers/ExampleController'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { controllers } from '../routes/controllers'
import { Container } from 'typedi'
import { bootstrapMicroframework } from 'microframework'
import express from 'express';
import Koa from 'koa'
import { TrimStringsMiddleware, ConvertEmptyStringsToNull } from '@looped-ts/foundation'
import { Promise as bluebird } from 'bluebird'

export async function container() {
    // service providers
    const providers = [
        new AppServiceProvider(),
    ]

    // register
    const registrars = providers.map(p => p.register)
    await bluebird.each(registrars, fn => fn())

    // boot
    const booters = providers.map(p => p.boot)
    await bluebird.each(booters, fn => fn())

    return Container
}
