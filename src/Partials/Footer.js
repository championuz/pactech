import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className="index-page">
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="title" style={{color: "#faaf37"}}>PACTECH</h3>
              <p>We created a store to help you easily access products, skills and information that will help you rake in profits for your business.</p>
            </div>
            <div className="col-md-3 col-6">
            <h3 className="title negative-b-margin-1" style={{color: "#faaf37"}}>Quick Links</h3>
              <ul className="nav">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./examples/landing-page.html" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./examples/register-page.html" className="nav-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
            <h3 className="title negative-b-margin-1" style={{color: "#faaf37"}}>Resources</h3>
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://creative-tim.com/contact-us" className="nav-link">
                    Profits Store
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://creative-tim.com/about-us" className="nav-link">
                    Order a Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://creative-tim.com/blog" className="nav-link">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="title" style={{color: "#faaf37"}}>Follow us:</h3>
              <div className="btn-wrapper profile">
                <a  href="https://twitter.com/creativetim" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i className="fab fa-twitter"></i>
                </a>
                <a  href="https://www.facebook.com/creativetim" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Like us">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a  href="https://dribbble.com/creativetim" className="btn btn-icon btn-neutral  btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    <div className="container">
      <p className="title">  Copyright &copy; <span style={{color: "#faaf37"}}>Pactag Technologies 2022</span> • All Rights Reserved</p>
    </div>
    </div>
        )
  };
}
