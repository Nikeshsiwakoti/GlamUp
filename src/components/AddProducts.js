import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../pages/Dashboard/dash.css";
import { Link } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
export const AddProducts = () => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  const [prodata, setProdata] = useState([]);

  const [brandname, setBrandname] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setimage] = useState("");



  const addproduct = (e) => {
    e.preventDefault();

    const adata = new FormData();


    adata.append("brandname", brandname);
    adata.append("name", name);
    adata.append("description", description);
    adata.append("category", category);
    adata.append("price", price);
    adata.append("image", image);

    console.log(adata);
    axios
      .post("http://localhost:1026/products/add", adata)
      .then((result12) => {
        console.log(result12.data.success);
        if (result12.data.success) {
        }
        alert("Product Added succsessfullly!!");
      })
      .catch();
  };

  useEffect(() => {
    axios
      .get("http://localhost:1026/products/get")
      .then((result) => {
        console.log(result.data);
        setProdata(result.data);
      })

      .catch((e) => {
        console.log("something went wrong");
      });
  }, []);


  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">

          <div className="list-group list-group-flush my-3">
            <Link
              to="/dashboard"
              className="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i className="fas fa-tachometer-alt me-2" />
              Dashboard
            </Link>
          </div>
          <div className="list-group-item list-group-item-action bg-transparent second-text fw-bold  ">
            <p> Interface</p>
            <Link
              to="/profileadmin"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-gift me-2" />
              View Profile
            </Link>
            <Link
              to="/invoice"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-comment-dots me-2" /> View Registered User
            </Link>
            <Link
              to="/booking"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-map-marker-alt me-2" />
              View Worker
            </Link>
            <Link
              to="/addworker"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-map-marker-alt me-2" />
              Add Worker
            </Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              />
              <h2 className="fs-2 m-0">Add Products Here</h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle second-text fw-bold"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2" />
                    Admin
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/userprofile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>


          <div className="container mt-3">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <form action="" id="addworkerform">
                  <h1 className="custom-heading-h2 p-3 ml-5">Add Cook </h1>



                  <div className="form-group">
                    <input
                      type="text"
                      id="lastname"
                      className="form-control"
                      placeholder="brandname"
                      value={brandname}
                      onChange={(e) => setBrandname(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                      id="phone"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="description"
                      id="gender"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="description"
                      id="gender"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setimage(e.target.files[0])}
                    />
                  </div>
                  <button
                    type="submit"
                    id="worker"
                    className="btn btn-dark ml-5"
                    onClick={addproduct}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <h4 className="text-center mt-5">Added Products </h4>
              {prodata.map((singleData) => {
                return (
                  <div className="col-md-4 mt-5 ">
                    <div className="col-md-4 view">
                      <img
                        src={"http://localhost:1026/" + singleData.image}
                        className="img-fluid "
                      />
                      <p>
                        {singleData.name}
                      </p>

                      <p>{singleData.brandname} </p>
                      <p>{singleData.description} </p>
                      <p> {singleData.category}</p>
                      <p> {singleData.price}</p>
                      <Link to="#">
                        <i class="fa fa fa-times text-danger fs-4 "></i>
                      </Link>



                    </div>
                    <Link to={"/updateproduct/" + singleData._id} ><button type="button" class="btn btn-warning ml-5 mt-2">Update</button></Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* /#page-content-wrapper */}
    </>
  );
};
export default AddProducts;