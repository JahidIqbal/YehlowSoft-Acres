import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, description, id } = props.service;
    return (
        <div data-aos="flip-right">
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-uppercase ">{name} </h5>
                        <p className="card-text"> {description}</p>

                        <Link to={`/buynow/${id}`} >
                            <button className="btn btn-dark text-info border-0 "  >
                                Buy now</button>
                        </Link>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;