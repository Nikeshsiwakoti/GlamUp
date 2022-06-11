import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUsPage";
import ProductView from "./components/ProductView";
import ContactPage from "./components/Contact";
import CategoryPage from "./components/CategoryPage";
import UserProfile from "./components/UserProfile/UserProfile"
import Otp from "./components/otp/Otp";
import axios from 'axios';
import { Cartprovider } from "./components/Context/CardContext";
import Cart from "./components/Cart/Cart";
import Dashboard from "./pages/Dashboard/AdminDashboard";
import SearchBar from "./components/Search/SearchBarSection";
import ForgotPassword from "./components/ForgotPassword";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token')
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cartprovider>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<App />}></Route>
        <Route exact path="/contactus" element={<ContactUs />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route exact path="/contactus" element={<ContactUs />}></Route>
        <Route exact path="/productview/:id" element={<ProductView />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
        <Route exact path="/category" element={<CategoryPage />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/user" element={<UserProfile />}></Route>
        <Route exact path="/otp" element={<Otp />}></Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
      </Cartprovider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
