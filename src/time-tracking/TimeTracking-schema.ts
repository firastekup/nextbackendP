import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TimeTracking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  totalHours: number;

  @Column({ nullable: true })
  status: string; // e.g., 'approved', 'pending', 'rejected'
}
