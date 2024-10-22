import { Controller, Get, Param } from '@nestjs/common';
import { ReportingService } from './reporting.service';

@Controller('reporting')
export class ReportingController {
  constructor(private readonly reportingService: ReportingService) {}

  @Get(':employeeId')
  async getEmployeeReport(@Param('employeeId') employeeId: number) {
    return this.reportingService.getEmployeeReport(employeeId);
  }

  @Get()
  async getAllReports() {
    return this.reportingService.getAllReports();
  }
}
