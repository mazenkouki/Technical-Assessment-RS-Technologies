import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';

@Controller('patient')
export class PatientController {
  constructor(
    @InjectRepository(Patient) readonly patientRepository: Repository<Patient>,
  ) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientRepository.create(createPatientDto);
  }

  @Get()
  async findAll() {
    return await this.patientRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientRepository.findOne({ where: { id: +id } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientRepository.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientRepository.delete(+id);
  }
}
