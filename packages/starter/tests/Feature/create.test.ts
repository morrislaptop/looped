import 'reflect-metadata'

import { container } from '../../bootstrap/app'
import { handle } from '../../app/Http/Kernel'

import request from 'supertest'
import { dump } from '../../app/helpers';

// Run tests
describe("create", () => {

  test("should create an environment", async () => {
    // Arrange.
    const app = handle(container).callback()

    // Act.
    const response = await request(app).get('/')

    // Assert.
    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello')
  })

})
