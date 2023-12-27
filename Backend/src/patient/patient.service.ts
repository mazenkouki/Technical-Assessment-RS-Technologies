// patients.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return await this.patientsRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientsRepository.findOne({where:{id}});
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient;
  }

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient = new Patient();
    patient.firstName = createPatientDto.firstName;
    patient.lastName = createPatientDto.lastName;
    patient.email = createPatientDto.email;
    patient.address = createPatientDto.address;
    patient.gender = createPatientDto.gender;
    patient.allergies = createPatientDto.allergies;
    patient.chronicConditions = createPatientDto.chronicConditions;
    patient.bloodType = createPatientDto.bloodType;
    patient.dateOfBirth = createPatientDto.dateOfBirth;
    patient.lastVisitDate = createPatientDto.lastVisitDate;
    patient.medicalHistory = createPatientDto.medicalHistory;
    patient.medications = createPatientDto.medications;
    patient.nextAppointmentDate = createPatientDto.nextAppointmentDate;
    patient.surgeries = createPatientDto.surgeries;
    return await this.patientsRepository.save(patient);
  }

  async update(id: number, updatePatientDto: CreatePatientDto): Promise<Patient> {
    const patient = await this.patientsRepository.preload({
      id: id,
      ...updatePatientDto,
    });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return await this.patientsRepository.save(patient);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.findOne(id);
    await this.patientsRepository.remove(patient);
  }
}
