import 'reflect-metadata'
import * as config from '../config'
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { ExampleController } from '../app/Http/Controllers/ExampleController'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { controllers } from '../routes/controllers'
import { Container } from 'typedi'
import express from 'express';
import Koa from 'koa'
import { TrimStringsMiddleware, ConvertEmptyStringsToNull } from '@looped-ts/foundation'

// service providers
const providers = [
    new AppServiceProvider(),
]
providers.map(p => p.register())

export const container = Container
