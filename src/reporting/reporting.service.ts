import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeTracking } from '../time-tracking/TimeTracking-schema';
import { Leave } from '../leave/leave.schema';
import { User } from '../user/user.schema';

@Injectable()
export class ReportingService {
  constructor(
    @InjectRepository(TimeTracking)
    private timeTrackingRepository: Repository<TimeTracking>,
    @InjectRepository(Leave)
    private leaveRepository: Repository<Leave>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getEmployeeReport(employeeId: number) {
    const timeEntries = await this.timeTrackingRepository.find({ where: { employeeId } });
    const leaveEntries = await this.leaveRepository.find({ where: { employeeId } });
    
    // Calculate total hours worked
    const totalHours = timeEntries.reduce((total, entry) => total + entry.totalHours, 0);
    
    // Construct report
    return {
      employeeId,
      totalHoursWorked: totalHours,
      leaveRequests: leaveEntries.length,
      leaveDetails: leaveEntries,
      timeTrackingDetails: timeEntries,
    };
  }

  async getAllReports() {
    const users = await this.userRepository.find();
    const reports = [];

    for (const user of users) {
      const report = await this.getEmployeeReport(user.id);
      reports.push(report);
    }

    return reports;
  }
}
