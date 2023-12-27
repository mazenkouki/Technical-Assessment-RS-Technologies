import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty({ message: 'First name is required.' })
  @IsString({ message: 'First name must be a string.' })
  @MaxLength(50, {
    message: 'First name must be less than or equal to 50 characters.',
  })
  firstName: string;

  @IsNotEmpty({ message: 'Last name is required.' })
  @IsString({ message: 'Last name must be a string.' })
  @MaxLength(50, {
    message: 'Last name must be less than or equal to 50 characters.',
  })
  lastName: string;

  @IsOptional()
  @IsDate({ message: 'Date of birth must be a valid date.' })
  dateOfBirth?: Date;

  @IsOptional()
  @IsString({ message: 'Gender must be a string.' })
  @MaxLength(10, {
    message: 'Gender must be less than or equal to 10 characters.',
  })
  gender?: string;

  @IsOptional()
  @IsPhoneNumber(null, {
    message: 'Contact number must be a valid phone number.',
  })
  @MaxLength(15, {
    message: 'Contact number must be less than or equal to 15 characters.',
  })
  contactNumber?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @MaxLength(50, {
    message: 'Email must be less than or equal to 50 characters.',
  })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Address must be a string.' })
  @MaxLength(255, {
    message: 'Address must be less than or equal to 255 characters.',
  })
  address?: string;

  @IsOptional()
  @IsString({ message: 'Medical history must be a string.' })
  medicalHistory?: string;

  @IsOptional()
  @IsString({ message: 'Blood type must be a string.' })
  @MaxLength(5, {
    message: 'Blood type must be less than or equal to 5 characters.',
  })
  bloodType?: string;

  @IsOptional()
  @IsString({ message: 'Allergies must be a string.' })
  allergies?: string;

  @IsOptional()
  @IsString({ message: 'Medications must be a string.' })
  medications?: string;

  @IsOptional()
  @IsString({ message: 'Surgeries must be a string.' })
  surgeries?: string;

  @IsOptional()
  @IsString({ message: 'Chronic conditions must be a string.' })
  chronicConditions?: string;

  @IsOptional()
  @IsDate({ message: 'Last visit date must be a valid date.' })
  lastVisitDate?: Date;

  @IsOptional()
  @IsDate({ message: 'Next appointment date must be a valid date.' })
  nextAppointmentDate?: Date;
}
