import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User, UserRepository> {
  constructor(repository: UserRepository) {
    super(repository);
  }

  public async getByEmail(email: string) {
    const user = await this.repository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async updateUser(id: number, body: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }
}
