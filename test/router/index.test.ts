import 'reflect-metadata'

import { LoopedRouter } from '../../packages/router'
import { LoopedApp } from '../../packages/app'
import { EntityFromParam } from 'typeorm-routing-controllers-extensions'
import { JsonController, Get, createKoaServer, useKoaServer, Controller } from 'routing-controllers'

import * as request from 'supertest'
import { createConnection } from 'typeorm';
import { Photo } from '../models/Photo'

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

    const connection = await createConnection({
      type: 'postgres',
      url: 'postgresql://127.0.0.1:5432/looped',
      synchronize: true,
      entities: [
        Photo
      ]
    })

    const photo = new Photo
    photo.name = 'Test Photo'
    await photo.save()

    @Controller()
    class PhotoController
    {
      @Get("/photos/:id")
      show(@EntityFromParam("id") photo: Photo) {
        console.log('got a photo', photo)
        return photo;
      }
    }

    useKoaServer(app, {
      controllers: [PhotoController]
    })
    
    const server = app.listen(process.env.PORT || 8081).on("error", err => {
      console.error(err)
    });
    
    // Act.
    const response = await request(server).get("/photos/" + photo.id)
    console.log(response.body)

    // Assert.
    // expect(response.status).toEqual(200)
    // expect(response.type).toEqual("application/json")
    // expect(response.body).toEqual({ hello: 'world' })

    server.close()
    connection.close()
  })
})