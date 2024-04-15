import { RestModule } from './rest/rest.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [RestModule, SharedModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
