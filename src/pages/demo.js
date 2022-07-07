import React from 'react';

class Demo extends React.Component {
    render() {
      return (
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
          <li className="dropdown nav-item">
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
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-solid d-none d-lg-block" href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" onClick="scrollToDownload()">
              <i className="tim-icons icon-cloud-download-93"></i> Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* <!-- End Navbar --> */}
  <div className="wrapper">
    <div className="page-header header-filter">
      <div className="squares square1"></div>
      <div className="squares square2"></div>
      <div className="squares square3"></div>
      <div className="squares square4"></div>
      <div className="squares square5"></div>
      <div className="squares square6"></div>
      <div className="squares square7"></div>
      <div className="container">
        <div className="content-center brand">
          <h1 className="h1-seo line-height-1"><span className="hero-display" style={{color: "#faaf37"}}>Whatever</span> it takes, we will help you <span style={{color: "#faaf37"}}>get your Dreams </span></h1>
          <h3>We have set systems and a passionate team ready to build your desires for you. </h3>
        <button className="btn font-weight-1 btn-neutral">Learn more</button> <button className="btn font-weight-1 btn-solid">Book a Call</button>
        </div>
      </div>
    </div>
    <div id="sliderDouble" className="slider slider-primary"></div>

    <div className="main">

    <div className="section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 order-1 pt-1">
                <h1 className="text-white font-weight-light">Bootstrap carousel</h1>
                <p className="text-white mt-4">Black Design comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                <a href="./docs/1.0/components/alerts.html" className="btn btn-warning mt-4">See all components</a>
              </div>
              <div className="col-lg-6 order-md-2 pt-1">
              <img className="d-block w-100" src="assets/img/denys.jpg" alt="First slide" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div id="images">
            <h3>What We Can Do For You</h3>
            <h4>Tech Solutions</h4>
            <div className="row">
              <div className="col-sm-4 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-2">Website Design & Development</small>
                <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
              </div>
              <div className="col-sm-4 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-2">Mobile Application Design & Development</small>
                 <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
              </div>
              <div className="col-sm-4 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-2">Tech Consult/General Web Solutions</small>
                 <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
              </div>
             
             
            </div><br/> <br/>
            <h4>Sales & Marketing Solutions</h4>
            <div className="row">
              <div className="col-sm-4 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-2">Sales Promotion & Traffic Generation</small>
                 <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
              </div>
              <div className="col-sm-4 mt-5 mt-sm-0">

                <small className="d-block text-uppercase font-weight-bold mb-2">Funnel Design & Creation</small>
                 <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
              </div>
              <div className="col-sm-4 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-2">Content Creation & Marketing</small>
                <div className="background-new round-section shadow-lg p-3">
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                                <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> <button className="btn btn-solid">Get Service</button>

                </div>
                
              </div>
             
             
            </div>
          </div>
        </div>
    <div id="sliderRegular" className="slider"></div>

    <div className="section section-download" id="#download-section" data-background-color="black">
        <img src="assets/img/path1.png" alt="Card" className="path" />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="text-center col-md-12 col-lg-8">
              <h2 className="title">Have you browsed our <span style={{color: "#faaf37"}}>PROFITS</span> store yet?</h2>
              <h4 className="description">We created a store to help you easily access products, skills and information that will help you rake in profits for your business and also guide you to starting a profitable business. Find them now!</h4>
            </div>
            <div className="text-center col-md-12 col-lg-8">
              <a href="https://www.invisionapp.com/now" className="btn btn-primary btn-round btn-lg" role="button">View Store</a>
            </div>
          </div>
        </div>
      </div>
              <br />
              <div id="sliderDouble" className="slider slider-primary"></div>
      <div className="section section-basic" id="basic-elements">
        <img src="assets/img/path1.png" alt="newoic" className="path" />
        <div className="container">
          <h2 className="title">Basic Elements</h2>
          <h3>Buttons</h3>
          <p className="category">Pick your style</p>
          <div className="row">
            <div className="col-md-10">
              <button className="btn btn-primary" type="button">Default</button>
              <button className="btn btn-primary btn-round" type="button">Round</button>
              <button className="btn btn-primary btn-round" type="button">
                <i className="tim-icons icon-heart-2"></i> With Icon
              </button>
              <button className="btn btn-primary btn-icon btn-round" type="button">
                <i className="tim-icons icon-heart-2"></i>
              </button>
              <button className="btn btn-primary btn-simple btn-round" type="button">Simple</button>
            </div>
          </div>
          <p className="category">Pick your size</p>
          <div className="row">
            <div className="col-md-10">
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary">Regular</button>
              <button className="btn btn-primary btn-lg">Large</button>
            </div>
          </div>
          <p className="category">Pick your color</p>
          <div className="row">
            <div className="col-md-12">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-danger">Danger</button>
              <button className="btn btn-neutral">Neutral</button>
            </div>
          </div>
          <br/>
          <h3>Links</h3>
          <div className="row">
            <div className="col-md-8">
              <button className="btn btn-link">Default</button>
              <button className="btn btn-link btn-primary ">Primary</button>
              <button className="btn btn-link btn-info">Info</button>
              <button className="btn btn-link btn-success">Success</button>
              <button className="btn btn-link btn-warning">Warning</button>
              <button className="btn btn-link btn-danger">Danger</button>
            </div>
          </div>
          <div className="space-70"></div>
          <div id="inputs">
            <h3>Inputs</h3>
            <p className="category">Form Controls</p>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="form-group">
                  <input type="text" value="" placeholder="Regular" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group has-success">
                  <input type="text" value="Success" className="form-control form-control-success" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="form-group has-danger">
                  <input type="email" value="Error Input" className="form-control form-control-danger" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Left Font Awesome Icon" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Right Nucleo Icon" />
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="tim-icons icon-lock-circle"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-70"></div>
          <div className="row" id="checkRadios">
            <div className="col-sm-6 col-lg-3">
              <p className="category">Checkboxes</p>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />
                  <span className="form-check-sign"></span>
                  Unchecked
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" checked />
                  <span className="form-check-sign"></span>
                  Checked
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" disabled />
                  <span className="form-check-sign"></span>
                  Disabled Unchecked
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" checked disabled />
                  <span className="form-check-sign"></span>
                  Disabled Checked
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <p className="category">Radios</p>
              <div className="form-check form-check-radio">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                  <span className="form-check-sign"></span>
                  Radio is off
                </label>
              </div>
              <div className="form-check form-check-radio">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                  <span className="form-check-sign"></span>
                  Radio is on
                </label>
              </div>
              <div className="form-check form-check-radio disabled">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option3" disabled />
                  <span className="form-check-sign"></span>
                  Disabled radio is off
                </label>
              </div>
              <div className="form-check form-check-radio disabled">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option4" disabled checked />
                  <span className="form-check-sign"></span>
                  Disabled radio is on
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <p className="category">Toggle Buttons</p>
              <input type="checkbox" name="checkbox" className="bootstrap-switch" checked/>
              <br />
              <input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON" data-off-label="OFF" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <p className="category">Sliders</p>
              <div id="sliderRegular" className="slider"></div>
              <br />
              <div id="sliderDouble" className="slider slider-primary"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-navbars">
        <img src="assets/img/path3.png" alt='newoic' className="path" />
        <div className="container" id="menu-dropdown">
          <div className="row">
            <div className="col-md-6">
              <h4>Menu</h4>
              <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                  <a className="navbar-brand" href="google.com">Menu</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="example-navbar">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="google.com">
                          <p>Link</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="alt='newoic'">
                          <p>Link</p>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <p>
                            Dropdown
                          </p>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="google">Action</a>
                          <a className="dropdown-item" href="google">Another action</a>
                          <a className="dropdown-item" href="google">Something else here</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-6">
              <h4>Menu with Icons</h4>
              <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                  <a className="navbar-brand" href="google">Icons</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-icons" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="example-navbar-icons">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="#pablo"><i className="tim-icons icon-send"></i></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pablo"><i className="tim-icons icon-single-02"></i></a>
                      </li>
                      <li className="nav-item dropdown">
                        <a href="google" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                          <i className="tim-icons icon-settings-gear-63" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="google.com" className="dropdown-header">Dropdown header</a>
                          <a className="dropdown-item" href="google.com">Action</a>
                          <a className="dropdown-item" href="google.com">Another action</a>
                          <a className="dropdown-item" href="google.com">Something else here</a>
                          <div className="divider"></div>
                          <a className="dropdown-item" href="google.com">Separated link</a>
                          <div className="divider"></div>
                          <a className="dropdown-item" href="google.com">One more separated link</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <h3 className="title mb-3">Navigation</h3>
        </div>
        <div id="navbar">
          <div className="navigation-example">
            {/* <!-- Navbar Primary  --> */}
            <nav className="navbar navbar-expand-lg bg-primary">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#pablo">Primary color</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-primary">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-world"></i> Discover
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-single-02"></i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-settings-gear-63"></i> Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Primary -->
            <!-- Navbar Info --> */}
            <nav className="navbar navbar-expand-lg bg-info">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#pablo">Info Color</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-info" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-info">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#pablo">
                        Discover
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Info -->
            <!-- Navbar Success --> */}
            <nav className="navbar navbar-expand-lg bg-success">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="google">Success Color</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-success">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-world"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-single-02"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="tim-icons icon-settings-gear-63"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Success -->
            <!-- Navbar Warning --> */}
            <nav className="navbar navbar-expand-lg bg-warning">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#pablo">Warning Color</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-warning" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-warning">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Warning -->
            <!-- Navbar Danger --> */}
            <nav className="navbar navbar-expand-lg bg-danger">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#pablo">Danger Color</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-danger" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-danger">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-facebook-square"></i> Share
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-twitter"></i> Tweet
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-pinterest"></i> Pin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Danger -->
            <!-- Navbar Transparent --> */}
            <nav className="navbar navbar-expand-lg navbar-transparent">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand" href="#pablo">Transparent</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="example-navbar-transparent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-facebook-square"></i> Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="fab fa-instagram"></i> Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar Transparent--> */}
          </div>
        </div>
      </div>
      {/* <!-- End .section-navbars  --> */}
      <div className="section section-tabs">
        <div className="container">
          <div className="title">
            <h3 className="mb-3">Navigation Tabs</h3>
          </div>
          <div className="row">
            <div className="col-md-10 ml-auto col-xl-6 mr-auto">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">With icons</small>
              </div>
              {/* <!-- Nav tabs --> */}
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#link1" role="tablist">
                        <i className="tim-icons icon-spaceship"></i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#link2" role="tablist">
                        <i className="tim-icons icon-settings-gear-63"></i> Settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#link3" role="tablist">
                        <i className="tim-icons icon-bag-16"></i> Options
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content tab-space">
                    <div className="tab-pane active" id="link1">
                      <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br />
                        <br/> Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                    </div>
                    <div className="tab-pane" id="link2">
                      <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                        <br />
                        <br/>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    </div>
                    <div className="tab-pane" id="link3">
                      <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                        <br />
                        <br/> Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 ml-auto col-xl-6 mr-auto">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">With text</small>
              </div>
              {/* <!-- Tabs with Background on Card --> */}
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#link4" role="tablist">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#link5" role="tablist">
                        Settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#link6" role="tablist">
                        Options
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content tab-space">
                    <div className="tab-pane active" id="link4">
                      <p> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                        <br/>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures</p>
                    </div>
                    <div className="tab-pane" id="link5">
                      <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                    </div>
                    <div className="tab-pane" id="link6">
                      <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tabs on plain Card --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Tabs --> */}
      <div className="section section-pagination">
        <img src="assets/img/path4.png" alt='pathpic' className="path" />
        <img src="assets/img/path5.png" alt='pathpic' className="path path1" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">Progress Bars</h3>
              <div className="progress-container">
                <span className="progress-badge">Default</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "25%"}}>
                    <span className="progress-value">25%</span>
                  </div>
                </div>
              </div>
              <div className="progress-container progress-primary">
                <span className="progress-badge">Primary</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
              <br />
              <h3 className="mb-5">Navigation Pills</h3>
              <ul className="nav nav-pills nav-pills-primary nav-pills-icons">
                <li className="nav-item">
                  <a className="nav-link active show" data-toggle="tab" href="#link7">
                    <i className="tim-icons icon-atom"></i> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#link8">
                    <i className="tim-icons icon-chat-33"></i> Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#link9">
                    <i className="tim-icons icon-settings-gear-63"></i> Settings
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="mb-5">Pagination</h3>
              <ul className="pagination pagination-primary">
                <li className="page-item active">
                  <a className="page-link" href="google">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">5</a>
                </li>
              </ul>
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#link" aria-label="Previous">
                    <span aria-hidden="true"><i className="tim-icons icon-double-left" aria-hidden="true"></i></span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#link" aria-label="Next">
                    <span aria-hidden="true"><i className="tim-icons icon-double-right" aria-hidden="true"></i></span>
                  </a>
                </li>
              </ul>
              <br />
              <h3 className="mb-5">Labels</h3>
              <span className="badge badge-default">Default</span>
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-info">Info</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-danger">Danger</span>
              <span className="badge badge-neutral">Neutral</span>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="section section-notifications" id="notifications">
        <div className="container">
          <div className="space"></div>
          <h3>Notifications</h3>
          <div className="alert alert-primary alert-with-icon">
            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
            <span data-notify="icon" className="tim-icons icon-coins"></span>
            <span>
              <b> Congrats! - </b> This is a regular notification made with ".alert-primary"</span>
          </div>
          <div className="alert alert-info alert-with-icon">
            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
            <span data-notify="icon" className="tim-icons icon-trophy"></span>
            <span>
              <b> Heads up! - </b> This is a regular notification made with ".alert-info"</span>
          </div>
          <div className="alert alert-success alert-with-icon">
            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
            <span data-notify="icon" className="tim-icons icon-bell-55"></span>
            <span>
              <b> Well done! - </b> This is a regular notification made with ".alert-success"</span>
          </div>
          <div className="alert alert-warning alert-with-icon">
            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
            <span data-notify="icon" className="tim-icons icon-bulb-63"></span>
            <span>
              <b> Warning! - </b> This is a regular notification made with ".alert-warning"</span>
          </div>
          <div className="alert alert-danger alert-with-icon">
            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
              <i className="tim-icons icon-simple-remove"></i>
            </button>
            <span data-notify="icon" className="tim-icons icon-support-17"></span>
            <span>
              <b> Oh snap! - </b> This is a regular notification made with ".alert-danger"</span>
          </div>
        </div>
      </div>
      {/* <!--  end notifications -->
      <!-- Typography --> */}
      <div className="section section-typo">
        <img src="assets/img/path1.png" alt='asset' className="path" />
        <img src="assets/img/path3.png" alt='asset' className="path path1" />
        <div className="container">
          <h3 className="title">Typography</h3>
          <div id="typography">
            <div className="row">
              <div className="col-md-12">
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>The Life of BLK• Design System </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>The Life of BLK• Design System</h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>The Life of BLK• Design System</h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>The Life of BLK• Design System</h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>The Life of BLK• Design System</h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>The Life of BLK• Design System</h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                      <br />
                      <br />
                      <small>
                        - Noaa
                      </small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle
                    <br />
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="space-50"></div>
          <div id="images">
            <h3 className="mb-5">Images</h3>
            <div className="row">
              <div className="col-sm-3 col-6">
                <small className="d-block text-uppercase font-weight-bold mb-4">Image</small>
                <img src="assets/img/ryan.jpg" alt="Rounded" className="img-fluid rounded shadow" style={{width: "150px;"}} />
              </div>
              <div className="col-sm-3 col-6">
                <small className="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
                <img src="assets/img/james.jpg" alt="Circle" className="img-fluid rounded-circle shadow" style={{width: "150px;"}} />
              </div>
              <div className="col-sm-3 col-6 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-4">Raised</small>
                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid rounded shadow-lg" style={{width: "150px;"}} />
              </div>
              <div className="col-sm-3 col-6 mt-5 mt-sm-0">
                <small className="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
                <img src="assets/img/mike.jpg" alt="Raised circle" className="img-fluid rounded-circle shadow-lg" style={{width: "150px;"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-javascript" id="javascriptComponents">
        <img src="assets/img/path5.png" alt='assets' className="path" />
        <img src="assets/img/path5.png" alt='assets'  className="path path1" />
        <div className="container">
          <h3 className="title mb-5">Javascript components</h3>
          <h4 className="mb-5">Modal</h4>
          <div className="row" id="modals">
            <div className="col-md-4">
              <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Launch Modal
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-warning" data-toggle="modal" data-target="#myModal1">
                Launch Modal Mini
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-success" data-toggle="modal" data-target="#myModal2">
                Launch Modal Form
              </button>
            </div>
          </div>
          <br />
          <br />
          <h4 className="mb-5 mt-3">Datepicker</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="datepicker-container">
                <div className="form-group">
                  <input type="text" id="datepicker" className="form-control datepicker" value="10/05/2016" data-datepicker-color="primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-5 mt-3">Popovers</h4>
              <button type="button" className="btn btn-default btn-sm" data-container="body" data-original-title="Popover on Top" data-toggle="popover" data-placement="top" data-content="Here will be some very useful information about his popover.">
                On top
              </button>
              <button type="button" className="btn btn-default btn-sm" data-container="body" data-original-title="Popover on Right" data-toggle="popover" data-placement="right" data-content="Here will be some very useful information about his popover.<br> Here will be some very useful information about his popover.">
                On right
              </button>
              <button type="button" className="btn btn-default btn-sm" data-container="body" data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom" data-content="Here will be some very useful information about his popover.">
                On bottom
              </button>
              <button type="button" className="btn btn-default btn-sm" data-container="body" data-original-title="Popover On Left" data-toggle="popover" data-placement="left" data-content="Here will be some very useful information about his popover." data-color="primary">
                On left
              </button>
            </div>
            <div className="col-md-6">
              <h4 className="mb-5 mt-3">Tooltips</h4>
              <button type="button" className="btn btn-default btn-tooltip btn-sm" data-toggle="tooltip" data-placement="left" title="Tooltip on left" data-container="body" data-animation="true" data-delay="100">On left</button>
              <button type="button" className="btn btn-default btn-tooltip btn-sm" data-toggle="tooltip" data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On top</button>
              <button type="button" className="btn btn-default btn-tooltip btn-sm" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom" data-container="body" data-animation="true">On bottom</button>
              <button type="button" className="btn btn-default btn-tooltip btn-sm" data-toggle="tooltip" data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">On right</button>
              <div className="clearfix"></div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="title">
              <h3>Carousel</h3>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 ">
                <h1 className="text-white font-weight-light">Bootstrap carousel</h1>
                <p className="text-white mt-4">Black Design comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                <a href="./docs/1.0/components/alerts.html" className="btn btn-warning mt-4">See all components</a>
              </div>
              <div className="col-lg-6">
                <div id="carouselExampleControls" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="assets/img/denys.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/img/fabien-bazanegue.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="assets/img/mark-finn.jpg" alt="Third slide" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <i className="tim-icons icon-minimal-left"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <i className="tim-icons icon-minimal-right"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-nucleo-icons">
        <img src="assets/img/path3.png" alt='assets' className="path" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <h2 className="title">Nucleo Icons</h2>
              <h4 className="description">
                BLK• Design System PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with BLK• Design System PRO Make sure you check all of them and use those that you like the most.
              </h4>
              <div className="btn-wrapper">
                <a href="./docs/1.0/foundation/icons.html" className="btn btn-primary btn-round" >View Demo Icons</a>
                <a href="https://nucleoapp.com/?ref=1712" className="btn btn-primary btn-simple btn-round btn-lg">View All Icons</a>
              </div>
            </div>
          </div>
          <div className="blur-hover">
            <a href="./docs/1.0/foundation/icons.html">
              <div className="icons-container blur-item on-screen mt-5">
                {/* <!-- Center --> */}
                <i className="icon tim-icons icon-coins"></i>
                {/* <!-- Right 1 --> */}
                <i className="icon icon-sm tim-icons icon-spaceship"></i>
                <i className="icon icon-sm tim-icons icon-money-coins"></i>
                <i className="icon icon-sm tim-icons icon-link-72"></i>
                {/* <!-- Right 2 --> */}
                <i className="icon tim-icons icon-send"></i>
                <i className="icon tim-icons icon-mobile"></i>
                <i className="icon tim-icons icon-wifi"></i>
                {/* <!-- Left 1 --> */}
                <i className="icon icon-sm tim-icons icon-key-25"></i>
                <i className="icon icon-sm tim-icons icon-atom"></i>
                <i className="icon icon-sm tim-icons icon-satisfied"></i>
                {/* <!-- Left 2 --> */}
                <i className="icon tim-icons icon-gift-2"></i>
                <i className="icon tim-icons icon-tap-02"></i>
                <i className="icon tim-icons icon-wallet-43"></i>
              </div>
              <span className="blur-hidden h5 text-primary">Eplore all the 21.000+ Nucleo Icons</span>
            </a>
          </div>
        </div>
      </div>
      <div className="section section-signup">
        <div className="container">
          <div className="squares square-1"></div>
          <div className="squares square-2"></div>
          <div className="squares square-3"></div>
          <div className="squares square-4"></div>
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-6">
              <h3 className="display-3 text-white">A beautiful Black Design
                <span className="text-white">completed with examples</span>
              </h3>
              <p className="text-white mb-3">The Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 Design System.</p>
              <div className="btn-wrapper">
                <a href="examples/register-page.html" className="btn btn-info">Register Page</a>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-auto">
              <div className="card card-register">
                <div className="card-header">
                  <img className="card-img" src="assets/img/square1.png" alt="Card" />
                  <h4 className="card-title">Register</h4>
                </div>
                <div className="card-body">
                  <form className="form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="tim-icons icon-single-02"></i>
                        </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="tim-icons icon-email-85"></i>
                        </div>
                      </div>
                      <input type="text" placeholder="Email" className="form-control" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="tim-icons icon-lock-circle"></i>
                        </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-check text-left">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        <span className="form-check-sign"></span>
                        I agree to the
                        <a href="google.com">terms and conditions</a>.
                      </label>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <a href="google.com" className="btn btn-info btn-round btn-lg">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-examples" data-background-color="black">
        <img src="assets/img/path1.png" alt='assets' className="path" />
        <div className="space-50"></div>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <a href="examples/landing-page.html">
                <img src="assets/img/landing-page.png" alt="Card" className="img-raised" />
              </a>
              <a href="examples/landing-page.html" className="btn btn-simple btn-primary btn-round">View Landing Page</a>
            </div>
            <div className="col-sm-6">
              <a href="examples/profile-page.html">
                <img src="assets/img/profile-page.png" alt="Card" className="img-raised" />
              </a>
              <a href="examples/profile-page.html" className="btn btn-simple btn-primary btn-round">View Profile Page</a>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-download" id="#download-section" data-background-color="black">
        <img src="assets/img/path1.png" alt="Card" className="path" />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="text-center col-md-12 col-lg-8">
              <h2 className="title">Do you love this Bootstrap 4 Design System?</h2>
              <h4 className="description">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the design system in HTML format. Start a new project or give an old Bootstrap project a new look!</h4>
            </div>
            <div className="text-center col-md-12 col-lg-8">
              <a href="https://www.creative-tim.com/product/blk-design-system" className="btn btn-primary btn-round btn-lg" role="button">
                Download HTML
              </a>
             {/* <a href="https://www.invisionapp.com/now"  className="btn btn-primary btn-lg btn-simple btn-round" role="button">
						Download PSD/Sketch
					</a>  */}
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* <!-- <div className="row text-center mt-5">
				<div className="col-md-8 ml-auto mr-auto">
					<h2>Want more?</h2>
					<h5 className="description">We've just launched <a href="http://demos.creative-tim.com/black-kit-pro/presentation.html" >BLK• Design System PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 Design System.</h4>
				</div>
				<div className="col-md-12">
					<a href="http://demos.creative-tim.com/black-kit-pro/presentation.html" className="btn btn-neutral btn-round btn-lg" >
						<i className="tim-icons icon-cloud-upload-94"></i> Upgrade to PRO
					</a>
				</div>
			</div> --> */}
          <br />
          <br />
          <div className="row row-grid align-items-center my-md">
            <div className="col-lg-6">
              <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
              <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
            </div>
            <div className="col-lg-6 text-lg-center btn-wrapper">
              <a href="google.com" id="twitter" className="btn btn-icon btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Tweet!">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="google.com" id="facebook" className="btn btn-icon btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Share!">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a  href="https://github.com/creativetimofficial" className="btn btn-icon btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Star on Github">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sart Modal --> */}
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="tim-icons icon-simple-remove"></i>
              </button>
              <h4 className="title title-up">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default">Nice Button</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  End Modal -->
      <!-- Mini Modal --> */}
      <div className="modal fade modal-mini modal-primary modal-mini" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="tim-icons icon-simple-remove text-white"></i>
              </button>
              <div className="modal-profile">
                <i className="tim-icons icon-single-02"></i>
              </div>
            </div>
            <div className="modal-body">
              <p>Always have an access to your profile</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link btn-neutral">Back</button>
              <button type="button" className="btn btn-link btn-neutral" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Form Modal --> */}
      <div className="modal fade modal-black" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="tim-icons icon-simple-remove text-white"></i>
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in with</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <a href="google" className="btn btn-neutral btn-icon">
                  <img src="assets/img/github.svg" alt='Card' />
                </a>
                <a href="google" className="btn btn-neutral btn-icon">
                  <img src="assets/img/google.svg"  alt='Card'/>
                </a>
              </div>
              <div className="text-center text-muted mb-4 mt-3">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="tim-icons icon-email-85"></i>
                      </span>
                    </div>
                    <input className="form-control" placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="tim-icons icon-key-25"></i>
                      </span>
                    </div>
                    <input className="form-control" placeholder="Password" type="password" />
                  </div>
                </div>
                <div className="form-check mt-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" checked  />
                    <span className="form-check-sign"></span>
                    Remember me!
                  </label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  End Modal --> */}
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="title">BLK•</h1>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="./examples/landing-page.html" className="nav-link">
                  Landing
                </a>
              </li>
              <li className="nav-item">
                <a href="./examples/register-page.html" className="nav-link">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a href="./examples/profile-page.html" className="nav-link">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="nav">
              <li className="nav-item">
                <a href="https://creative-tim.com/contact-us" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="https://creative-tim.com/about-us" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="https://creative-tim.com/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="https://opensource.org/licenses/MIT" className="nav-link">
                  License
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="title">Follow us:</h3>
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
  </div>
</div>
      )
    };
}

export default Demo;