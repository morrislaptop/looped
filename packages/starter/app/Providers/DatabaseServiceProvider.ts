import { Container } from 'typedi'
import * as config from '../../config'
import { useContainer, createConnection } from 'typeorm';

export class DatabaseServiceProvider
{
    async register() {
        useContainer(Container)

        await createConnection(config.database)
    }

    async boot() { }
}
