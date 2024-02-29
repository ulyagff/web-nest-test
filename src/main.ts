import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path');
  const hbs = require('express-handlebars');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'index',
      layoutsDir: path.join(__dirname, '..', 'views'),
      partialsDir: [path.join(__dirname, '..', 'views/partials')],
    }),
  );

  await app.listen(PORT);
}

bootstrap();
