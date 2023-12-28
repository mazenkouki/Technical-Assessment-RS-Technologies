"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { PatientInfo } from "../types";
import { useRouter } from "next/navigation";
// Add a type definition for the patient prop


export default function PatientCard({ patient }: { patient: PatientInfo }) {
  const router = useRouter()
    const { theme } = useTheme(); 
    const buttonStyle = {
        left:150,
        borderColor: theme === 'light' ? '#ef4444' : '#14b8a6',
      };
      const avatarStyle = {
        border: theme === 'light' ? '2px solid #ef4444' : '2px solid #14b8a6',
      };
  return (
    <Card className="w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
        <Avatar
            isBordered
            radius="full"
            size="lg"
           name={patient.firstName}
           src=""
           className=""
            style={avatarStyle} 
          />          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {patient.firstName} {patient.lastName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {patient.email}
            </h5>
          </div>
        </div>
        </CardHeader>
      <CardBody className="px-3 py-0 text-slate-800 text-small dark:text-white ">
        <p>Blood Type: {patient.bloodType}</p>
        <p>Allergies: {patient.allergies}</p>
        <p>Chronic Conditions: {patient.chronicConditions}</p>
        <p>Last Visit: {patient.lastVisitDate}</p>
        <p>Next Appointment: {patient.nextAppointmentDate}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <Button

          variant="bordered"
          style={buttonStyle} 
  onClick={()=>router.push(`/PatientDetails/${patient.id}`)}
        >
         More insights
        </Button>
      </CardFooter>
    </Card>
  );
}

