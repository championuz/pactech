import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
          <div className="index-page">
          
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="100">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="https://demos.creative-tim.com/blk-design-system/index.html" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
                  <span>Pactech •</span> Tech/Marketing Agency
                </a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <div className="navbar-collapse-header">
                  <div className="row">
                    <div className="col-6 collapse-brand">
                      <a href='google.com'>
                        Pactech •
                      </a>
                    </div>
                    <div className="col-6 collapse-close text-right">
                      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="tim-icons icon-simple-remove"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="navbar-nav">
                <li className=" nav-item">
                    <NavLink exact to="/pactech" className="nav-link">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> Home
                    </NavLink>
                  </li>
                <li className=" nav-item">
                    <NavLink exact to="/pactech/portfolio" className="nav-link">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> Portfolio
                    </NavLink>
                  </li>
                <li className=" nav-item">
                    <NavLink exact to="/pactech/store" className="nav-link">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> Profits Store
                    </NavLink>
                  </li>
                <li className=" nav-item">
                    <NavLink exact to="/pactech/about" className="nav-link">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> About
                    </NavLink>
                  </li>
                <li className=" nav-item">
                    <NavLink exact to="/pactech/contact" className="nav-link">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> Contact
                    </NavLink>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim">
                      <i className="fab fa-twitter"></i>
                      <p className="d-lg-none d-xl-none">Twitter</p>
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim">
                      <i className="fab fa-facebook-square"></i>
                      <p className="d-lg-none d-xl-none">Facebook</p>
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial">
                      <i className="fab fa-instagram"></i>
                      <p className="d-lg-none d-xl-none">Instagram</p>
                    </a>
                  </li>
                  {/* <li className="dropdown nav-item">
                    <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-toggle nav-link" data-toggle="dropdown">
                      <i className="fa fa-cogs d-lg-none d-xl-none"></i> Getting started
                    </a>
                    <div className="dropdown-menu dropdown-with-icons">
                      <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-item">
                        <i className="tim-icons icon-paper"></i> Documentation
                      </a>
                      <a href="examples/register-page.html" className="dropdown-item">
                        <i className="tim-icons icon-bullet-list-67"></i>Register Page
                      </a>
                      <a href="examples/landing-page.html" className="dropdown-item">
                        <i className="tim-icons icon-image-02"></i>Landing Page
                      </a>
                      <a href="examples/profile-page.html" className="dropdown-item">
                        <i className="tim-icons icon-single-02"></i>Profile Page
                      </a>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link btn btn-solid d-none d-lg-block" href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" onClick="scrollToDownload()">
                       Book a Call <i className="tim-icons icon-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
      </div>
      </div>
    )
  };
}
