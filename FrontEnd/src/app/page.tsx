import PatientCard from "./components/PatientCard";

export default function Home() {
  const patientData = {
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "1975-04-23",
    gender: "F",
    contactNumber: "+12345678901",
    email: "alice.johnson@example.com",
    address: "123 Cherry Lane, Springfield, SP",
    medicalHistory: "No known allergies. Previous surgery for appendicitis.",
    bloodType: "A+",
    allergies: "None",
    medications: "Ibuprofen as needed",
    surgeries: "Appendectomy",
    chronicConditions: "Hypertension",
    lastVisitDate: "2023-03-15",
    nextAppointmentDate: "2023-09-10",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-10 pl-5 pr-5 gap-5 dark:bg-neutral-900">
      <div>
        <PatientCard patient={patientData} />
      </div>
    </main>
  );
}
