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
    const {args, flags} = this.parse(MakeController)

    console.log(args)

    await make(args, 'app/Http/Controllers');
  }
}
