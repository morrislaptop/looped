import {Command, flags} from '@oclif/command'
import { make } from '../../make';

export default class MakeMiddleware extends Command
{
  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'name', required: true}]

  async run()
  {
    const { args } = this.parse(MakeMiddleware)

    await make(args, `app/Http/Middleware/${args.name}.ts`, 'middleware');
  }
}
