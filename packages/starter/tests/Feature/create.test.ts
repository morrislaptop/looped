import { server } from '../../bootstrap/tests'
import request from 'supertest'

// Run tests
describe("create", () => {

  test("should create an environment", async () => {
    // Arrange.
    const app = await server()

    // Act.
    const response = await request(app).get('/')

    // Assert.
    expect(response.status).toEqual(200)
    expect(response.text).toContain('Hello')
  })

})
