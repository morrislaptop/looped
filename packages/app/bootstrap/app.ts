import "reflect-metadata"
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { SelectTicketController } from '../app/Http/Controllers/SelectTicketController'
import { EnvironmentsController } from '../app/Http/Controllers/EnvironmentsController'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { CacheServiceProvider } from '../app/Providers/CacheServiceProvider'
import { Container } from 'typedi'
import express from 'express';

// service providers
const providers = [
    new AppServiceProvider(),
    new CacheServiceProvider(),
]
providers.map(p => p.register())

// creates express app, registers all controller routes and returns you express app instance
useContainer(Container)
const app = createExpressServer({
   controllers: [
       SelectTicketController,
       EnvironmentsController,
    ]
})
app.set('views', __dirname + '/../resources/views');
app.set('view engine', 'ejs')
app.use(express.static('public'))

export { app }
