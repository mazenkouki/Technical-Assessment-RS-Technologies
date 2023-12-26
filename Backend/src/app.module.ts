import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { Patient } from './patient/entities/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      password: 'fcmazzeloff<3',
      username: 'mysql',
      entities: [Patient],
      database: 'Patients',
      synchronize: true,
      logging: true,
    }),
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
