import React, { useState, FormEvent } from "react";

import "../css/Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Loginpage() {
  // States for username, password, and error handling
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCred, setWrongCred] = useState(""); // For incorrect credentials
  const navigate=useNavigate();

  // Handle login
  function goToHome(e: FormEvent) {
    e.preventDefault();
    console.log("login button pressed!!!!!!");
    console.log("username--->" + userName);
    console.log("password--->" + password);

    // Make the API call to verify user credentials
    axios.get("http://localhost:8080/LoginDetails/get?userName=" + userName + "&password=" + password).then((res) => {
      console.log("response--->" + res.data);
      if (res.data == true) {
        console.log("login successfull");
        alert("Login Successfully ");
        navigate('/home');
      }else 
      setWrongCred("Credentials are not correct")


    });
  }

  return (
    <div   >
     
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  {/* Email Input */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Email"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>

                  {/* Error message */}
                  {wrongCred && <p className="text-danger">{wrongCred}</p>}

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="/forgetpass">
                      Forgot password?
                    </a>
                  </p>

                  {/* Login Button */}
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    onClick={goToHome}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/Signup" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
