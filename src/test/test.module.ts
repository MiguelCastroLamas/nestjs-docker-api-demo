import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entity/test.entity';
import { TestService } from './service/test.service';
import { TestController } from './controller/test.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestService],
  controllers: [TestController],
  exports: [],
})
export class TestModule { }
