import "./payment.css"
import { useEffect } from "react"
import { useHistory } from "react-router-dom";
const Payment = ({data}) => {
    const history = useHistory();
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
  
					
					<p class="payment">Payment and Transfer</p>
				<div class="container py-4 tabs" >
				<ul>
								<li><a onClick={()=>history.push("/transfer")}>SEND MONEY</a></li>
								<li><a onClick={()=>history.push("/transfer")}>BILL PAY/ RECHARGE</a></li>
								<li><a onClick={()=>history.push("/beneficaries")}>MANAGE/ADD BENEFICIARIES</a></li>
								
				</ul>
                </div>			
<div class="container py-4">
		<div class="h-100vh row align-items-md-stretch">

				<div class="col-md-6">
				  <div class="h-100 p-5 text-white bg-dark rounded-3">
					<pre>transaction:{data.transactions}</pre>
				  </div>
				</div>
				<div class="col-md-6">
				  <div class="h-100 p-5 bg-light border rounded-3">
					<h2>BENEFICIARIES</h2>
					<pre>{data.beneficaries}</pre>
				  </div>
				</div>
			  </div>
			 </div> 

				</div>
      );
}
 
export default Payment;