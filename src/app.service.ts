import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hi, ${process.env.APP_NAME} here!`;
  }
}
