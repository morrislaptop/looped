import { Controller, Post, Ctx, Get, Req, Render, Param, Body, JsonController } from 'routing-controllers'
import {EntityFromParam} from "typeorm-routing-controllers-extensions";
import Container, { Service } from 'typedi'
import { Context, Request } from 'koa'
import getRawBody from 'raw-body'
import { User } from '../../User'
import { SlimBody } from '@looped-ts/foundation'

@JsonController()
@Service()
export class ExampleController
{
    @Get('/')
    @Render("index.ejs")
    async index(@Req() req: Request) {
        return {
            hello: 'Looped',
        }
    }

    @Get('/hello/:name?')
    async hello(@Param('name') name: string = 'User') {
        return `Hello ${name}`
    }

    @Get('/users/:firstName')
    async show(@EntityFromParam('firstName', { property: 'firstName' }) user: User) {
        return 'Hi'
    }

    @Post('/')
    async store(@SlimBody() slimmed: any, @Body() body: any) {
        return { body, slimmed }
    }
}
