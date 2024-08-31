import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserHomeDetails } from '../user_home/user_home.entity';



@Module({
  imports: [TypeOrmModule.forFeature([User, UserHomeDetails])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
