import React from 'react'
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'



const Navbar = () => {

  const [shownav, setShownav] = useState(false)

  const changenav = () => {
    if (window.scrollY > 30) {
      setShownav(true)
    } else {
      setShownav(false)
    }
  }
  window.addEventListener('scroll', changenav)

  return (
    <div >

      <nav id={shownav ? 'scrolling' : 'notscrolling'} className="navbar navbar-light navbar-expand-md fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand"> <Button className="contactbutton mt-2">
            <i class="fas fa-paper-plane mx-2"></i>
            Contact Me
            </Button>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>


            <div className="offcanvas-body d-inline-flex">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

                <li className="nav-item">
                  <Nav.Link as={Link} to="/" className="nav-link active" aria-current="page" >Home</Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to="/Contact" className="nav-link" >Projects</Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to="/Contact" className="nav-link" >Services</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to="/About" className="nav-link" >About Me</Nav.Link>
                </li>

              </ul>
              <div className="justify-content-end align-self-center ">
                <i className="mx-3 fa-brands fa-instagram"></i>
                <i className="mx-3 fa-brands fa-twitter"></i>
                <i className="mx-3 fa-brands fa-facebook"></i>
              </div>
            </div>


          </div>
        </div>
      </nav >
    </div>
  )
}

export default Navbar
