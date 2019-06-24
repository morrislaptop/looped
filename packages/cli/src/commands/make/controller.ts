import {Command, flags} from '@oclif/command'
import { make } from '../../make';

export default class MakeController extends Command
{
  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'name', required: true}]

  async run()
  {
    const { args } = this.parse(MakeController)

    await make(args, `app/Http/Controllers/${args.name}.ts`, 'controller');
  }
}
