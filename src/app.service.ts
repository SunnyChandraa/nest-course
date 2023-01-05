import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Jodohkanlah hamba dengan acrush, aamiin... akuu sukaa kamu :) ';
  }
}
