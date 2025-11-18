import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  @Render('home')
  getHello() {
    console.log('Check port: ', this.configService.get<string>('PORT'));
    const title = 'NestJS Basic Application';
    return {
      title: title,
    };
    // return this.appService.getHello();
  }
}
