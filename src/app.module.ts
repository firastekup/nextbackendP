import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // or your database host
      port: 3306, // or your database port
      username: 'root',
      password: '',
      database: 'employee_management', // your database name
      entities: [User], // Ensure your User entity is included
      synchronize: true, // Only use true in development
    }),
    UserModule,
  ],
})
export class AppModule {}
