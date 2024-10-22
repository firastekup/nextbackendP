import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceEvaluation } from './evaluation.schema';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(PerformanceEvaluation)
    private evaluationRepository: Repository<PerformanceEvaluation>,
  ) {}

  async createEvaluation(data: { employeeId: number; score: number; comments: string }): Promise<PerformanceEvaluation> {
    const evaluation = this.evaluationRepository.create(data);
    return this.evaluationRepository.save(evaluation);
  }

  async getEvaluations(employeeId: number): Promise<PerformanceEvaluation[]> {
    return this.evaluationRepository.find({ where: { employeeId } });
  }

  async updateEvaluation(id: number, updateData: Partial<PerformanceEvaluation>): Promise<PerformanceEvaluation> {
    await this.evaluationRepository.update(id, updateData);
    const updatedEvaluation = await this.evaluationRepository.findOne({ where: { id } });
    if (!updatedEvaluation) {
      throw new NotFoundException(`Evaluation with ID ${id} not found`);
    }
    return updatedEvaluation;
  }

  async deleteEvaluation(id: number): Promise<void> {
    const evaluation = await this.evaluationRepository.findOne({ where: { id } });
    if (!evaluation) {
      throw new NotFoundException(`Evaluation with ID ${id} not found`);
    }
    await this.evaluationRepository.delete(id);
  }
}
