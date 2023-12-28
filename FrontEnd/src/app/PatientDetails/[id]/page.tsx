"use client"
import Link from 'next/link';
import { PatientInfo } from "../../types/index";
import { RiEdit2Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';



const Profile: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter()
const id = params.id
const [patient, setPatient] = useState<PatientInfo | null>(null);
useEffect(()=>{
  const fetchPatient= async () => {
    try {
      const response = await fetch("http://localhost:3000/patient/"+id);
      console.log(response, "res");

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
},[])
  return (
    <div className="md:w-2/4 my-[3%] mx-[20%] border shadow-md bg-neutral-50 p-4 relative">
           
      <div
        className="absolute top-[2%] right-[2%] cursor-pointer"
        title="edit"
        onClick={() => router.push('/Edit/' + patient?.id)}
      >
        <RiEdit2Fill size={30} />
      </div>
    

      <div className="flex justify-center items-center gap-20 my-5">
        <img
          className="w-[130px] h-[130px] rounded-full shadow border border-primary"
          src="../../../public/user.jpg"
          alt="User Profile"
        />

        <div className="p-5 bg-white w-[50%] h-auto flex flex-col justify-center items-start rounded-[8.89px] shadow border border-black border-opacity-20">
          <p className="font-primary font-bold text-lg text-primary">
            Full Name
          </p>
          <p className="font-primary">{patient?.firstName + " " + patient?.lastName}</p>
          <p className="font-primary font-bold text-lg text-primary"> Email </p>
          <p className="font-primary ">{patient?.email || "empty"}</p>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Contact{" "}
          </p>
          <p className="font-primary">{patient?.contactNumber || "empty"}</p>

          <p className="font-primary font-bold text-lg text-primary"> Date of birth </p>
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

          <p className="font-primary ">
{patient?.allergies || "empty"}       </p>
          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Medications   
          </p>

          <p className="font-primary ">
           {patient?.medications||"empty"}
          </p>
          
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

          <p className="font-primary ">
           {patient?.surgeries ||"empty"}
          </p>
          
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-20 relative">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto flex flex-col gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20 font-primary relative">
          <p className=" font-bold text-lg text-primary"> Medical Histoy </p>

            <p className="font-primary">{patient?.medicalHistory || "empty"}</p>
          <div className="flex justify-between gap-20 whitespace-nowrap ">
          </div>
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
{patient?.lastVisitDate || "empty"}       </p>
          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Next Appointment  
          </p>

          <p className="font-primary ">
           {patient?.nextAppointmentDate||"empty"}
          </p>
          
          </div>
        
       
        </div>
      </div>

    </div>
  );
};

export default Profile;
