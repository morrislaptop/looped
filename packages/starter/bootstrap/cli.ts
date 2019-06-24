import { container } from './container'
import { handle } from '../app/Console/Kernel'

async function run() {
    handle(await container())
}

run()
