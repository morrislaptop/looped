import { Container } from 'typedi'
import * as config from '../../config'

export class AppServiceProvider
{
    register()
    {
        Container.set('hello', 'world')
    }
}
