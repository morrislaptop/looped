import { Controller, Get, Post, Put, Delete, Param, Body } from 'routing-controllers'
import { Inject, Service } from 'typedi'
import { User } from '../../User'
import { EntityFromParam } from "typeorm-routing-controllers-extensions";

@Controller('/users')
@Service()
export class ModelController
{
    
    /**
     * Display a listing of the resource.
     */
    @Get('/')
    async index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    @Post('/')
    store(@Body() user: User)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    @Get('/:id')
    async show(@EntityFromParam('id') user: User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    @Put('/:id')
    async update(@Body() user: User)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    @Delete('/:id')
    async destroy(@EntityFromParam('id') user: User)
    {
        //
    }
    
}
