import { Controller, Post, Ctx, Get, Req, Render, Param, Body, JsonController, UseBefore, Res, HttpCode, Header, Redirect, ContentType } from 'routing-controllers'
import {EntityFromParam} from "typeorm-routing-controllers-extensions";
import Container, { Service, Inject } from 'typedi'
import getRawBody from 'raw-body'
import { User } from '../../User'
import { SlimBody } from '@looped-ts/foundation'
import { promisify } from 'util';
import { Request, Express, Response } from 'express';
import { resolve } from 'path';
import { readFileSync } from 'fs';

@Controller()
@Service()
export class ExampleController
{
    @Get('/')
    @ContentType('md')
    async index(@Res() res: Response) {
        const data = readFileSync(__dirname + '/../../../../docs/responses.md')

        return data
    }
}
