const About = () => {
    return ( 
        <div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">About us page</h1>
                <p className="lead text-muted mb-0">Welcome Dome Bankers.</p>
              </div>
              <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
              <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary" />
                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light">Our team</h2>
                <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0">Vvek</h5><span className="small text-uppercase text-muted">PES1UG20CS679</span>
                  
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0">Shasank</h5><span className="small text-uppercase text-muted">PES1UG20CS6--</span>
                  
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 className="mb-0">Sathyajeeth</h5><span className="small text-uppercase text-muted">PES1UG20CS689</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-light pb-5">
          <div className="container text-center">
            <p className="font-italic text-muted mb-0">© Copyrights Company.com All rights reserved.</p>
          </div>
        </footer>
      </div>
     );
}
 
export default About;