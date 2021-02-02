import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { debug } from 'console';
import { CreateTestDto } from '../dto/create-test-dto';
import { TestService } from '../service/test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) { }

  @Post()
  async create(
    @Body() data: CreateTestDto,
    @Res() response
  ) {
    const test = await this.testService
      .createTest(data)
      .catch(console.error);
    return response.status(HttpStatus.CREATED).json(test);
  }

  @Get()
  async getAll(@Res() response) {
    const testList = await this.testService.getAll().catch(console.error);
    return response.status(HttpStatus.OK).json(testList);
  }

  @Put(':id')
  async update(
    @Body() data: CreateTestDto,
    @Res() response,
    @Param('id') idTest,
  ) {
    debugger;
    const test = await this.testService
      .updateTest(idTest, data)
      .catch(console.error);
    return response.status(HttpStatus.OK).json(test);
  }

  @Delete(':id')
  async delete(
    @Res() response,
    @Param('id') idTest
  ) {
    const res = await this.testService.deleteTest(idTest)
      .catch(console.error);
    return response.status(HttpStatus.OK).json({ "raw-afected": res["affected"] });
  }
}
