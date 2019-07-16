import 'reflect-metadata'
import * as config from '../config'
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { DatabaseServiceProvider } from '../app/Providers/DatabaseServiceProvider'
import { controllers } from '../routes/controllers'
import { Container } from 'typedi'
import { Promise as bluebird } from 'bluebird'

export async function container() {
    // service providers
    const providers = [
        new AppServiceProvider,
        new DatabaseServiceProvider,
    ]

    // register
    const registrars = providers.map(p => p.register)
    await bluebird.each(registrars, fn => fn())

    // boot
    const booters = providers.map(p => p.boot)
    await bluebird.each(booters, fn => fn())

    return Container
}
