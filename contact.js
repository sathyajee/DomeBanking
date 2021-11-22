import { useState } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery'
import { useEffect } from "react"
import swal from 'sweetalert'






import axios from "axios";
  const Contact = () => {

    useEffect(()=>{
      $('#body').css({
        'padding' : '25px',
        'background-image' : "url(./contact.jpg)"
      });
      
      $('#in:focus').css({
        'outline' : 'none'
      });
      
      $('#form').css({
        'width' : '35%',
        'margin-left' : 'auto',
        'margin-right' : 'auto',
        'padding' : '50px',
        'background' : 'whitesmoke',
        'border-radius' : '5px',
        'position' : 'relative',
        'font-family' : 'Libre Franklin, sans-serif'
      });
      
      $('#form > div').css({
        'float' : 'left',
        'margin-bottom' : '30px'
      });
      
      $('#form > div > p').css({
        'font-size' : '12px',
        'margin-bottom' : '3px'
      });
      
      $('#form > div > input').css({
        'font-size' : '12px',
        'letter-spacing' : '1px',
        'padding' : '5px',
        'border' : '0',
        'background' : 'whitesmoke',
        'border-bottom' : '1px solid silver',
        'width' : '100%',
        'color' : 'gray'
      });
      
      $('#form > p:last-of-type').css({
        'text-align' : 'center',
        'padding-top' : '50px',
        'display' : 'table',
        'width' : '100%',
        'color' : 'white'
      });
      
      $('#form > p:last-of-type > a').css({
        'cursor' : 'pointer',
        'border' : '0',
        'padding' : '10px 25px',
        'background' : 'silver',
        'border-radius' : '28px',
        'font-size' : '12px'
      });
      
      $('.term').css({
        'padding-top' : '40px',
        'display' : 'flex',
        'width' : '100%',
        'align-items' : 'center'
      });
      
      $('.term > i').css({
        'cursor' : 'pointer',
        'width' : '20px'
      });
      
      $('.term > span').css({
        'font-size' : '12px'
      });
      
      $('#form > a:last-of-type').css({
        'position' : 'absolute',
        'bottom' : '10px',
        'right' : '15px',
        'font-size' : '10px',
        'letter-spacing' : '1px',
        'font-style' : 'italic'
      });
      
    });
	const history = useHistory();
	const [user, setUser] = useState({
		firstname:"",
        lastname:"",
        phone: "",
        gmail:"",
        message: "",
	});
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setUser({
		...user,
		[name]: value,
	  });
	};
  
	const send = () => {
	  const { firstname,
	  lastname,
	  phone,
	  gmail,
	  message } = user;
	  if(message)
		axios.post("http://localhost:8000/contact", user).then((res) => {
		  swal(res.data.message);
		});
	  
	  else {
		swal("Unable to send message ");
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
        <form class="form-inline my-2 my-lg-0">
            
        </form>
        </div>
    </nav>

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
      a matter of hours to help you.</p>
    <div style={{display: 'flex', width: '100%'}}>
  
      <form id="form">
        <div style={{width: '100%'}}>
          <p>First Name</p>
          <input id="first-name" class="input100" type="text" name="firstname"  value={user.firstname} onChange={handleChange}  placeholder="First name"></input>
        </div>
        <div style={{width: '100%'}}>
          <p>Last Name</p>
         
          <input class="input100" type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Last name"></input>
          
        </div>
        <div style={{width: '47%'}}>
          <p>EMAIL</p>
          <input id="email" class="input100" type="text" name="gmail" value={user.gmail} onChange={handleChange}  placeholder="Eg. example@email.com"></input>
          <p>Phone</p>
          <input id="phone" class="input100" type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Eg. +91 87654 33222"></input>
        </div>
        <div style={{width: '100%'}}>
          <p>Message</p>
         < textarea id="message" class="input100" name="message" value={user.message} onChange={handleChange}  placeholder="Write us a message"></textarea>
        </div>
       
      
        <div class="container-contact100-form-btn">
                <input id="button"
                    type="button"
                    name="signup"
                    value="Send"
                    onClick={send}></input>
              
                </div>
      </form> 
    </div> 
    
   
   </div>

   
   
	
       
        
     );
}
 
export default Contact;