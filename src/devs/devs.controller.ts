import { Body, Controller, Get, Param, Post, } from '@nestjs/common';
import {DevsService} from "./devs.service"

@Controller('devs')
export class DevsController {
   constructor(private readonly devService: DevsService){}


   // read all devs data
    @Get()
    getAlDevs(){
       
        return this.devService.getAllDevs()
    }

   // read single dev
   @Get(":id")
   getSingleDev(@Param("id") id:number){
    return this.devService.getSingleDev(id)
   }

   


@Post()
createDev(@Body() dev){
    return this.devService.createDev(dev)
}
}
