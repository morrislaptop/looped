import { container } from './container'
import { handleWithExpress as handle } from '../app/Http/Kernel'

export async function server() {
    const server = handle(await container())

    return server
}
