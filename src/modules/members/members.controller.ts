import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { AuthGuard } from '../auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body() body: CreateMemberDto) {
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
