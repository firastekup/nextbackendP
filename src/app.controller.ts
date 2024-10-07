import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('my-api')
@Controller('my-endpoint')
export class MyController {
  
  @Get()
  @ApiResponse({ status: 200, description: 'Successful response.' })
  getHello(): string {
    return 'Hello World!';
  }
}