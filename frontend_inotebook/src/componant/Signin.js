import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Signin = () => {
   const[credential, setCredential]=useState({name:'',email:'',password:'',cpassword:''})

    let navigate = useNavigate();
    const handleSubmit=async (e)=>{
      e.preventDefault();
      //const { name, email, password } = credential;
      const res = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credential.name,
          email: credential.email,
          password: credential.password,
        }),
      });
      const json = await res.json();
      console.log(json);

      //save the usrname and password and redirect to home page
      localStorage.setItem("tokan", json.authtokan);;
      navigate("/"); //using useNavigation for navigate to home page
    }
    
  const onchange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2 className="my-2">Create an account to use iNotebook</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Name
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={onchange}
            minLength={5}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onchange}
            minLength={5}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="password"
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
