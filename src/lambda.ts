import serverlessExpress from '@codegenie/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedServer;

export const handler = async (event: any, context: any) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule);
    await nestApp.init();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }
  return cachedServer(event, context);
};
