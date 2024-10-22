// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LeaveModule } from './leave/leave.module';
import { EvaluationModule } from './evaluation/evaluation.module'; // Import the EvaluationModule
import { TimeTrackingModule } from './time-tracking/time-tracking.module';
import { ReportingModule } from './reporting/reporting.module';
import { User } from './user/user.schema';
import { Leave } from './leave/leave.schema';
import { PerformanceEvaluation } from './evaluation/evaluation.schema';
import { TimeTracking } from './time-tracking/TimeTracking-schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'employee_management',
      entities: [User, Leave, PerformanceEvaluation, TimeTracking], // Add PerformanceEvaluation entity here if needed
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    LeaveModule,
    EvaluationModule, // Ensure it's included
    TimeTrackingModule,
    ReportingModule,
  ],
})
export class AppModule {}
