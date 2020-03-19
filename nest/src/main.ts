import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './my-logger.service';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
