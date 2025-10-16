import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevsModule } from './devs/devs.module';
import {ConfigModule}  from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    DevsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
