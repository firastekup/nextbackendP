import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PerformanceEvaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  score: number; // e.g., 1 to 5

  @Column({ nullable: true })
  comments: string;
}
