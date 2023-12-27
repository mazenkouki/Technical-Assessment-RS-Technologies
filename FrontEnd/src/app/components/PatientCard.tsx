"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

// Add a type definition for the patient prop
type PatientInfo = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  contactNumber: string;
  email: string;
  address: string;
  medicalHistory: string;
  bloodType: string;
  allergies: string;
  medications: string;
  surgeries: string;
  chronicConditions: string;
  lastVisitDate: string;
  nextAppointmentDate: string;
};

export default function PatientCard({ patient }: { patient: PatientInfo }) {

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {patient.firstName} {patient.lastName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {patient.email}
            </h5>
          </div>
        </div>
        </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>Blood Type: {patient.bloodType}</p>
        <p>Allergies: {patient.allergies}</p>
        <p>Chronic Conditions: {patient.chronicConditions}</p>
        <p>Last Visit: {patient.lastVisitDate}</p>
        <p>Next Appointment: {patient.nextAppointmentDate}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <Button
          variant="bordered"
        >
          View Full Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

