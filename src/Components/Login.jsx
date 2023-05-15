import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {


    const navigate = useNavigate();

    const setUserCookie = (data) => {       
         Cookies.set("userDetailsCookie", "data");
         console.log(Cookies.get("userDetailsCookie"));
         navigate("/demo");
     };

    const handlesubmit = (e) => {
       
        e.preventDefault();
        console.log("function is working");
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        console.log(formData);
        
        axios
          .post(
            "/vendors/signIn",
            {
              data: formData,
            }
          )
          .then((res) => {
              
              setUserCookie(res);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }

 

  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <h1 style={{ textAlign: "center" }} className="mt-5">
          Login
        </h1>
        <form
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="form-group mb-3 ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="Password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        
      </div>
    </>
  );
}

export default Login