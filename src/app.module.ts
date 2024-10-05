// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LeaveModule } from './leave/leave.module'; // Import the new module
import { Leave } from './leave/leave.schema';
import { User } from './user/user.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'employee_management',
      entities: [User, Leave], // Add Leave entity here
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    LeaveModule,
  ],
})
export class AppModule {}
