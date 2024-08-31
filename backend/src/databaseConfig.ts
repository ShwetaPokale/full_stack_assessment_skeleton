import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'db_user',
  password: '6equj5_db_user',
  database: 'home_db',
  autoLoadEntities: true,
  synchronize: true,
};

export default databaseConfig;
