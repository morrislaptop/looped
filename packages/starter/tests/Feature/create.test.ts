import { koa } from '../../bootstrap/test'
import request from 'supertest'

// Run tests
describe("create", () => {

  test("should create an environment", async () => {
    // Arrange.
    const app = (await koa()).callback()

    // Act.
    const response = await request(app).get('/')

    // Assert.
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello')
  })

})
