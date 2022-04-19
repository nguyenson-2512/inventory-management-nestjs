import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(7)
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
