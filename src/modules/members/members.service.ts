import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  async create(data: CreateMemberDto) {
    return this.membersRepository.save({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    });
  }

  findAll() {
    return this.membersRepository.find({ relations: { company: true } });
  }

  findOne(id: string) {
    return this.membersRepository.findOne({ where: { id } });
  }

  update(id: string, data: UpdateMemberDto) {
    return this.membersRepository.update(id, data);
  }

  softDelete(id: string) {
    return this.membersRepository.softDelete(id);
  }
}
