import * as Koa from 'koa'

export class LoopedApp extends Koa
{
  public constructor()
  {
    super()

    this.use(this.responseToContext)
  }
  
  async responseToContext(ctx: Koa.Context, next: Function) {
    const result = await next()

    if (result && !ctx.body) {
      ctx.body = result
    }
  }
}