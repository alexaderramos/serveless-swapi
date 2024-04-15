import { RestController } from './rest.controller';

import { Module } from '@nestjs/common';
import { RestService } from './rest.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [RestController],
  providers: [RestService],
})
export class RestModule {}
