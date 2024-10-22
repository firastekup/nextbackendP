import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeTracking } from './TimeTracking-schema';

@Injectable()
export class TimeTrackingService {
  constructor(
    @InjectRepository(TimeTracking)
    private timeTrackingRepository: Repository<TimeTracking>,
  ) {}

  async createTimeTracking(employeeId: number, startTime: Date, endTime: Date): Promise<TimeTracking> {
    const totalHours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60); // Convert milliseconds to hours
    const timeTracking = this.timeTrackingRepository.create({ employeeId, startTime, endTime, totalHours, status: 'pending' });
    return this.timeTrackingRepository.save(timeTracking);
  }

  async getTimeTrackings(): Promise<TimeTracking[]> {
    return this.timeTrackingRepository.find();
  }

  async updateTimeTracking(id: number, updateData: Partial<TimeTracking>): Promise<TimeTracking> {
    await this.timeTrackingRepository.update(id, updateData);
    return this.timeTrackingRepository.findOne({ where: { id } });
  }

  async deleteTimeTracking(id: number): Promise<void> {
    await this.timeTrackingRepository.delete(id);
  }
}
