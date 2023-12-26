import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
  gender?: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  contactNumber?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;

  @Column({ type: 'text', nullable: true })
  medicalHistory?: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  bloodType?: string;

  @Column({ type: 'text', nullable: true })
  allergies?: string;

  @Column({ type: 'text', nullable: true })
  medications?: string;

  @Column({ type: 'text', nullable: true })
  surgeries?: string;

  @Column({ type: 'text', nullable: true })
  chronicConditions?: string;

  @Column({ type: 'date', nullable: true })
  lastVisitDate?: Date;

  @Column({ type: 'date', nullable: true })
  nextAppointmentDate?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
