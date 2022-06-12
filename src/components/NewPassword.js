import React from 'react'
import { useState } from "react";
import axios from "axios";
import {Link,useNavigate,useParams, useSearchParams} from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Newpassword() {

  const [password, setPassword] = useState("");
  
  
  
  
  const [email, setEmail]= useSearchParams();

  const updatePassword=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:1026/user/updatepassword",{email:email.get('email'),password:password})
    .then(result=>{
    if(result.data){
        Swal.fire({
            icon: 'success',
            title: 'Password updated Successfully',
            showConfirmButton: false,
            timer: 1500
          })
       }
       else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email does not exist',
          })
       }
      
      
     })

  }

  return (
    <div>
        
       
        <div class="wrapper " >
      <div class="inner">
        <div>
        <form action="" id="registerForm">
          <h3>Add New Password</h3>
          

                    <div class="form-wrapper">
            
            <input type="password" class="form-control"
                                     name="password"
                                    id="password"
                                    placeholder="Add New Password"
                                    value={password}
                                    required
                                     onChange={(e) => setPassword(e.target.value)}
                        />
          </div>
          
        
          
          
          
          <button 
                    className='fogotpsw'
                     type="submit"
                     id="signup"
                     onClick={updatePassword}
                  >Submit</button>
                 
        </form></div>
     
        
        
      </div>
      
    </div>

    </div>
  )
}