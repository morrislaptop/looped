import { LoopedRouter } from '../../packages/router'
import { LoopedApp } from '../../packages/app'

import * as request from 'supertest'

// Run tests
describe("routes: index", () => {
  test("should respond as expected", async () => {
    // Arrange.
    const app = new LoopedApp()
    const router = new LoopedRouter()
    
    router.get("/", async ctx => {
      return { hello: 'world' }
    });
    
    app.use(router.routes());
    
    const server = app.listen(process.env.PORT || 8081).on("error", err => {
      console.error(err)
    });
    
    // Act.
    const response = await request(server).get("/")

    // Assert.
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("application/json")
    expect(response.body).toEqual({ hello: 'world' })

    server.close()
  })

  test("should route a model to a binding", async () => {
    // Arrange.
    const app = new LoopedApp()
    const router = new LoopedRouter()
    
    router.get("/", async ctx => {
      return { hello: 'world' }
    });
    
    app.use(router.routes());
    
    const server = app.listen(process.env.PORT || 8081).on("error", err => {
      console.error(err)
    });
    
    // Act.
    const response = await request(server).get("/")

    // Assert.
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("application/json")
    expect(response.body).toEqual({ hello: 'world' })

    server.close()
  })
})