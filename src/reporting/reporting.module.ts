import { Module } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ReportingController } from './reporting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTracking } from '../time-tracking/TimeTracking-schema';
import { Leave } from '../leave/leave.schema';
import { User } from '../user/user.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeTracking, Leave, User]),
  ],
  providers: [ReportingService],
  controllers: [ReportingController],
})
export class ReportingModule {}
