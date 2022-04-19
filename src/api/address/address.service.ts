import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { User } from '../user/user.entity';
import { CreateAddressDto } from './address.dto';
import Address from './address.entity';
import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService extends BaseService<Address, AddressRepository> {
  constructor(repository: AddressRepository) {
    super(repository);
  }

  public async createAddress(address: CreateAddressDto, user: User) {
    const newAddress = await this.repository.create({
      ...address,
      user: user,
    });
    return this.repository.save(newAddress);
  }
}
