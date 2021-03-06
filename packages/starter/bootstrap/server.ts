import { container } from './container'
import * as config from '../config'
import { handleWithExpress as handle } from '../app/Http/Kernel'

async function run() {
    const server = handle(await container())

    server.listen(config.app.port, () => console.log(`Ready on http://localhost:${config.app.port}`))
}

run()
