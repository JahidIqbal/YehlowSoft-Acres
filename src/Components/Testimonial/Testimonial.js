import React from 'react';

const Testimonial = ({ test }) => {
    const { name, address, description, img } = test;

    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt="" />
                <p>{description}</p>
            </div>
            <div className="testimonial-name text-info">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default Testimonial;