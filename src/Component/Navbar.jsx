import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="top-bar bg-primary p-2">
        <div className="row">
          <div className="col-md-9 col-6">
            <div className="ms-4 d-flex gap-3 ">
              {/* Email */}
              <Link target="_blank" rel="noreferrer"
                to={`mailto:${process.env.REACT_APP_EMAIL}`}
                className="text-light text-decoration-none"
              >
                <i className="fa-regular fa-envelope me-1"></i>
                <span className="d-none d-md-inline">
                  {process.env.REACT_APP_EMAIL}
                </span>
              </Link>

              {/* Phone (optional) */}

              <Link target="_blank" rel="noreferrer"
                to={`tel:${process.env.REACT_APP_PHONE}`}
                className="text-light text-decoration-none"
              >
                <i className="fa fa-phone me-1"></i>
                <span className="d-none d-md-inline">
                  {process.env.REACT_APP_PHONE}
                </span>
              </Link>

              {/* WhatsApp */}
              <Link target="_blank" rel="noreferrer"
                to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`}
                className="text-light text-decoration-none"
              >
                <i className="fa-brands fa-whatsapp me-1"></i>
                <span className="d-none d-md-inline">
                  {process.env.REACT_APP_WHATSAPP}
                </span>
              </Link>
            </div>
          </div>



          {/* .................... */}


          <div className="col-md-3 col-6 ">
            <div className="float-end me-4 d-flex gap-3">
              {/* <Link to={`${process.env.REACT_APP_FACEBOOK}`} className="me-3" target="_blank" rel="noreferrer">
                {" "}
                <i className="text-light  bi-brands bi-facebook"></i>{" "}
              </Link>
              <Link to={`${process.env.REACT_APP_INSTAGRAM}`} className="me-3" target="_blank" rel="noreferrer">
                {" "}
                <i className="text-light  bi-brands bi-instagram"></i>{" "}
              </Link>
              <Link to={`${process.env.REACT_APP_LINKEDIN}`} className="me-3" target="_blank" rel="noreferrer">
                {" "}
                <i className="text-light  bi-brands bi-linkedin"></i>{" "}
              </Link>
              <Link to={`${process.env.REACT_APP_TWITTER}`} className="me-3" target="_blank" rel="noreferrer">
                {" "}
                <i className="text-light  bi bi-twitter-x "></i>{" "}
              </Link>
              <Link to={`${process.env.REACT_APP_YOUTUBE}`} className="me-3" target="_blank" rel="noreferrer">
                {" "}
                <i className="text-light  bi-brands bi-youtube"></i>{" "}
              </Link> */}




              {/* <div className="social-links me-4 d-flex gap-3"> */}
                          <Link to={`${process.env.REACT_APP_FACEBOOK}`} target="_blank" rel="noreferrer" ><i className="text-light bi bi-facebook"></i></Link>
                          <Link to={`${process.env.REACT_APP_INSTAGRAM}`} target="_blank" rel="noreferrer" ><i className="text-light bi bi-instagram"></i></Link>
                          <Link to={`${process.env.REACT_APP_LINKEDIN}`} target="_blank" rel="noreferrer" ><i className="text-light bi bi-linkedin"></i></Link>
                          <Link to={`${process.env.REACT_APP_TWITTER}`} target="_blank" rel="noreferrer" ><i className="text-light bi bi-twitter-x"></i></Link>
                          <Link to={`${process.env.REACT_APP_YOUTUBE}`} target="_blank" rel="noreferrer" ><i className="text-light bi bi-youtube"></i></Link>
                        {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <header
        id="header"
        className="header d-flex align-items-center sticky-top "
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <h1 className="sitename">{process.env.REACT_APP_SITE_NAME}</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">Tesimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contactus</NavLink>
              </li> 
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              {/* <li className="dropdown"><NavLink to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li className="listing-dropdown"><a href="#"><span>Listing Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li>
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
              <li>
                <a href="#">Column 5 link 1</a>
                <a href="#">Column 5 link 2</a>
                <a href="#">Column 5 link 3</a>
              </li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>*/}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a
            className="btn-getstarted flex-md-shrink-0"
            href="index.html#about"
          >
            Get Started
          </a>
        </div>
      </header>
    </>
  );
}
