import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';

import { CreateCatReqDto } from './dto/request.dto';
import { CatResDto } from './dto/response.dto';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  /**
   * interface를 따로 정의해서 create의 인자 타입을 그 인터페이스를 사용하는 게 좋지 않을까?
   * dto는 잘 바뀌지 않는건가? -> 경험상 이름도 바뀔 수 있고, 데이터가 추가될 일이 자주 일어날 텐데 그럴 때마다 코드를 연쇄적으로 바꿔줘야 할 듯
   * 기능의 확장에 잘 대응해야 하는거지, 기획, 기능, 데이터의 변경에는 어쩔 수 없는건가?
   * 컨트롤러의 파라미터는 request dto가 되는 것이고, 응답 타입은 response dto가 될 것이다.
   */
  @Post()
  async create(@Body() createCatDto: CreateCatReqDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CatResDto[]> {
    return this.catService.findAll();
  }
}
