import { Controller, Get, Post, Body } from '@nestjs/common';
import { ICreateCatReqDto } from '../dto/cat.dto';
import { ICat } from '../interfaces/cat.interface';
import { CatService } from '../services/cat.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  async create(@Body() createDto: ICreateCatReqDto) {
    this.catService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.catService.findAll();
  }
}
