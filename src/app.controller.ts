import { Controller, Get, Render, Req, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { TimeInterceptor } from './time-counter';

@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('prigozhin')
  @Render('index.hbs')
  prigozin(@Req() req) {
    return {
      page: 'prigozhin',
      time: performance.now() - req.body['start'],
      user: 'Ulyana',
    };
  }

  @Get('contact')
  @Render('index.hbs')
  contact(@Req() req) {
    return {
      page: 'contact',
      time: performance.now() - req.body['start'],
      user: 'Ulyana',
    };
  }

  @Get('study')
  @Render('index.hbs')
  study(@Req() req) {
    return {
      page: 'study',
      time: performance.now() - req.body['start'],
      user: 'Ulyana',
    };
  }
}
