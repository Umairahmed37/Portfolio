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

      <div className='introduce'>
        <div className='container'>
          <div className='d-flex row'>
            <div className='col-sm-6'>
              <img alt='man' src={require('./Images/manStanding.png')} />
            </div>
            <div className='col-sm-6 text'>
              <h1>Let me Introduce Myself</h1>
              <p>Well, I Started as Front-end developer in 2018. <br />
                Improving web developer skills learning advance <br />
                Full Stack Technologies. Providing services to our <br />
                Clients. Feel free to download CV</p>
              <div id="frontdownload" className="col-md-3 align-self-center btn-danger " >
                <i className="fas fa-download mx-2"></i>
                Download CV</div>
            </div>
          </div>
        </div>
      </div>

      <div className='projectscompleted'>
        <div className='container'>
          <div className='row'>
            <div className='col-md'>
              <i class="fas fa-clipboard-check"></i>
              <h1 className='counter'>50 </h1>
              <h5> Projects completed</h5>
            </div>
            <div className='col-md'>
              <i class="fas fa-calendar-alt"></i>
              <h1 className='counter'>3</h1>
              <h5>Year of Experience</h5>
            </div>
            <div className='col-md'>
              <i class="fas fa-mug-hot"></i>
              <h1 className='counter'>4500</h1>
              <h5>Cup of Tea</h5>
            </div>
            <div className='col-md'>
              <i class="fas fa-grin-hearts"></i>
              <h1 className='counter'>40</h1>
              <h5>Happy Clients</h5>
              <h2 className='increase'></h2>
            </div>
          </div>
        </div>
      </div>


      <div className='Expertise text-center'>
        <h6>My Skills</h6>
        <h1>My Expertise</h1>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
              <h3><span><img src={require('./Icons/Idea.png')} alt="pic" /></span>Strategy and Direction</h3>
              <p>Understand First, Create strategy, algorithms, layout, for the project. Making direction and implementing these strategies.</p>
            </div>
            <div className='col-md-5'>
              <h3><span><img src={require('./Icons/react.png')} alt="pic" /></span>MERN Stack Development</h3>
              <p>Built Professional MERN Stack Applications including Blog websites, Ultility websites,CMS System, E-commerce websites using Redux, advance user authentication (jwt-token), protected routing etc.  </p>
            </div>

             <br />
            <div className='col-md-5'>
              <h3><span><img src={require('./Icons/design.png')} alt="picture" /></span>UI/UX Design </h3>
              <p>Created professional website layout using Figma or Adobe XD. Advance user interface/ user experience with animations. Using technologies i.e Material UI, Boostrap, Fontawsome.</p>
            </div>
            <div className='col-md-5'>
              <h3><span><img src={require('./Icons/php.png')} alt="picture" /></span>Php sQl Development</h3>
              <p>Built projects using Php as server side language with mysQl database. Websites include blog website, CMS Admin panel, e-commerce website.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='testimonials'>
        <div className='container text-center'>

        <div className='testtext'>
          <h1>Client Testimonials</h1>
          <h4>Here's what my clients say about working with me...</h4>
        </div>
        </div>

      </div>









    </div>

  )
}

export default Home
