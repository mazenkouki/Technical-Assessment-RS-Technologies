"use client"

import { PatientInfo } from "../types/index";
import { RiEdit2Fill } from "react-icons/ri";

interface ProfileProps {
  patient : PatientInfo | null;
  switcher: (view: "edit") => void;
}

const Profile: React.FC<ProfileProps> = ({ switcher,patient }) => {

  return (
    <div className="md:w-2/4 my-[3%] mx-[5%] border shadow-md bg-neutral-50 p-4 relative">
      <div
        className="absolute top-[2%] right-[2%] cursor-pointer"
        title="edit"
        onClick={() => {
          switcher("edit");
        }}
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
    </div>
  );
};

export default Profile;
