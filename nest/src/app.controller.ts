import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

interface ICreateLetter {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('test')
export class TestController {
  constructor(private readonly appService: AppService) {
    this.appService = new AppService(); // 이렇게 안해줘도 되는거?
  }

  @Get('one')
  one(): string {
    return '아아 리턴 형식인거 너무 좋다ㅎㅎ';
  }

  @Get()
  default(): string {
    return 'json으로 리턴 주고 싶으면 어떻게 하면 되는거지?';
  }

  @Get('req')
  req(@Req() request: Request): string {
    console.log(request.baseUrl);
    return 'req 데이터 사용';
  }

  // @Get(':id')
  // findOne(@Req() req: Request<{id: string}>): string {
  //   return `${req.params.id}`;
  // }

  // @Get(':id')
  // findOne(@Param() params: { id: string }) {
  //   return `${params.id}`;
  // }

  /**
   * 이렇게 쓰는 게 훨씬 좋을 듯.
   * params, body, query 등으로 들어오는 데이터의 타입을 함수 파라미터를 정할 때부터 지정할 수가 있음
   */
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `${id}`;
  }

  @Get('async')
  async asyncFunc(): Promise<any[]> {
    return [];
  }

  // 이렇게 쓸 수 있는거 너무 좋다...ㅠㅠ
  @Post('create')
  async createLetter(@Body() body: ICreateLetter): Promise<string> {
    console.log(body);
    return 'created';
  }
}

/**
 * 에러 처리 컨트롤러를 따로 만들면 어떻게 얘한테 넘길 수 있지??
 * 컨트롤러 전에 미들웨어를 어떻게 붙이지?
 */
