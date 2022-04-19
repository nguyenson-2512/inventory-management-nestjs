import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [UserModule, AuthModule, AddressModule],
})
export class ApiModule {}
