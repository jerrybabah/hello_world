import { Injectable } from '@nestjs/common';
import { CreateCatQueryDto } from './dto/query.dto';
import { CatResDto } from './dto/response.dto';

/**
 * service의 책임은 데이터 저장, 데이터 가져오기
 * 대부분 async 작업이 필요한 것들
 */
@Injectable()
export class CatService {

  // 어떤 타입을 받는게 맞는걸까?
  // 컨트롤러에서 입력받은 request dto를 그대로 전달받아서 여기서 처리하는 게 맞을까?
  // query dto를 받는 게 맞는 것 같은데...
  // 만약에 컨트롤러에서 POST ~/users/:uid/cats 라는 요청에 body 데이터가 있을 때
  // query dto에서 필요한 body와 uid 정보를 합친 데이터 타입으로 정의해놓아야 한다.
  create(cat: CreateCatQueryDto) {
    console.log(`고양이 데이터 생성. 입력된 데이터: ${cat}`);
  }

  findAll(): CatResDto[] {
    return [];
  }
}