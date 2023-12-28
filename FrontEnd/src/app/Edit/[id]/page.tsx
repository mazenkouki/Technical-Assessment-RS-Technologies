// pages/edit/[id].js
"use client";
import { useRouter } from 'next/navigation';
import { RiEdit2Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { PatientInfo } from '@/app/types';



const EditProfile: React.FC<{ params: { id: string } }> = ({ params }) => {
  const id = parseInt(params.id);
  const [patient, setPatient] = useState<PatientInfo | null>(null);
console.log(patient,"the patient");

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:3000/patient/${id}`);
        console.log(response, 'res');

        if (!response.ok) {
            const errorMessage = await response.text();


          throw new Error(`HTTP error! status: ${response.status + errorMessage}`);
        }
        const data: PatientInfo = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Could not fetch patients:', error);
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
        contactNumber,
        surgeries,
        dateOfBirth
      } = patient;
      try {
        const response = await fetch(`http://localhost:3000/patient/${id}`, {
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
            contactNumber,
            surgeries,
            dateOfBirth
          }),
        });

        if (!response.ok) {
          console.log(response, "respone ");

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Optionally, handle success (e.g., show a success message)
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
    <div className="md:w-2/4 my-[3%] mx-[20%] border shadow-md bg-neutral-50 p-4 relative">
           
      
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
          <input
type="text"
value={patient?.firstName || ''}
onChange={(e) => handleChange('firstName', e.target.value)}
/>
<input
type="text"
value={patient?.lastName || ''}
onChange={(e) => handleChange('lastName', e.target.value)}
/>

          <p className="font-primary font-bold text-lg text-primary"> Email </p>
          <input
type="text"
value={patient?.email || ''}
onChange={(e) => handleChange('email', e.target.value)}
/>          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Contact{" "}
          </p>
          <input
type="text"
value={patient?.contactNumber || ''}
onChange={(e) => handleChange('contactNumber', e.target.value)}
/>

          <p className="font-primary font-bold text-lg text-primary"> Date of birth </p>
          <input
type="text"
value={patient?.dateOfBirth || ''}
onChange={(e) => handleChange('dateOfBirth', e.target.value)}
/>        </div>
      </div>

      <div className="flex justify-start items-center gap-20 my-5">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto grid grid-cols-2 gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20">

          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Allergies
          </p>

          <input
type="text"
value={patient?.allergies || ''}
onChange={(e) => handleChange('allergies', e.target.value)}
/>          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Medications   
          </p>

          <input
type="text"
value={patient?.medications || ''}
onChange={(e) => handleChange('medications', e.target.value)}
/>
          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            chronic
          </p>

          <input
type="text"
value={patient?.chronicConditions || ''}
onChange={(e) => handleChange('chronicConditions', e.target.value)}
/>
          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            surgeries   
          </p>

          <p className="font-primary ">
          <input
type="text"
value={patient?.surgeries || ''}
onChange={(e) => handleChange('surgeries', e.target.value)}
/>          </p>
          
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-20 relative">
        <div className="bg-white p-5 w-[70%] mx-10 h-auto flex flex-col gap-5 justify-start items-start rounded-[8.89px] shadow border border-black border-opacity-20 font-primary relative">
          <p className=" font-bold text-lg text-primary"> Medical Histoy </p>

          <input
type="text"
value={patient?.medicalHistory || ''}
onChange={(e) => handleChange('medicalHistory', e.target.value)}
/>          <div className="flex justify-between gap-20 whitespace-nowrap ">
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

          <input
type="text"
value={patient?.lastVisitDate || ''}
onChange={(e) => handleChange('lastVisitDate', e.target.value)}
/>          
          </div>
          <div>
          <p className="font-primary font-bold text-lg text-primary">
            {" "}
            Next Appointment  
          </p>

          <input
type="text"
value={patient?.nextAppointmentDate || ''}
onChange={(e) => handleChange('nextAppointmentDate', e.target.value)}
/>
          
          </div>
        
       
        </div>
      </div>

      <div className="flex justify-end items-center gap-20">
        <button
          className="bg-primary text-white px-4 py-2 rounded-md"
          onClick={handleSave}
          disabled={!patient}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;


