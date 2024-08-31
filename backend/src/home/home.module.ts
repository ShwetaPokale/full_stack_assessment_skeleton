import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { Home } from './home.entity';
import { UserHomeDetails } from '../user_home/user_home.entity';
import { User } from '../user/user.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Home, UserHomeDetails, User])],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
