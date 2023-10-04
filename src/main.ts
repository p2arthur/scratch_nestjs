import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

const port = 3000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(port, () => console.log(`Listening on port: ${port}`));
};

bootstrap();
