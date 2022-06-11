import { useNavigate } from "react-router-dom";
import React, { useState} from "react";
import axios from "axios";
import Navbar from "../Navbar"
import "./UserProfile.css";

const ProfileScreen = () => {
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
      // get user form the token
      const token_data = localStorage.getItem("token")
      const token = parseJwt(token_data)
      const user = token
      console.log(user)



    return (
        <div >
        <Navbar/>
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
<div className="col-xl-6 col-md-12">
<div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
                <div className="col-md-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                        <div className="m-b-25">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className="img-radius" alt="User-Profile-Image"/>
                        </div>
                        <h6 className="f-w-600">{user.username}</h6>
                        <p></p>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">User Information</h6>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="m-b-4 f-w-600">Email</p>
                                <h6 className="text-muted m-b-10 f-w-400">{user.email}</h6>
                            </div>
                        </div>
                        <p className="m-b-4 f-w-600">Contact number</p>
                        <h6 className="text-muted m-b-10 f-w-400">{user.contact}</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="m-b-4 f-w-600">Address</p>
                                <h6 className="text-muted f-w-400">{user.address}</h6>
                            </div>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    </div></div>
    );
  };
  export default ProfileScreen;