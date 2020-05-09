import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { logger } from './logger.middleware';

@Module({
  imports: [],
  exports: [CatService],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule implements NestModule {
  // cat module에서도 미들웨어를 적용시킬 수 있다.
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(logger)
    .forRoutes('cats');
  }
}
