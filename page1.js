
import "./index.css"
const Home = ({data}) => {
    
    return (

    <div>
        
          <section class="wall">
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

    <h1>DOME BANKING</h1>
    <p>MAKE YOUR OWN DOME</p>
    {/* {data.map((Home,key)=>(
            <h2>Welcome{Home.name}</h2>
        ))} */}
        <p>Welcome back {data.name}</p>
    </section>
    <div id="running_text" >
        <marquee direction="left" ><a href="https://www.google.com">GOOGLE</a>ALERT MESSAGE LIKE DONT SHARE YOUR PASSWORD CVV OTP</marquee>
    </div>
    <section class="top_catagory_area d-md-flex clearfix background1" style={{"min-height":"100vh"}}>
    
        <div class="bg">
            <div class="wrap">
                <div class="newsletter-bg"></div>  
            <div class="newsletter-text">
            <marquee direction="up">
                <h1>Get this Divsion tag to "Alert Message" Position</h1>
                <h1>Hello</h1>
                <h2>Namskara</h2>
            </marquee>
                
            </div>
            
            </div>
            
            </div>
        
            <div class="single_catagory_area d-flex align-items-center bg-img" style={{backGround: "transparent"}}>
                <div class="catagory-content">
                    
                        <h1>Put Some Youtube Video here for Temperory. Later We decide what video to be there</h1>
                
                </div>
            </div>
        </section>
        <div className="container-fluid  p-3 my-3">
            <div className="height-100 d-flex justify-content-center align-items-center">
                <div className="card p-3" style={{borderRadius: '1rem'}}>
                <div className="d-flex justify-content-between align-items-center"> <img src="https://i.imgur.com/gfp4wrR.png" width={50} />
                    <h1>DOME CARD</h1>
                </div>
                <div className="px-2 number mt-3 d-flex justify-content-between align-items-center"> <span>1234</span> <span>5678</span> <span>8910</span> <span>1112</span> </div>
                <div className="p-4 card-border mt-4">
                    <div className="d-flex justify-content-between align-items-center"> <span className="cardholder">Card Holder</span> <span className="expires">Expires</span> </div>
                    <div className="d-flex justify-content-between align-items-center"> <span className="name">Allice William</span> <span className="date">10/20</span> </div>
                </div>
                </div>
            </div>
            </div>
            <section className="top_catagory_area d-md-flex clearfix background1">
            <div className="bg">
                <div className="wrap">
                <div className="newsletter-bg" />  
                <div className="newsletter-text">
                    <h2>In this Division, in the place of button put some photos releavant to its respective link. All the images must be of same dimension</h2>
                    <button><h1>A</h1></button><a href><h1 style={{display: 'inline'}}>New User? Register</h1></a><br />
                    <button><h1>B</h1></button><a href><h1 style={{display: 'inline'}}>How to Register/Login</h1></a><br />
                    <button><h1>C</h1></button><a href><h1 style={{display: 'inline'}}>Contact Us</h1></a>
                </div>
                </div>
            </div>
            </section>
            
            <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                <p>DOME BANKING</p>
                <a className="btn btn-outline-light btn-floating m-1" href="/contact" role="button"><i className="fab fa-facebook-f" />CONTACT</a>
                <a className="btn btn-outline-light btn-floating m-1" href="/signup" role="button"><i className="fab fa-twitter">SIGN-UP</i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" />HELP</a>
                </section></div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2021 DOME BANKING:
            </div>
            </footer>
       </div> 
      );
}
 
export default Home;