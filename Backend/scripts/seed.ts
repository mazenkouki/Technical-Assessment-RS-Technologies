// scripts/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { PatientService } from '../src/patient/patient.service';
import { patientSeed } from '../src/seeds/patient-seed';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const patientService = app.get(PatientService);

  for (const patientData of patientSeed) {
    try {
      await patientService.create(patientData);
    } catch (error) { 
      console.error('Error seeding patient:', patientData, error);
    }
  }

  await app.close();
  console.log('Seeding complete!');
}

bootstrap().catch((error) => {
  console.error('Seeding failed:', error);
});
