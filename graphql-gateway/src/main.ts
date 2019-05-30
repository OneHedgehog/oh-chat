import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger} from "@nestjs/common";

const PORT = 5001 || process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`Server running on port ${PORT}`)
}
bootstrap();
