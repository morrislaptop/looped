import { Container } from 'typedi'
import * as config from '../../config'
import { Promise } from 'bluebird'

export class AppServiceProvider
{
    async register() {
        Container.set('Hello', 'World')
    }

    async boot() { }
}
