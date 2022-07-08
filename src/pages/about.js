import React from 'react'

class about extends React.Component {
  render() {
    return (
 <div className="index-page">
 <div className="wrapper main">    
     <div className="page-header-1 header-filter">
           <div className="section">

   <div className="row justify-content-md-center pt-5">
           <div className="text-center col-md-12 col-lg-8">
             <h2 className="title"><span style={{color: "#faaf37"}}>About</span> us</h2>
             <h4 className="brand" style={{padding: "5px 20px"}}>Allow us introduce you to some Results we have gotten for our clients and we can help you achieve these and more!</h4>
           </div>
         </div>
       </div>
       <hr className="hr"/>

       <div className="section">
     <div className="container">
       <div className="row justify-content-between align-items-center">
         <div className="col-lg-5 mb-5 mb-lg-0 order-1 pt-1">
           <h1 className="text-white title">We Help Build Your Dreams</h1>
           <p className="text-white mt-4">All of us at <span className="title" style={{color: "#faaf37"}}>Pactag Technologies</span> wake up every day ready to service your need and get you the your desire across Tech, Marketing and many other profitable ventures. While we want to build your dreams, we can also help you shape, design and finally build it for you. We have been and still remain a Tech Best Friend because we are here to walk you up to your greatness. PACTECH has been offering Tech and Marketing solutions for over 4years now. We have a team of fully dedicated professionals across Development (Web and Mobile), Sales and Marketing.</p>
           <a href="./docs/1.0/components/alerts.html" className="btn btn-warning mt-4">Contact us</a>
         </div>
         <div className="col-lg-6 order-md-2 pt-1">
         <img className="d-block w-100" src="assets/img/denys.jpg" alt="First slide" />
         </div>
       </div>
     </div>
   </div>

      
       <div className="container">
       <div id="images">
           <h3 className="title">Our Services</h3>
           <div className="row">
             <div className="col-sm-4 mt-5 mt-sm-0">
               <div className="background-new round-section shadow-lg p-3">
           <h4 className="negative-b-margin-2 font-white font-weight-bold">Our Vision</h4>
                                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                               <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> 

               </div>
             </div>
             <div className="col-sm-4 mt-5 mt-sm-0">
                <div className="background-new round-section shadow-lg p-3">
                <h4 className="negative-b-margin-2 font-white font-weight-bold">Our Mission</h4>
                                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                               <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> 

               </div>
             </div>
             <div className="col-sm-4 mt-5 mt-sm-0">
                <div className="background-new round-section shadow-lg p-3">
                <h4 className="negative-b-margin-2 font-white font-weight-bold">Our Core Values</h4>
                                <img src="assets/img/lora.jpg" alt="Raised" className="img-fluid round-section" style={{width: "150px;"}} />
                               <p className="pt-2"> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p> 

               </div>
             </div>
            
            
           </div><br/> <br/>
         </div>
       </div>
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
   <div id="sliderRegular" className="slider"></div><br/><br/><br/><br/>

  
      
     </div>
             {/* <br />
             <div id="sliderDouble" className="slider slider-primary"></div>
   */}
   </div>
   </div>
          )
  };
}

export default about