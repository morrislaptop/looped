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
    
    ctx.body = result
  }
}