/* eslint-disable no-unused-vars */
import React from 'react';
import { services } from '../../assets/data/services';
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {services.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <ServiceCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
