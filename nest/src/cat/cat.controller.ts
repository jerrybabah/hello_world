import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';
import { ICat } from './interfaces/cat.interface';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return this.catService.findAll();
  }
}
