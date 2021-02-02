import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from '../entity/test.entity';
import { CreateTestDto } from '../dto/create-test-dto';

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Test)
        private readonly testRepository: Repository<Test>
    ) { }

    async getAll(): Promise<Test[]> {
        return await this.testRepository.find()
    }

    async createTest(test: CreateTestDto): Promise<Test> {
        const newTest = new Test();
        newTest.name = test.name;
        return await this.testRepository.save(newTest);
    }

    async updateTest(id: number, test: CreateTestDto): Promise<Test> {
        const testToUpdate = await this.testRepository.findOne(id);
        testToUpdate.name = test.name;
        return await this.testRepository.save(testToUpdate);
    }

    async deleteTest(id: number): Promise<any> {
        return await this.testRepository.delete(id);
    }
}
