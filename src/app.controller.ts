import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/route1")
  getRootRoute() {
    return "hi there!";
  }
}
