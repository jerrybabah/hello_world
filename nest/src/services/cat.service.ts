import { Injectable } from '@nestjs/common';
import { ICat } from '../interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: ICat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}