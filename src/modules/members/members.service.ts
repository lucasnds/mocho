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

  async create(data: CreateMemberDto): Promise<Member> {
    return this.membersRepository.save({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    });
  }

  async findAll(): Promise<Member[]> {
    return this.membersRepository.find({
      relations: { company: true, address: true, skill: true },
    });
  }

  findOne(id: string): Promise<Member> {
    return this.membersRepository.findOne({ where: { id } });
  }

  findOneByEmail(email: string): Promise<Member> {
    return this.membersRepository.findOne({ where: { email } });
  }

  async update(id: string, data: UpdateMemberDto) {
    return this.membersRepository.update(id, data);
  }

  async softDelete(id: string) {
    return this.membersRepository.softDelete(id);
  }
}
