import { Container } from 'typedi'

export class AppServiceProvider
{
    async register() {
        Container.set('Hello', 'World')
    }

    async boot() { }
}
