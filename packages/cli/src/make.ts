import { renderFile } from 'ejs'
import { outputFile } from 'fs-extra'

export async function make(args: any, path: string, template: string) {
  const code = await renderFile(__dirname + `/../templates/${template}.ejs`, args)

  await outputFile(path, code)
}
