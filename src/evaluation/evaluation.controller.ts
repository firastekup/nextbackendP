import { Controller, Post, Body, Get, Param, Patch, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { PerformanceEvaluation } from './evaluation.schema';

@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post()
  async createEvaluation(@Body() evaluationData: { employeeId: number; score: number; comments: string }): Promise<PerformanceEvaluation> {
    return this.evaluationService.createEvaluation(evaluationData);
  }

  @Get()
  async getEvaluations(@Query('employeeId', ParseIntPipe) employeeId: number): Promise<PerformanceEvaluation[]> {
    return this.evaluationService.getEvaluations(employeeId);
  }

  @Patch(':id')
  async updateEvaluation(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<PerformanceEvaluation>): Promise<PerformanceEvaluation> {
    const updatedEvaluation = await this.evaluationService.updateEvaluation(id, updateData);
    if (!updatedEvaluation) {
      throw new NotFoundException(`Evaluation with ID ${id} not found`);
    }
    return updatedEvaluation;
  }

  @Delete(':id')
  async deleteEvaluation(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const result = await this.evaluationService.deleteEvaluation(id);
    if (result === undefined) {
      throw new NotFoundException(`Evaluation with ID ${id} not found`);
    }
  }
}
