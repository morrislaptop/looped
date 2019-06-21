import { renderFile } from 'ejs'
import { outputFile } from 'fs-extra'

export async function make(args: any, path: string) {
  const code = await renderFile(__dirname + '/../templates/controller.ejs', args)

  await outputFile(`${path}/${args.name}.ts`, code)
}
