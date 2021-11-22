import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, {useEffect} from "react";
import $ from 'jquery'
import swal from 'sweetalert'
const Benificaries = ({data}) => {

  useEffect(()=>{
    $('#body').css({
      'padding' : '25px'
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
     beneficaries:"",
     name:data.name,
  
     
     
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const updateAccount = () => {
 

      const { beneficaries} = user;
      if (beneficaries) 
      {
          console.log("in update")
        axios.put("http://localhost:8000/beneficaries",user).then((res) => {
          swal(res.data.message);
          history.push("/");
          
        });
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
        <form class="form-inline my-2 my-lg-0">
            
        </form>
        </div>
    </nav>
     
      <div style={{display: 'flex', width: '100%'}}>
        <h1>{data.name}</h1>
      <form id="form">
        <div style={{width: '100%'}}>
          <p>FULL NAME</p>
          <input
            type="text"
            name="beneficaries"
            className="form-control rounded-4"
            value={user.beneficaries}
          
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div style={{width: '100%'}}>
          <p>IDENTIFICATION</p>
          <input name="id" id="#n" />
        </div>
        <div style={{width: '47%'}}>
          <p>EMAIL</p>
          <input name="email" id="#n" />
        </div>
        <div style={{width: '47%', marginLeft: '6%'}}>
          <p>PHONE</p>
          <input name="phone" id="#n" />
        </div>
       
      
        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" onClick={updateAccount}>Add</button>
      </form> 
    </div>
    </div> 

     );
}
 
export default Benificaries;