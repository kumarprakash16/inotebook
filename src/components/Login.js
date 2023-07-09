import React,{ useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
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
      localStorage.setItem('auth-token', json.authToken); 
      props.showAlert("Logged in Successfully","success"); 
      history.push("/");
      
    }
    else{
      props.showAlert("Invalid Details","danger");
    } 
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="mt-3">
    <h2>Login To iNotebook</h2>
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
      </div>
    </>
  );
};
