import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Address } from './entities/address.entity';
import { AdressesService } from './adresses.service';
import { SkillsModule } from '../skills/skills.module';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Address]), SkillsModule],
  providers: [MembersService, AdressesService],
  controllers: [MembersController],
})
export class MembersModule {}
