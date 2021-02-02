import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TestModule],
  controllers: [],
  providers: []
})

// @Module({
//   imports: [TypeOrmModule.forRoot(), TestModule],
//   controllers: [TestController],
//   providers: [TestService],
// })
export class AppModule { }
