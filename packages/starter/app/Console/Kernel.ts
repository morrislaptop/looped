import { Container } from 'typedi'
import { run } from '@oclif/command'

export async function handle(container: typeof Container)
{
    require('@oclif/command').run()
    .then(require('@oclif/command/flush'))
    .catch(require('@oclif/errors/handle'))
}
