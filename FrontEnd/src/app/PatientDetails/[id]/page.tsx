"use client";
import { PatientInfo } from "../../types/index";
import { RiEdit2Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";

const Profile: React.FC<{ params: { id: string } }> = ({ params }) => {
  const url =  process.env.NEXT_PUBLIC_API_URL
  
  const router = useRouter();
  const id = params.id;
  const [patient, setPatient] = useState<PatientInfo | null>(null);
useEffect(() => {
  const fetchPatient = async () => {
    try {
      const response = await fetch(`${url}/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);  
      }
      const data: PatientInfo = await response.json();
      setPatient(data);
    } catch (error) {
      console.error("Could not fetch patients:", error);
    }
  };
  fetchPatient();
}, [id]);
  return (
    <main className=" dark:bg-black/50">
    <div className="md:w-2/4  mx-[20%] border shadow-md py-20 px-20 relative  bg-gradient-to-r from-red-100 to-red-400 dark:from-blue-100 dark:to-teal-400
">
      <div
        className="absolute top-[2%] right-[2%] cursor-pointer"
        title="edit"
        onClick={() => router.push("/Edit/" + patient?.id)}
      >
        <RiEdit2Fill size={30} />
      </div>

      <div className="flex justify-center items-center gap-20 my-5">
        <Avatar
          src=""
          className="w-40 h-40 text-large"
          name={patient?.firstName}
        />

        <div className="p-5 bg-white w-[50%] h-auto flex flex-col justify-center items-start rounded-[8.89px] shadow border border-black border-opacity-20">
          <p className="font-primary font-bold text-lg text-primary">
            Full Name
          </p>
          <p className="font-primary">
            {patient?.firstName + " " + patient?.lastName}
          </p>
          <p className="font-primary font-bold text-lg text-primary"> Email </p>
          <p className="font-primary ">{patient?.email || "empty"}</p>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Gender{" "}
          </p>
          <p className="font-primary">{patient?.gender || "empty"}</p>

          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Date of birth{" "}
          </p>
          <p className="font-primary ">{patient?.dateOfBirth || "empty"}</p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-20 my-5">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto grid grid-cols-2 gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20">
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              Allergies
            </p>

            <p className="font-primary ">{patient?.allergies || "empty"} </p>
          </div>
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              Medications
            </p>

            <p className="font-primary ">{patient?.medications || "empty"}</p>
          </div>
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              chronic
            </p>

            <p className="font-primary ">
              {patient?.chronicConditions || "empty"}
            </p>
          </div>
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              surgeries
            </p>

            <p className="font-primary ">{patient?.surgeries || "empty"}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-20 relative">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto flex flex-col gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20 font-primary relative">
          <p className=" font-bold text-lg text-primary"> Medical Histoy </p>

          <p className="font-primary">{patient?.medicalHistory || "empty"}</p>
          <div className="flex justify-between gap-20 whitespace-nowrap "></div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-20 my-5">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto grid grid-cols-2 gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20">
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              Last visit
            </p>

            <p className="font-primary ">
              {patient?.lastVisitDate || "empty"}{" "}
            </p>
          </div>
          <div>
            <p className="font-primary font-bold text-lg text-primary">
              {" "}
              Next Appointment
            </p>

            <p className="font-primary ">
              {patient?.nextAppointmentDate || "empty"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Profile;
