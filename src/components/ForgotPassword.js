import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const ForgotPassword = ({ handlePageState }) => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
   
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  

  return (
    <div className="col-span-1 flex flex-col justify-center items-center">
      {console.log(user)}
      <h1 className="text-5xl font-semibold">Password Reset</h1>
      

      <div className="flex flex-col mt-[50px]">
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handelChange}
          className="bg-transparent border-b focus:outline-none"
          placeholder="Email"
        />
        

        <button
          className="mt-16 bg-[#5E73E1] text-white font-semibold rounded-2xl py-3 w-28 mx-auto transition-all ease-in-out duration-300 hover:bg-blue-800 hover:-translate-y-3"
          
        >
          Submit
        </button>
 
        
      </div>
    </div>
  );
};

export default ForgotPassword;
