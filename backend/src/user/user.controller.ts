import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find-all')
  async findAll() {
    return this.userService.findAll();
  }

  @Post('find-by-home')
  async findByHome(@Query('street_address') streetAddress: string) {
    return this.userService.findByHome(streetAddress);
  }
}
