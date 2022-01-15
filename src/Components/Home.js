import React from 'react'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
// import Navbar from './Navbar'


const Home = () => {
  return (
    <div >
      <ul className='backgroundanimations'>
        <img className='backcircle' src={require('./Images/circle.png')} alt="circle" />
        <img className='backdots ' src={require('./Images/dots.png')} alt="dots" />
        <img className='backdots' src={require('./Images/dots.png')} alt="dots" />
        <img className='backdots' src={require('./Images/dots.png')} alt="dots" />
        <img className='backdots' src={require('./Images/blackdots.png')} alt="dots" />
        <img className='backdots' src={require('./Images/blackdots.png')} alt="dots" />
        <img className='backdots' src={require('./Images/blackdots.png')} alt="dots" />
      </ul>
      <div id="frontpage" className="pt-5 home">
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
                    <i className="fas fa-user-plus mx-2"></i>Hire me</div>
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
              <img className='purpleimage' alt='man' src={require('./Images/manStanding.png')} />
            </div>
            <div className='col-sm-6 text'>
              <h1>Let me Introduce Myself</h1>
              <p>Well, I Started as Front-end developer in 2018. <br />
                Improving web developer skills learning advance <br />
                Full Stack Technologies. Providing services to our <br />
                Clients. Feel free to download CV</p>
              <div id="frontdownload" className="col-md-3 align-self-center btn-danger introdownload" >
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
              <i className="fas fa-clipboard-check"></i>
              <h1 className='counter'>50 </h1>
              <h5> Projects completed</h5>
            </div>
            <div className='col-md'>
              <i className="fas fa-calendar-alt"></i>
              <h1 className='counter'>3</h1>
              <h5>Year of Experience</h5>
            </div>
            <div className='col-md'>
              <i className="fas fa-mug-hot"></i>
              <h1 className='counter'>4500</h1>
              <h5>Cup of Tea</h5>
            </div>
            <div className='col-md'>
              <i className="fas fa-grin-hearts"></i>
              <h1 className='counter'>40</h1>
              <h5>Happy Clients</h5>
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
              <h3><span><img src={require('./Icons/design.png')} alt="pict" /></span>UI/UX Design </h3>
              <p>Created professional website layout using Figma or Adobe XD. Advance user interface/ user experience with animations. Using technologies i.e Material UI, Boostrap, Fontawsome.</p>
            </div>
            <div className='col-md-5'>
              <h3><span><img src={require('./Icons/php.png')} alt="pict" /></span>Php sQl Development</h3>
              <p>Built projects using Php as server side language with mysQl database. Websites include blog website, CMS Admin panel, e-commerce website.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='testimonials'>
        <div className='container text-center row justify-content-center '>

          <div className='testtext'>
            <h1>Client Testimonials</h1>
            <h4>Here's what my clients say about working with me...</h4>
          </div>

          <div className='col-md-12 mycarousel'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner text-center">
                <div className="carousel-item active" data-bs-interval="532000">
                  <img src={require('./Images/testimonials/man11.png')} alt="man1" />
                  <h2>Alan </h2>
                  <br />
                  <div>
                    <ul className='stars'>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </ul>
                    <div className='quote'>
                      <i class="fas fa-quote-left"></i>
                      <p>Thanks again for the work you have done, it looks fantastic thank you! I do really appreciate it.</p>
                      <i class="fas fa-quote-right"></i>
                    </div>

                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={require('./Images/testimonials/man22.png')} alt="man1" />
                  <h2>Samad Calderon</h2>
                  <br />
                  <div>
                    <ul className='stars'>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </ul>
                    <div className='quote'>
                      <i class="fas fa-quote-left"></i>
                      <p>Finally I would like to say thanks for a great job and I am over the moon with the finished work I would recommend you to anyone.</p>
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={require('./Images/testimonials/man33.png')} alt="man1" />
                  <h2>Jay Parker</h2>
                  <br />
                  <div>
                    <ul className='stars'>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </ul>
                    <div className='quote'>
                      <i class="fas fa-quote-left"></i>
                      <p>The site is looking fantastic and am very pleased with your work so far.</p>
                      <i class="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className='Contact section'>
        <div className='container'>
          <h2 className='text-center'>Contact Me</h2>
          <span className='section_subtitle'>Get in Touch</span>
          <div className='row'>


            <div className='contact_info_all col-md-6'>
              <div>
                <div className='contact_info'>
                  <i class="uil uil-phone contact_icon"></i>
                  <div>
                    <h3 className='contact_title'>Call Me</h3>
                    <span className='contact_subtitle'>+92300-456789123</span>
                  </div>
                </div>

                <div className='contact_info'>
                  <i class="uil uil-envelope-check contact_icon"></i>

                  <div>
                    <h3 className='contact_title'>Email Me</h3>
                    <span className='contact_subtitle'>emailumair125125@gmail.com</span>
                  </div>
                </div>

                <div className='contact_info'>
                  <i class="uil uil-map-marker contact_icon"></i>
                  <div>
                    <h3 className='contact_title'>Location</h3>
                    <span className='contact_subtitle'>Rawalpindi, Pakistan</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='contact_form col-md-6'>

              <form>
                <div className='contact_inputs'>
                  <div className='contact_content'>
                    <label className='contact_label' >Name</label>
                    <input type="text" className='contact_input' />
                  </div>
                  <div className='contact_content'>
                    <label className='contact_label' >Email</label>
                    <input type="email" className='contact_input' />
                  </div>
                  <div className='contact_content'>
                    <label className='contact_label' >Message</label>
                    <textarea name="" id="" cols="0" rows="7" className='contact_input'></textarea>
                  </div>
                  <div>
                    <a href="#" className="button button--flex shadow">Send Message <i class="uil uil-message button_icon"></i> </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <div className='footer'>
        <footer class="text-center text-lg-start bg-dark text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with me on social networks:</span>
            </div>

            <div className='footer_icons'>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>

            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Umair Ahmed
                  </h6>
                  <p>
                    Full Stack Web Developer <br />
                    MERN Stack Developer
                  </p>

                </div>



                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>


                  <li className="nav-item">
                    <Nav.Link as={Link} to="/Contact" className="nav-link" >Projects</Nav.Link>
                  </li>

                  <li className="nav-item">
                    <Nav.Link as={Link} to="/Contact" className="nav-link" >Services</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link as={Link} to="/About" className="nav-link" >About Me</Nav.Link>
                  </li>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i class="fas fa-home me-3"></i> Rawalpindi, Pakistan</p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    umair.ahmed125125@gmail.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> +92-321654987</p>
                </div>

               


              </div>
            </div>
          </section>

          <div class="text-center p-4" >
            © 2022 Copyright:
            <a class="text-reset fw-bold">All Rights Reserved </a>
          </div>
        </footer>
      </div>









    </div>

  )
}

export default Home
