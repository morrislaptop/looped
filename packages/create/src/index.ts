import { Command, flags } from '@oclif/command'
import * as request from 'request-promise';
import * as fs from 'fs'
import * as path from 'path'
import * as decompress from 'decompress'
import { tmpdir } from 'os'
import { spawnSync } from 'child_process';

class LoopedTsCreate extends Command {
    static description = 'describe the command here'

    static args = [{ name: 'dir' }]

    static flags = {
        version: flags.string({ default: require('../package.json').version })
    }

    async run() {
        const { args, flags } = this.parse(LoopedTsCreate)

        this.log(`Looping in ${args.dir} with ${flags.version}`)

        await this.copyIntoDirectory(args.dir, flags.version!)
        await this.copyEnvExample(args.dir)
        await this.installDependencies(args.dir)

        this.log(`Looped!`)
    }

    async copyIntoDirectory(dir: string, version: string)
    {
        // Get version

        const prefix = `looped-${version}/packages/starter`

        // Download
        const file = version === 'master' ? version : `v${version}`
        const url = `https://github.com/morrislaptop/looped/archive/${file}.zip`
        const buffer = await request({ url, encoding: null })
        const tmp = tmpdir()

        // Extract only the app directory
        const files = await decompress(buffer, tmp, {
            filter: file => file.path.startsWith(prefix),
        })

        // Move to the root
        fs.renameSync(path.join(tmp, prefix), dir)
    }

    async copyEnvExample(dir: string)
    {
        fs.copyFileSync(dir + '/.env.example', dir + '/.env')
    }

    async installDependencies(dir: any)
    {
        const out = spawnSync('yarn', {
            cwd: dir,
            stdio: 'inherit'
        })
    }
}

export = LoopedTsCreate
