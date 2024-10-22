// evaluation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { EvaluationController } from './evaluation.controller';
import { EvaluationService } from './evaluation.service';
import { PerformanceEvaluation } from './evaluation.schema'; // Import the entity

@Module({
  imports: [TypeOrmModule.forFeature([PerformanceEvaluation])], // Register the entity
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {}
