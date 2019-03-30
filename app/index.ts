import { router } from '../packages/router'
import { app } from '../packages/app'

router.get("/", async ctx => {
  return { hello: 'world' }
});

app.use(router.routes());

const server = app.listen(process.env.PORT || 8081).on("error", err => {
  console.error(err);
});

export { server }