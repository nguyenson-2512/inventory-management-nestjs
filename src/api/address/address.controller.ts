import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from '../auth/strategy/jwt-auth.guard';
import { CreateAddressDto } from './address.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  @Inject(AddressService)
  private readonly service: AddressService;

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  public createAddress(@Body() address: CreateAddressDto, @Req() req) {
    return this.service.createAddress(address, req?.user);
  }
}
