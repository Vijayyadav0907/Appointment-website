/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

const DoctorCard = ({ doctor }) => {
  const { name, avgRating, totalRating, photo, specialty, totalPatients, hospital } = doctor;

  return (
    <Link to={`/doctor/${doctor.id}`} className="card p-3 mb-4 text-decoration-none text-dark">
      <div className="d-flex align-items-center">
        {/* Doctor Image */}
        <img
          src={photo}
          alt={name}
          className="img-fluid rounded-circle me-3"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
        {/* Doctor Details */}
        <div>
          <h2 className="h5 mb-2">{name}</h2>
          <p className="mb-1 text-muted">{specialty}</p>
          <div className="d-flex align-items-center mb-2">
            <span className="me-2">Rating:</span>
            <div className="d-flex align-items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={index < Math.round(avgRating) ? 'text-warning' : 'text-muted'} />
              ))}
              <span className="ms-2 text-muted">({totalRating} ratings)</span>
            </div>
          </div>
          <p className="mb-1 text-muted">Patients: {totalPatients}</p>
          <p className="text-muted">Hospital: {hospital}</p>
        </div>
        {/* Arrow Icon */}
        <div className="ms-auto">
          <FaArrowRight className="text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
