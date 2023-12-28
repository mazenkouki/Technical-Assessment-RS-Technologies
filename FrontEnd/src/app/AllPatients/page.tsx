"use client";
import React, { useEffect, useState } from 'react';
import PatientCard from '../components/PatientCard';
import { PatientInfo } from '../types/index';


const AllPatients: React.FC = () => {
  const [patients, setPatients] = useState<PatientInfo[]>([]);
  const url =  process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${url}/getAll`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PatientInfo[] = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Could not fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-20 dark:bg-neutral-900">
    <div className="inline-grid grid-cols-4 gap-20">
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
    </main>
  );
};

export default AllPatients;