import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './address.controller';
import Address from './address.entity';
import { AddressRepository } from './address.repository';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address, AddressRepository])],

  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
