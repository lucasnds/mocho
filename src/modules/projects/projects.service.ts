import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(data: CreateProjectDto): Promise<Project> {
    return this.projectRepository.save(data);
  }

  async findAll() {
    return this.projectRepository.find({ relations: { member: true } });
  }

  async findOne(id: string) {
    return this.projectRepository.findOne({
      where: { id },
      relations: { member: { skill: true }, problem: true },
    });
  }

  async update(id: string, data: UpdateProjectDto) {
    return this.projectRepository.update(id, data);
  }

  async remove(id: string) {
    return this.projectRepository.delete(id);
  }
}
