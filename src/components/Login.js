import React,{ useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({ email:"", password:""})
  let history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
  
      },
      body: JSON.stringify({email, password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      history.push("/");
    }
    else{
      alert("invalid credentials")
    } 
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </>
  );
};
