import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  password: string;
}

class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  password: string;
}
export { RegisterDTO, LoginDTO };
