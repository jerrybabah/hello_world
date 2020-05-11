import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(''); // 모든 요청에서 logger를 띄운다. express에서처럼 라우트 앞에 미들웨어를 붙이는 것과 같다.
  }
}
