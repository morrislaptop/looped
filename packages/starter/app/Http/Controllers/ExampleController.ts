import { Controller, Post, Ctx, Get, Req, Render, Param, Body, JsonController, UseBefore, Res, HttpCode, Header, Redirect, ContentType } from 'routing-controllers'
import {EntityFromParam} from "typeorm-routing-controllers-extensions";
import Container, { Service, Inject } from 'typedi'
import getRawBody from 'raw-body'
import { User } from '../../User'
import { SlimBody } from '@looped-ts/foundation'
import { promisify, isString } from 'util';
import { Request, Express, Response } from 'express';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { IsString } from 'class-validator'

class User2 {

    @IsString()
    firstName: string

}

@JsonController()
@Service()
export class ExampleController
{
    @Post('/')
    async index(@Body() user: User2) {
        return {
            class: user.constructor.name,
            user
        }
    }
}
