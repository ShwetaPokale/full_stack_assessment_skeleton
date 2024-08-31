import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post('find-by-user')
  async findByUser(@Query('username') username: string, @Query('page') page: number = 1) {
    return this.homeService.findByUser(username, page);
  }

  @Post('update-users')
  async updateUsers(@Body() updateUsersDto: { streetAddress: string, users: string[] }) {
    return this.homeService.updateUsers(updateUsersDto.streetAddress, updateUsersDto.users);
  }
}
