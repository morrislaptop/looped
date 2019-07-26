import { __, setLocale, configure } from 'i18n'
import * as config from '../../config'

export class LocalizationServiceProvider
{
    async register() {
        configure({
            directory: __dirname + '/../../resources/lang',
            defaultLocale: config.app.locale,
            autoReload: true,
            register: global,
        })
    }

    async boot() {

    }
}
