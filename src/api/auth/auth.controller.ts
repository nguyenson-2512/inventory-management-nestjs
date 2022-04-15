import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';
import JwtAuthenticationGuard from './strategy/jwt-auth.guard';
import { LocalAuthenticationGuard } from './strategy/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Req() req, @Body() loginData: LoginDTO, @Res() response) {
    const { user } = req;
    const cookie = this.authService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return response.send(user);
  }

  @Post('register')
  register(@Body() registrationData: RegisterDTO) {
    return this.authService.register(registrationData);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Req() request, @Res() response) {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    return response.sendStatus(200);
  }
}
