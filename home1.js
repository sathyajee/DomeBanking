import "./home1.css"
import $ from 'jquery'
import { useEffect } from "react"
import { useHistory } from "react-router-dom";
const Homeafterlogin = ({data}) => {

  const history = useHistory();
    useEffect(()=>{setTimeout(()=>{$('.back1').hide()},10000)},[]);
    return ( 
        <div class="wrapper">
            {console.log(data)}
        <nav id="sidebar">
        <div className="sidebar-header">
          <h3>DOME BANKING</h3>

          
        </div>
        <ul className="list-unstyled components">
          <p>DOME MENU</p>
          <li className="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">MY ACCOUNTS</a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">CHECK TRANSFERS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Payments</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a onClick={()=>history.push("/transfer")}>UPI Payments</a>
              </li>
              
              <li>
                <a onClick={()=>history.push("/payment")}>More</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">E-SERVICES</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
         <div id="content">
         <nav className="navbar navbar-expand-lg navbar-light bg-light navbar1">
           <div className="container-fluid">
             <button type="button" id="sidebarCollapse" className="btn btn-info">
               <i className="fas fa-align-left" />
               <span>MENU</span>
             </button>
             <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fas fa-align-justify" />
             </button>
             <a href="#">Profile</a>
             <a href="/">Logout</a>
           </div>
         </nav>
         <section className="back1">
           <div id="Bank_logo1">
             <br />
             <p>DOME BANK</p>
             <p>WELCOME TO THE DOME</p><p>{data.name}</p>
           </div>
         </section> 
         <br />
         <div className="p-5 mb-4 bg-dark rounded-3 d">
           <div className="container-fluid py-5">
             <h1 className="display-5 fw-bold">TRANSACTION</h1>
             <p>RECENT TRANSACTION:{data.balance}</p>
             <p className="col-md-8 fs-4" />
           </div>
         </div>
         <br />
         <div id="running_text">
           <marquee direction="left"><a href="https://www.google.com">GOOGLE</a> WRITE SOME TEXT THAT MUST RUN FROM right to left, If you get the cursor on it, It must stop on mouse hover</marquee>
         </div>
       </div>
       </div>


     );
}
 
export default Homeafterlogin;