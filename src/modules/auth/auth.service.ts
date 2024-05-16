import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MembersService } from '../members/members.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MembersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const member = await this.memberService.findOneByEmail(email);
    const isValid = await bcrypt.compare(password, member.password);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    const payload = { sub: member.id, username: member.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
