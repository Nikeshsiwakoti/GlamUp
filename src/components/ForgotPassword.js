import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser"


const ForgotPassword = ({ handlePageState }) => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");

  
  const CheckEmail = (e) => {
    
    e.preventDefault();
    axios
      .post("http://localhost:1026/user/emailcheck",{email:email})
      .then((result) => {
       
        if (result.data) {
        console.log(result.data)
        console.log(e.target)
        emailjs.sendForm('service_pj1di14', 'template_7qbafs7', e.target, 'McXtoaXEf8EeCEwql')

        .then((result) => {
          console.log('2')
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Please Check your email',
              showConfirmButton: false,
              timer: 1500
            })
  
        });
       
            
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email does not exist',
          })
        }
      })
     
      
  };

  

  return (
    <div className="col-span-1 flex flex-col justify-center items-center">
      
      <h1 className="text-5xl font-semibold">Password Reset</h1>
      

      <div className="flex flex-col mt-[50px]">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b focus:outline-none"
          placeholder="Email"
        />
        <input 
        name="id"
        hidden= {true}
       />
        

        <button
          className="mt-16 bg-[#5E73E1] text-white font-semibold rounded-2xl py-3 w-28 mx-auto transition-all ease-in-out duration-300 hover:bg-blue-800 hover:-translate-y-3"
          onClick={CheckEmail}
        >
          Submit
        </button>
 
        
      </div>
    </div>
  );
};

export default ForgotPassword;
