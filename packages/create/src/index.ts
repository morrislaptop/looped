import { Command, flags } from '@oclif/command'
import * as request from 'request-promise';
import * as AdmZip from 'adm-zip'
import * as fs from 'fs'
import * as path from 'path'
import * as decompress from 'decompress'
import { tap } from 'lodash'
import * as mv from 'mv'
import { promisify } from 'util'
import { tmpdir } from 'os'
import { spawnSync } from 'child_process';

class LoopedTsCreate extends Command {
    static description = 'describe the command here'

    static args = [{ name: 'dir' }]

    path = 'looped-master/packages/app'

    async run() {
        const { args } = this.parse(LoopedTsCreate)

        this.log(`Looping in ${args.dir}`)

        await this.copyIntoDirectory(args.dir)
        await this.copyEnvExample(args.dir)
        await this.installDependencies(args.dir)

        this.log(`Looped!`)
    }

    async copyIntoDirectory(dir: string) {
        // Download
        const url = 'https://github.com/morrislaptop/looped/archive/master.zip'
        const buffer = await request({ url, encoding: null })
        const tmp = tmpdir()

        // Extract only the app directory
        await decompress(buffer, tmp, {
            filter: file => file.path.startsWith(this.path),
        })

        // Move to the root
        fs.renameSync(path.join(tmp, this.path), dir)
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
