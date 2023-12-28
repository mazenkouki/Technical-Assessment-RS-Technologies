// pages/edit/[id].js
"use client";
import { useEffect, useState } from "react";
import { PatientInfo } from "@/app/types";
import { Input, Button, Avatar } from "@nextui-org/react";
import { toast } from 'react-toastify';

const EditProfile: React.FC<{ params: { id: string } }> = ({ params }) => {
  const id = parseInt(params.id);
  const [patient, setPatient] = useState<PatientInfo | null>(null);
  const url = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`${url}/${id}`);

        if (!response.ok) {
          const errorMessage = await response.text();

          throw new Error(
            `HTTP error! status: ${response.status + errorMessage}`
          );
        }
        const data: PatientInfo = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Could not fetch patients:", error);
      }
    };

    fetchPatient();
  }, [id]);

  const handleSave = async () => {
    if (patient) {
      const {
        firstName,
        lastName,
        email,
        lastVisitDate,
        nextAppointmentDate,
        allergies,
        medicalHistory,
        medications,
        gender,
        surgeries,
        dateOfBirth,
      } = patient;
      try {
        const response = await fetch(`${url}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            lastVisitDate,
            nextAppointmentDate,
            allergies,
            medicalHistory,
            medications,
            gender,
            surgeries,
            dateOfBirth,
          }),
        });
        if (response.ok) {
          // i wanted to use react toastify but the time wasn't enough
          alert("succesfully updated");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Could not save patient data:", error);
      }
    }
  };

  const handleChange = (attribute: keyof PatientInfo, value: string) => {
    setPatient((prev) => {
      if (prev) {
        return {
          ...prev,
          [attribute]: value,
        };
      }
      return prev;
    });
  };

  return (

    //this component should've been a collection of reusable components but i didn't have time to do it.
    <main className=" dark:bg-black/50">
      <div
        className="md:w-2/4  mx-[20%] border shadow-md p-4 relative  bg-gradient-to-r from-red-100 to-red-400 dark:from-blue-100 dark:to-teal-400
"
      >
        {" "}
        <div className="flex justify-center items-center gap-20 my-5">
          <Avatar
            src=""
            className="w-40 h-40 text-large"
            name={patient?.firstName}
          />

          <div className="p-5 bg-neutral-100 w-[50%] h-auto flex flex-col justify-center items-start rounded-[8.89px] shadow border border-black border-opacity-20">
            <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
              Full Name
            </p>
            <Input
              type="text"
              label="first name"
              variant="bordered"
              value={patient?.firstName || ""}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="max-w-xs"
            />
            <Input
              type="text"
              label="last name"
              variant="bordered"
              value={patient?.lastName || ""}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="max-w-xs"
            />
            <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
              Email{" "}
            </p>
            <Input
              type="email"
              label="email"
              variant="bordered"
              value={patient?.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="max-w-xs"
            />
            <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
              {" "}
              Gender{" "}
            </p>
            <Input
              type="text"
              label="gender"
              variant="bordered"
              value={patient?.gender || ""}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="max-w-xs"
            />
            <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
              {" "}
              Date of birth{" "}
            </p>
            <Input
              type="date"
              label="date of birth"
              variant="bordered"
              value={patient?.dateOfBirth || ""}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="max-w-xs"
            />{" "}
          </div>
        </div>
        <div className="flex justify-start items-center gap-20 my-5">
          <div className="bg-neutral-100 p-5 w-[70%] mx-10 h-auto grid grid-cols-2 gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20">
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                Allergies
              </p>

              <Input
                type="text"
                label="allergies"
                variant="bordered"
                value={patient?.allergies || ""}
                onChange={(e) => handleChange("allergies", e.target.value)}
                className="max-w-xs"
              />
            </div>
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                Medications
              </p>

              <Input
                type="text"
                label="medications"
                variant="bordered"
                value={patient?.medications || ""}
                onChange={(e) => handleChange("medications", e.target.value)}
                className="max-w-xs"
              />
            </div>
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                chronic
              </p>

              <Input
                type="text"
                label="chronic"
                variant="bordered"
                value={patient?.chronicConditions || ""}
                onChange={(e) =>
                  handleChange("chronicConditions", e.target.value)
                }
                className="max-w-xs"
              />
            </div>
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                surgeries
              </p>

              <p className="font-primary ">
                <Input
                  type="text"
                  label="surgeries"
                  variant="bordered"
                  value={patient?.surgeries || ""}
                  onChange={(e) => handleChange("surgeries", e.target.value)}
                  className="max-w-xs"
                />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-20 relative">
          <div className="bg-neutral-100 p-5 w-[70%] mx-10 h-auto flex flex-col gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20 font-primary relative">
            <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
              Medical Histoy{" "}
            </p>
            <Input
              type="text"
              label="medical history"
              variant="bordered"
              value={patient?.medicalHistory || ""}
              onChange={(e) => handleChange("medicalHistory", e.target.value)}
              className="max-w-xs"
            />{" "}
            <div className="flex justify-between gap-20 whitespace-nowrap "></div>
            <div></div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-20 my-5">
          <div className="bg-neutral-100 p-5 w-[70%] mx-10 h-auto grid grid-cols-2 gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20">
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                Last visit
              </p>

              <Input
                type="date"
                label="last visit"
                variant="bordered"
                value={patient?.lastVisitDate || ""}
                onChange={(e) => handleChange("lastVisitDate", e.target.value)}
                className="max-w-xs"
              />
            </div>
            <div>
              <p className="font-primary font-bold text-lg text-red-500 dark:text-primary">
                {" "}
                Next Appointment
              </p>

              <Input
                type="date"
                label="next appointment"
                variant="bordered"
                value={patient?.nextAppointmentDate || ""}
                onChange={(e) =>
                  handleChange("nextAppointmentDate", e.target.value)
                }
                className="max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-20">
          <Button
            onClick={handleSave}
            className="bg-neutral-100 dark:bg-primary text-black  dark:text-white px-4 py-2 rounded-md"
            disabled={!patient}
            variant="solid"
          >
            Save
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
