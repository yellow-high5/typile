import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './utils/logger/custom-logger.service';
import * as helmet from 'helmet';
// import * as csurf from 'csurf';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.enableCors();
  app.use(helmet());
  // app.use(csurf());
  app.useLogger(new CustomLogger());
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
