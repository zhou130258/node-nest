import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const listenPort = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('接口管理平台')
    .setDescription('nest 后端项目管理')
    .setVersion('1.0')
    // .addTag('Tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(listenPort);

  console.log(`listen in http://localhost:${listenPort}`);
}
bootstrap();
