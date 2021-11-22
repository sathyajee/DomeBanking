import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, {useEffect} from "react";
import swal from 'sweetalert'
import $ from 'jquery'


const Transfer = ({data}) => {



    const history = useHistory();
    const [user, setUser] = useState({
      account:"",
      balance:"",
      name:"",
      nameto:"",
  
     
     
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const updateAccount = () => {
 

      const {name, account,balance} = user;
      if (name,account && balance ) 
      {
          console.log("in update")
        axios.put("http://localhost:8000/transaction",user).then((res) => {
          swal(res.data.message);
        });
      } 
      else {
        swal("Invalid Input");
      }
    };
    const updateAccountto = () => {
 

      const {nameto,account,balance} = user;
      if (nameto &&account && balance ) 
      {
          
        axios.put("http://localhost:8000/transactionto",user).then((res) => {
          console.log("in update2")
          swal(res.data.message);
        });
      } 
      else {
        swal("Invalid Input");
      }
    };

    return ( 
        <div>
          {console.log("heelo")}
          {console.log(data)};
        <div id="bank_logo">
          <a href="page2.html"><img src="logo.jpeg" style={{display: 'flex'}} /></a>
          <h3>DOME BANKING</h3>
        </div>
        <div className="spacing1">
          <div className="spacing2" />
          <h1 className="func">TRANSFER GATEWAY</h1>
        </div>
        <h1>{data.name}:{data.balance}</h1>
        <input type="text" name="name" value={user.name}  onChange={handleChange}/>
        <input type="text" name="nameto" value={user.nameto} placeholder="name of money reciever"  onChange={handleChange}/>
        <div id="transfers">
        
          <h3 className="head1">Enter your Account Number: <input type="text" name="account" value={user.account} placeholder={data.account}   onChange={handleChange}/></h3>
          money<input
            type="text"
            name="balance"
            value={user.balance}
            placeholder={"money to send"}
            onChange={handleChange}
          />
          <br />
          <div>
            <h3 style={{display: 'inline'}}>Transfer Method: </h3>
            <select id="payment_option" style={{display: 'inline'}}>
              <option value="RTGS">RTGS/NEFT</option>
              <option value="IMPS">IMPS</option>
              <option value="UPI">UPI</option>
            </select>
            <input id="button"
            type="button"
            name="signup"
            value="Go"
            onClick={()=>{updateAccount();updateAccountto();}}
          />
          </div>
          <form id="If_not_UPI" style={{display: 'none'}}>
            <h3 style={{display: 'inline'}}>Beneficiary Name: </h3><input className="Not_UPI" type="text" /><br />
            <h3 style={{display: 'inline'}}>Beneficiary Account Number: </h3><input className="Not_UPI" type="password" /><br />
            <h3 style={{display: 'inline'}}>Confirm Account Number: </h3><input className="Not_UPI" type="text" /><br />
            <h3 style={{display: 'inline'}}>Enter the Amount: </h3><input className="Not_UPI" type="number" /><br />
            <h3 style={{display: 'inline'}}>IFSC Code: </h3><input className="Not_UPI" type="text" /><br />
            <h3 style={{display: 'inline'}}>Enter your Transcation Security Code: </h3><input className="Not_UPI" type="number" /><br />
            <div style={{border: 'dotted'}}>
              <input type="checkbox" />
              <p style={{display: 'inline'}}>Please Confirm the details filled once again. The Bank will not be responsible for any Losses incurred by the client due to mistyped information</p>
            </div><br />
            <div className="proceed">
              <button className="proceed_1" type="Submit">Proceed</button>
            </div>
          </form>
          <form id="If_UPI" style={{display: 'none'}}>
            <h3 style={{display: 'inline'}}>Enter Beneficiary UPI ID: </h3><input className="In_UPI" type="text" /><br />
            <h3 style={{display: 'inline'}}>Enter the Amount: </h3>   <input
            type="text"
            name="phone"
            value={user.phone}
            placeholder="Enter Mobile Number"
            onChange={handleChange}
          />
            <h3 style={{display: 'inline'}}>Enter your UPI Pin: </h3><input className="In_UPI" type="number" /><br />
            <div style={{border: 'dotted'}}>
              <input type="checkbox" />
              <p style={{display: 'inline'}}>Please Confirm the details filled once again. The Bank will not be responsible for any Losses incurred by the client due to mistyped information</p>
            </div><br />
            <div className="proceed">
              <button className="proceed_1" type="Submit">Proceed</button>
            </div>
          </form>
        </div>
      </div>
     );
}
 
export default Transfer;