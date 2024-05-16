import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MembersModule } from '../members/members.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MembersModule,
    JwtModule.register({
      global: true,
      secret: 'TESTE',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
