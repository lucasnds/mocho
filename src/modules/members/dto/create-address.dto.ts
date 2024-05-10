import { IsString } from 'class-validator';

export class createAddressDto {
  @IsString()
  zipcode: string;

  @IsString()
  streat: string;

  @IsString()
  state: string;

  @IsString()
  neighborhood: string;

  @IsString()
  number: string;
}
