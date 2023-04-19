import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
   const[credential, setCredential]=useState({email:'',password:''})
  
   // eslint-disable-next-line no-undef
    let navigate = useNavigate();
    const handleSubmit=async (e)=>{
     e.preventDefault();
     const res = await fetch("http://localhost:5000/api/auth/loginuser", {
       method: "POST",
       headers: {
         "content-Type": "application/json"
       },
       body: JSON.stringify({
         email: credential.email,
         password: credential.password,
       }),
     });
     const json=await res.json()
     console.log(json);
     if(json.success)
     {
      //save the usrname and password and redirect to home page
      localStorage.setItem("tokan", json.authtokan);
      navigate("/");                //using useNavigation for navigate to home page
     }
     else {alert("Invalid username and password");}
    }

    const onchange=(e)=>{
        setCredential({...credential,[e.target.name]: e.target.value}); 
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <h2 className="my-2">Login your account to use iNotebook</h2>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={onchange}
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={credential.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onchange}
            name="password"
            className="form-control"
            id="Password"
            value={credential.password}
          />
        </div>
        <button disabled={credential.email.length<5 || credential.password.length<3} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
