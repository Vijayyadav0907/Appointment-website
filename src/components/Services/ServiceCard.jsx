/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ item, index} ) => {
    const { name, desc, bgColor, textColor } = item;

    return (
        <div className="py-4 px-3 px-lg-5">
            <h2 className="h3 mb-3" style={{ color: '#343a40' }}>{name}</h2>
            <p className="mb-4" style={{ color: '#6c757d' }}>{desc}</p>

            <div className="d-flex align-items-center justify-content-between mt-4">
                <Link to="/doctor" className="text-primary text-decoration-none">
                    <FaArrowRight />
                </Link>
                <span className="d-flex align-items-center justify-content-center" style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: bgColor,
                    color: textColor,
                    borderRadius: '6px 0 0 6px',
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '30px'
                }}>
                    {index + 1}
                </span>
            </div>
        </div>
    );
};

export default ServiceCard;
