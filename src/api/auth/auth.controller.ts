import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  // @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(@Req() request: LoginDTO) {
    // const user = request.user;
    // user.password = undefined;
    // return user;
  }

  //   @UseGuards(JwtAuthGuard)
  //   @Post('register')
  //   async register(@Req() req, @Res() res, @Body() body) {
  //     const auth = await this.authService.createUser(body);
  //     res.status(auth.status).json(auth.content);
  //   }

  @Post('register')
  async register(@Body() registrationData: RegisterDTO) {
    return this.authService.register(registrationData);
  }
}
