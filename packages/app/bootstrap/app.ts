import "reflect-metadata"
import * as config from '../config'
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { ExampleController } from '../app/Http/Controllers/ExampleController'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { Container } from 'typedi'
import express from 'express';

// service providers
const providers = [
    new AppServiceProvider(),
]
providers.map(p => p.register())

// creates express app, registers all controller routes and returns you express app instance
useContainer(Container)
const app = createExpressServer({
   controllers: [
       ExampleController,
    ]
})
app.set('views', __dirname + '/../resources/views');
app.set('view engine', 'ejs')
app.use(express.static('public'))

export { app }
