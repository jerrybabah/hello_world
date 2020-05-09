import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * nest에서 미들웨어도 provider의 일종이므로 Injectable 데코레이터를 붙인 클래스로 정의한다. (함수로 정의해도 됨)
 * 클래스로 정의할 경우 추가로 NestMiddleware라는 interface를 구현해야 한다. (함수는 추가로 해야 할 것 없음)
 * 
 * provider를 DI시키는 방법으로 Module 데코레이터의 option 인자에 넣을 수 있지만 미들웨어는 다른 방법으로 적용한다.
 * module 클래스에 NestModule interface를 구현시키고 configure라는 메소드를 구현함으로써 미들웨어를 적용한다.
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
