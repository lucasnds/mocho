import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

export interface signInDto {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() body: signInDto) {
    return this.authService.signIn(body.email, body.password);
  }
}
