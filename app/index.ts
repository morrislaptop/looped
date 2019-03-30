import { LoopedRouter } from '../packages/router'
import { LoopedApp } from '../packages/app'

const app = new LoopedApp()
const router = new LoopedRouter()

router.get("/", async ctx => {
  return { hello: 'world' }
});

app.use(router.routes());

const server = app.listen(process.env.PORT || 8081).on("error", err => {
  console.error(err)
});

export { server }