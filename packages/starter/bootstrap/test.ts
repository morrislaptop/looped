import { container } from './container'
import { handle } from '../app/Http/Kernel'

export async function koa() {
    const koa = handle(await container())

    return koa
}
