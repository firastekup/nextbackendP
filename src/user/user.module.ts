import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.schema'; // Import your User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Provide User entity
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], 

})
export class UserModule {}
