import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(data: CreateCompanyDto) {
    return this.companyRepository.save(data);
  }

  async findAll() {
    return this.companyRepository.find({ relations: { members: true } });
  }

  async findOne(id: string) {
    return this.companyRepository.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<Company>) {
    return this.companyRepository.update(id, data);
  }

  async remove(id: string) {
    return this.companyRepository.delete(id);
  }
}
