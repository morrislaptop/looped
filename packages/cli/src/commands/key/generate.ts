import {Command, flags} from '@oclif/command'
const replace = require('replace-in-file');

export default class KeyGenerate extends Command
{
  static description = 'generate a key and write to your .env file'

  static flags = {
    help: flags.help(),
    show: flags.boolean(),
  }

  async run()
  {
    const { flags } = this.parse(KeyGenerate)

    const key = this.generateRandomKey()

    if (flags.show) {
      this.log(key)
      return
    }

    await this.setKeyInEnvironmentFile(key)

    this.log('Application key set successfully.')
  }

  async setKeyInEnvironmentFile(key: string) {
    await replace({
      files: '.env',
      from: /APP_KEY=.*$/m,
      to: `APP_KEY=${key}`,
    })
  }

  generateRandomKey() {
    return Math.random().toString(36).substring(7)
  }

}
