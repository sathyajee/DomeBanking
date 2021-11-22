import './login.css'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'


import axios from "axios";


 
const Login = ({setLoginUser}) => {
    const history = useHistory();
    const [user, setUser] = useState({
      username: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const login = () => {
      axios.post("http://localhost:8000/loginpage", user).then((res) => {
        swal(res.data.message);
        setLoginUser(res.data.user);
        history.push("/Home");
      });
    };
    return ( 
       <div>
        <section class="wall">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">DOME BANKING</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#login">LOGIN</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="/aboutus">About us</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            
        </form>
        </div>
    </nav>
	
		<h1>DOME BANKING</h1>
		<p>MAKE YOUR OWN DOME</p>
		</section>
         <div id="running_text">
         <marquee direction="left"  ><a href="https://www.google.com">GOOGLE</a>ALERT MESSAGE LIKE DONT SHARE YOUR PASSWORD CVV OTP</marquee>
       </div>
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
              <input type="button" id="butt" name="login" value="Login" onClick={login} />
              <div className="signup_link">
                Not a member? <a href="/signup">SignUp</a>
              </div> 
            </form>
          </div>
        </section>
      </section>
       <main>
         <div className="container py-4">
           <header className="pb-3 mb-4 border-bottom">
             <span className="fs-4">ADVERTISEMENT</span>
           </header>
           <div className="p-5 mb-4 bg-light rounded-3">
             <div className="container-fluid py-5">
               <h1 className="display-5 fw-bold">WHY DOME BANKING</h1>
               <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
               
             </div>
           </div>
           <div className="p-5 mb-4 bg-light rounded-3">
             <div className="container-fluid py-5">
               <h2>This Division tag is for bank advertisement. Presently I've added few photos Later we'll make changes</h2>
               <img id="bank_adv" src="gold.jpg" width="500px" />
             </div>
           </div>
        
           
           <div className="row align-items-md-stretch">
             <div className="col-md-6">
               <div className="h-100 p-5 text-white bg-dark rounded-3">
                 <marquee direction="up">
                   <h1>Get this Divsion tag to "Alert Message" Position<p />
                   </h1><h1>Hello</h1>
                   <h2>Namskara</h2>
                 </marquee>
               </div>
             </div>
             <div className="col-md-6">
               <div className="h-100 p-5 bg-light border rounded-3">
                 <h2>ONLINE DOME</h2>
                 <p>What Is Online Banking?
                   Online banking allows a user to conduct financial transactions via the Internet. Online banking is also known as Internet banking or web banking.
                   Online banking offers customers almost every service traditionally available through a local branch including deposits, transfers, and online bill payments. Virtually every banking institution has some form of online banking, available both on desktop versions and through mobile apps..</p>
                 <button className="btn btn-outline-secondary" onClick={2} type="button">SIGN UP</button>
               </div>
             </div>
           </div>
         </div>
       </main>
    
       </div> 
 

     );
}
 
export default Login;