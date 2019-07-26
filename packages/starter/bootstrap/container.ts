import 'reflect-metadata'
import * as config from '../config'
import { createKoaServer, useContainer, createExpressServer } from 'routing-controllers'
import { AppServiceProvider } from '../app/Providers/AppServiceProvider'
import { DatabaseServiceProvider } from '../app/Providers/DatabaseServiceProvider'
import { LoggingServiceProvider } from '../app/Providers/LoggingServiceProvider'
import { LocalizationServiceProvider } from '../app/Providers/LocalizationServiceProvider'
import { controllers } from '../routes/controllers'
import { Container } from 'typedi'

export async function container() {
    // service providers
    const providers = [
        new AppServiceProvider,
        new DatabaseServiceProvider,
        new LoggingServiceProvider,
        new LocalizationServiceProvider,
    ]

    await Promise.all(providers.map(p => p.register()))
    await Promise.all(providers.map(p => p.boot()))

    return Container
}
