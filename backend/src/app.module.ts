import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './databaseConfig';

@Module({
  imports: [ TypeOrmModule.forRoot(databaseConfig),
    UserModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
