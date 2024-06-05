import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { AdressesService } from './adresses.service';
import { SkillsService } from '../skills/skills.service';

@Controller('members')
export class MembersController {
  constructor(
    private readonly membersService: MembersService,
    private readonly adressesService: AdressesService,
    private readonly skillsService: SkillsService,
  ) {}

  @Post()
  async create(@Body() body: CreateMemberDto) {
    console.log(body);
    if (body.address) await this.adressesService.create(body.address);
    if (body.skill) await this.skillsService.create(body.skill);
    return this.membersService.create(body);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const member = await this.membersService.findOne(id);
    if (!member) throw new NotFoundException('Membro não existe!');
    return member;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    const member = await this.membersService.update(id, updateMemberDto);
    if (!member) throw new NotFoundException('Membro não existe!');
    return member;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const member = await this.membersService.softDelete(id);
    if (!member) throw new NotFoundException('Membro não existe!');
    return member;
  }
}
