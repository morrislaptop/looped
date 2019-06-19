import 'reflect-metadata'

import { app } from '../../bootstrap/app'

import request from 'supertest'
import { dump } from '../../app/helpers';

// Run tests
describe("create", () => {

  test("should create an environment", async () => {
    // Arrange.

    // Act.
    const response = await request(app).post("/environments/DR-6").send({
        repos: ['accounts-api']
    })

    // Assert.
    expect(response.status).toEqual(200)
  })

})
