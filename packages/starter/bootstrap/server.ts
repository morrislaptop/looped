import { container } from './container'
import * as config from '../config'
import { handle } from '../app/Http/Kernel'

async function run() {
    const koa = handle(await container())

    koa.listen(config.app.port)
}

run()
