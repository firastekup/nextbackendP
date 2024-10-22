import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { TimeTrackingService } from './time-tracking.service';
import { TimeTracking } from './TimeTracking-schema';

@Controller('time-tracking')
export class TimeTrackingController {
  constructor(private readonly timeTrackingService: TimeTrackingService) {}

  @Post()
  async createTimeTracking(
    @Body() timeTrackingData: { employeeId: number; startTime: Date; endTime: Date }
  ): Promise<TimeTracking> {
    return this.timeTrackingService.createTimeTracking(
      timeTrackingData.employeeId,
      timeTrackingData.startTime,
      timeTrackingData.endTime
    );
  }

  @Get()
  async getTimeTrackings(): Promise<TimeTracking[]> {
    return this.timeTrackingService.getTimeTrackings();
  }

  @Patch(':id')
  async updateTimeTracking(
    @Param('id') id: number,
    @Body() updateData: Partial<TimeTracking>
  ): Promise<TimeTracking> {
    return this.timeTrackingService.updateTimeTracking(id, updateData);
  }

  @Delete(':id')
  async deleteTimeTracking(@Param('id') id: number): Promise<void> {
    return this.timeTrackingService.deleteTimeTracking(id);
  }
}
