import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  create(data: CreateMemberDto) {
    return this.membersRepository.save(data);
  }

  findAll() {
    return this.membersRepository.find();
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
