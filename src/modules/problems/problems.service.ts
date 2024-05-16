import { Injectable } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Problem } from './entities/problem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
  ) {}
  create(data: CreateProblemDto) {
    return this.problemRepository.save(data);
  }

  findAll() {
    return this.problemRepository.find();
  }

  findOne(id: string) {
    return this.problemRepository.findOne({ where: { id } });
  }

  update(id: string, data: UpdateProblemDto) {
    return this.problemRepository.update(id, data);
  }

  remove(id: string) {
    return this.problemRepository.delete(id);
  }
}
