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

    async run() {
        const { args } = this.parse(LoopedTsCreate)

        this.log(`Looping in ${args.dir}`)

        await this.copyIntoDirectory(args.dir)
        await this.copyEnvExample(args.dir)
        await this.installDependencies(args.dir)

        this.log(`Looped!`)
    }

    async copyIntoDirectory(dir: string)
    {
        // Get version
        const version = require('../package.json').version
        const prefix = `looped-${version}/packages/app`

        // Download
        const url = `https://github.com/morrislaptop/looped/archive/v${version}.zip`
        const buffer = await request({ url, encoding: null })
        const tmp = tmpdir()

        // Extract only the app directory
        await decompress(buffer, tmp, {
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
