/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from '../components/About';
import { FaArrowRight } from 'react-icons/fa';
import ServiceList from '../components/Services/ServiceList';
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import DoctorList from '../components/Doctors/DoctorList.jsx';
import Footer from '../components/Footers/footer.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="container mt-5" style={{ background: 'linear-gradient(to right, #f0f8ff, #e6e6fa)' }}>
        <div className="row align-items-center">
          {/* Left Column for Text */}
          <div className="col-12 col-lg-6">
            <h1 className="display-4 fw-bold mb-3">Welcome to DocBook</h1>
            
            <p className="lead mb-4">
              Book appointments with the best doctors in town.
            </p>
            
            <button className="btn btn-primary mb-5">Request an Appointment</button>

            <div className="row mt-4">
              <div className="col-4 d-flex flex-column align-items-center">
                <h2 className="display-6 fw-bold text-dark mb-1">30+</h2>
                <span className="d-block rounded mb-1" style={{ width: '60px', height: '2px', backgroundColor: 'yellow' }}></span>
                <p className="text-muted mb-0">Years of Experience</p>
              </div>

              <div className="col-4 d-flex flex-column align-items-center">
                <h2 className="display-6 fw-bold text-dark mb-1">15+</h2>
                <span className="d-block rounded mb-1" style={{ width: '60px', height: '2px', backgroundColor: 'purple' }}></span>
                <p className="text-muted mb-0">Clinic Locations</p>
              </div>

              <div className="col-4 d-flex flex-column align-items-center">
                <h2 className="display-6 fw-bold text-dark mb-1">100%</h2>
                <span className="d-block rounded mb-1" style={{ width: '60px', height: '2px', backgroundColor: 'green' }}></span>
                <p className="text-muted mb-0">Patient Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column for Images */}
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-between">
              <div className="p-2">
              
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="h2 mb-3">Providing the best medical services</h2>
            <p className="text-muted">
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <div className="row mt-5">
            {/* First Card */}
            <div className="col-md-4 d-flex">
              <div className="card p-4 w-100">
                <div className="text-center">
                  <img src={icon01} alt="image" className="img-fluid" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="h4 fw-bold">Find a Doctor</h2>
                  <p className="text-muted mt-3">
                    World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
                    <span className="circle-icon">
                      <FaArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-md-4 d-flex">
              <div className="card p-4 w-100">
                <div className="text-center">
                  <img src={icon02} alt="image" className="img-fluid" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="h4 fw-bold">Book an Appointment</h2>
                  <p className="text-muted mt-3">
        Easy and quick booking. Just a few clicks away from scheduling your next doctor's visit.
        <Link to="/doctor" className="text-primary text-decoration-none">
          <FaArrowRight />
        </Link>
      </p>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="col-md-4 d-flex">
              <div className="card p-4 w-100">
                <div className="text-center">
                  <img src={icon03} alt="image" className="img-fluid" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="h4 fw-bold">Get Health Advice</h2>
                  <p className="text-muted mt-3">
                    Access expert health advice to manage your well-being and stay informed.
                    <span className="circle-icon">
                      <FaArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About className="mt-5 pt-5" />  
        
        

      {/* -----Services section */}
       <section>
        <div className="container">
          <div className='xl:w-[470] mx auto'>
            <h2 className='heading text-center'>Our Medical services</h2>
          <p className='heading text-center'>World-class care for everyone. Our health System offers unmatched,exper health care.</p>
          </div>
          <ServiceList />
        </div>
       </section>
       
       {/* -----Services section end */}
       {/* feature section */}

       <section className="py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Content */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
            <h2 className="display-4 mb-4">Get virtual treatment <br /> anytime.</h2>
            <ul className="list-unstyled pl-0">
              <li className="mb-2">1. Schedule the appointment directly.</li>
              <li className="mb-2">2. Search for your physician here, and contact their office.</li>
              <li>3. View our physicians who are accepting new patients, use the online scheduling tool.</li>
            </ul>
            <Link to="/"><button className="btn btn-primary">Learn More</button></Link>
          </div>

          {/* Feature Image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="position-relative" style={{ maxWidth: '400px' }}>
              <img src={featureImg} className="img-fluid" alt="Feature" style={{ maxWidth: '100%', height: 'auto' }} />

              <div className="position-absolute bottom-0 start-0 bg-white p-3 rounded" style={{ width: '150px', maxWidth: '200px' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                    <p className="text-muted mb-0">Tue, 24</p>
                    <p className="text-muted mb-0">10:00AM</p>
                  </div>
                  <span className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px' }}>
                    <img src={videoIcon} alt="Video Icon" style={{ width: '20px', height: '20px' }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* feature section end*/}

        {/* doctors */}
        <section>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="display-4">Our Great Doctors</h2>
          <p className="lead text-muted">
            World-class care for everyone. Our health system offers unmatched expert health care.
          </p>
        </div>
        <DoctorList />
      </div>
    </section>

    {/* faq sections */}
    <section>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="display-4">Frequently Asked Questions</h2>
          <p className="lead text-muted">
            Find answers to the most common questions about our services and procedures.
          </p>
        </div>
       
      </div>
    </section>
    {/* testimonies*/}
    <section className="testimonial-section mt-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="display-4">What Our Clients Say</h2>
        </div>
        {/* <TestimonialList /> */}
      </div>
    </section>

<Footer />
    </>
  );
};

export default Home;
