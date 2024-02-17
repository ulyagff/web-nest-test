import { Controller, Get, Render, Res } from "@nestjs/common";
import { Response } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('index.hbs')
  @Render('index.hbs')
  index() {}

  @Get('contact.hbs')
  @Render('contact.hbs')
  contact() {}

  @Get('study.hbs')
  @Render('study.hbs')
  study() {}
}
