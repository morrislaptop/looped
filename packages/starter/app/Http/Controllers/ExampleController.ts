import { Controller, Post, Ctx, Get, Req, Render, Param, Body, JsonController, UseBefore } from 'routing-controllers'
import {EntityFromParam} from "typeorm-routing-controllers-extensions";
import Container, { Service, Inject } from 'typedi'
import getRawBody from 'raw-body'
import { User } from '../../User'
import { SlimBody } from '@looped-ts/foundation'
import { Request, Express } from 'express';

@Controller()
@Service()
export class ExampleController
{
    @Get('/')
    @Render("index.ejs")
    async index(@Req() req: any, @Inject('Hello') str: string) {

        console.log(str)

        return {
            hello: str,
        }
    }

}
