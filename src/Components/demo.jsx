import React, {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Demo = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const userDetailsCookie = Cookies.get("userDetailsCookie");
    if (!userDetailsCookie) {
      navigate("/login");
    }
  }, [navigate]);
       const hi = () => {
         axios
           .get("/users/getInfo")
           .then((res) => {
               console.log(res);
           })
           .catch((err) => {
             console.log(err.message);
           });
       };
    
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            hi();
          }}
        >
          hi
        </button>
      </div>
    );
};

export default Demo;
