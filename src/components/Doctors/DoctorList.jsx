import React from 'react';
import { doctors } from '../../assets/data/doctors'; // Updated path
import DoctorCard from './DoctorCard'; // Update this path if necessary

const DoctorList = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {doctors.map((doctor) => (
          <div className="col-md-4" key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
