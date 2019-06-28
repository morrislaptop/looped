import {Command, flags} from '@oclif/command'
import { make } from '../../make';
import * as pluralize from 'pluralize'

export default class MakeController extends Command {

  static flags = {
    help: flags.help({char: 'h'}),
    resource: flags.boolean({ default: false }),
    model: flags.string(),
  }

  static args = [{name: 'name', required: true}]

  async run()
  {
    const { args, flags } = this.parse(MakeController)

    const prefix = flags.model ? pluralize(flags.model).toLowerCase() : null

    await make({ ...args, ...flags, prefix }, `app/Http/Controllers/${args.name}.ts`, 'controller');
  }

}
