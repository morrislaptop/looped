import { Command, flags } from '@oclif/command'
import { Container } from 'typedi'

export default class ExampleCommand extends Command {

    static description = 'example command file'

    static flags = {
        help: flags.help({ char: 'h' }),
    }

    static args = [{ name: 'name', required: true }]

    async run() {
        const { args } = this.parse(ExampleCommand)

        throw new Error('blah blah blah')

        this.log(`Hello, ${args.name}`)

        this.log('Continer, ' + Container.get('hello'))
    }
}
