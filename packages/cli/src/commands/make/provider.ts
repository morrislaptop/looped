import {Command, flags} from '@oclif/command'
import { make } from '../../make';

export default class MakeProvider extends Command
{
  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'name', required: true}]

  async run()
  {
    const { args } = this.parse(MakeProvider)

    await make(args, `app/Providers/${args.name}.ts`, 'provider');
  }
}
