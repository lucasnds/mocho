import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  create(data: CreateSkillDto) {
    return this.skillRepository.save(data);
  }

  findAll() {
    return this.skillRepository.find();
  }

  findOne(id: string) {
    return this.skillRepository.findOne({ where: { id } });
  }

  update(id: string, data: UpdateSkillDto) {
    return this.skillRepository.update(id, data);
  }

  remove(id: string) {
    return this.skillRepository.delete(id);
  }
}
