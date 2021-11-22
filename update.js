import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, {useEffect} from "react";
import swal from 'sweetalert'


  const Update = () => {

    const history = useHistory();
    const [user, setUser] = useState({
      name: "",
    
      username: "",
      password: "",
      balance:"",
  
     
     
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const updateAccount = () => {
 

      const { name,  username, password,balance} = user;
      if (name &&  username && password && balance ) 
      {
          console.log("in update")
        axios.put("http://localhost:8000/updateAccount",user).then((res) => {
          swal(res.data.message);
        });
      } 
      else {
        swal("Invalid Input");
      }
    };
  
    return ( 
  
        <section className="alert">
        <h1 style={{textAlign: 'center'}}><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg> LOGIN NOW</h1>
        <section className="login">
          <div className="center" id="login">
            <p>Dome user</p>
            <form action method="POST">
              <div className="txt_field">
              <input  type="text"
                    name="name"
                    value={user.name}
                    placeholder="Name"
                    
                     onChange={handleChange}
                />
                  <input  type="text"
                     name="balance"
                     placeholder="amount to send"
                    value={user.balance}
                    
                     onChange={handleChange}
                />
                <input  type="text"
                     name="username"
                    value={user.username}
                    
                     onChange={handleChange}
                />
                
                <span />
                <label>Username</label>
              </div>
              <div className="txt_field">
                <input type="password"
                name="password"
            value={user.password}
           
            onChange={handleChange} required />
                <span />
                <label>Password</label>
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="button" name="login" value="Login" onClick={updateAccount} />
              <div className="signup_link">
                Not a member? <a href="#">SignUp</a>
              </div> 
            </form>
          </div>
        </section>
        </section>
     );
}
 
export default Update;