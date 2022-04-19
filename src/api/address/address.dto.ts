import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  public fullName: string;

  @IsString()
  @IsNotEmpty()
  public province: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @IsString()
  @IsNotEmpty()
  public country: string;
}
