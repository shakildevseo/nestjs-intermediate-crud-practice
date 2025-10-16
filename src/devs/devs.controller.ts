import { Controller, Get } from '@nestjs/common';
import {DevsService} from "./devs.service"

@Controller('devs')
export class DevsController {
   constructor(private readonly devService: DevsService){}

    @Get()
    getAlDevs(){
       
        return this.devService.getAllDevs()
    }

   


}
