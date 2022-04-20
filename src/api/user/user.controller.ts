import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BaseController } from 'src/common/base/base.controller';
import { FindOneParams } from 'src/common/validators/common.validator';
import { ExcludeNullInterceptor } from 'src/interceptors/exclude-null.interceptor';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { DeleteResult } from 'typeorm';
import JwtAuthenticationGuard from '../auth/strategy/jwt-auth.guard';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

// @UseInterceptors(ExcludeNullInterceptor)
@UseInterceptors(TransformInterceptor)
@Controller('user')
export class UserController extends BaseController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.findById(id);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  public getAllUsers() {
    return this.service.findAll();
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.store(body);
  }

  @Put(':id')
  public updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return this.service.updateUser(id, body);
  }

  @Delete(':id')
  public deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
