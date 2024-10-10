// import React from 'react';
import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";

const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="container text-center mb-5">
          <h1 className="display-4 fw-bold">About Us</h1>
        </div>
        <div className='container'>
          <div className="row align-items-center">
            {/* About Image Section */}
            <div className="col-lg-6 position-relative order-2 order-lg-1">
              <img 
                src={aboutImg} 
                alt='' 
                className="img-fluid" 
                style={{ width: '400px', height: 'auto' }}
              />
              <div 
                className="position-absolute top-0 end-0" 
                style={{ width: '400px', height: '200px', right: '-10%', top: '10%' }} 
              >
                <img 
                  src={aboutCardImg} 
                  alt='' 
                  className="img-fluid" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>

            {/* About Text Section */}
            <div className="col-lg-6 order-1 order-lg-2">
              <h2 className='h2 mb-3'>Proud to be one of the nations best</h2>
              <p className="mb-4">For 30 years in a row, U.S. News & World Report has recognized us as one of the best public hospitals in the Nation and #1 in India.</p>
              <p className='text-muted mb-4'>Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished but towards what we can do tomorrow.</p>
              <a href='/' className='btn btn-primary'>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
