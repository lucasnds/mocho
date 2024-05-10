import { IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  document: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
