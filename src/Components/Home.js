import React from 'react'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar'


const Home = () => {
  return (
    <div >
      <div id="frontpage" className="pt-5 home ">
        <div className="row container justify-content-center">

          <div className="col-md-7 stack">
            <h1>
              Hey, i'm Full <br /> <span>Stack Developer</span>
            </h1>
            <p>hi! I'm Umair, a professional web developer from Pakistan<br />
              I help brands convert their ideas into reality.
            </p>

            <div className="d-flex frontbuttons">

              <div className="col-md-3" id="parenthire">
                <Link to="/">
                  <div id="hireme">
                    <i class="fas fa-user-plus mx-2"></i>Hire me</div>
                </Link>
              </div>
              <div id="frontdownload" className="col-md-3 align-self-center btn-danger " >
                <i className="fas fa-download mx-2"></i>
                Download CV</div>
            </div>

          </div>
          <div className="col-md-3 profile">
            <img className="" src={require("../Components/Images/profile2.png")} alt="portfolio " />
          </div>
        </div>
      </div>

      <div>
        
       </div>






    </div>

  )
}

export default Home
