

import { useState } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery'
import { useEffect } from "react"
import swal from 'sweetalert'



import axios from "axios";

function Signup() {

  
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
    repassword: "",
    account:"",
    dob:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, phone, username, password, repassword } = user;
    if (name && phone && username && password && (password == repassword)) {
      axios.post("http://localhost:8000/signuppage", user).then((res) => {
        swal(res.data.message);
        history.push("/");
      });
    } 
    if(!(password == repassword))
    {
      swal("Password doesn't match");
    }
    else {
      swal("Invalid Input");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">DOME BANKING</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/home">LOGIN</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="/aboutus">About us</a>
            </li>
        </ul>
        </div>
       
       </nav>
    <body class="d-flex h-100 text-center text-black bg-dark">
      
        <div className="modal modal-signin position-static d-block  py-5" tabIndex={-1} role="dialog" id="modalSignin">
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-6" style={{borderRadius: '1rem', border: 'none'}}>
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h2 className="fw-bold mb-0">Sign up for free</h2>
              </div>
              <div className="modal-body p-5 pt-0">
                <form className>
                  <div className="form-floating mb-3">
               <p>Name</p>   
          <input
            type="text"
            name="name"
            className="form-control rounded-4"
            value={user.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
                  </div>
                  <div className="form-floating mb-3">
                  <p>Mobile Number</p>
          <input
            type="text"
            name="phone"
            value={user.phone}
            placeholder="Enter Mobile Number"
            className="form-control rounded-4"
            onChange={handleChange}
          />
                  </div>
                  <div className="form-floating mb-3">
                  <p>Username</p>
          <input
            type="text"
            name="username"
            value={user.username}
            className="form-control rounded-4"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control rounded-4"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <p>Confirm Password</p>

          <input
            type="password"
            name="repassword"
            value={user.repassword}
            className="form-control rounded-4"
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
          <p>Account Number</p>
          <input
            type="password"
            name="account"
            value={user.account}
            className="form-control rounded-4"
            placeholder="account no"
            onChange={handleChange}
          />
          <p>Date of Birth</p>
          <input
            type="password"
            name="dob"
            value={user.dob}
            className="form-control rounded-4"
            placeholder="dob"
            onChange={handleChange}
          />
          </div>
                  <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" onClick={register}>Sign up</button>
                  <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
        
        
      
      </body>
 
    
      
      
    </div>
  );
}

export default Signup;