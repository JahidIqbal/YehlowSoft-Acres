import React from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';

const Certifications = () => {
    return (
        <div className="box">
            <h1 className=" fw-bolder text-uppercase w-100 mt-5 text-center underline mt-2" >Certifications</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="box-part text-center"> <i className='fas fa-user-lock fs-1 text-info' aria-hidden="true"></i>
                            <div className="title">
                                <h3>Best Safety</h3>
                            </div>
                            <div className="text"> <span>We got certification for best Security.</span> </div> <Link to="/" className='text-decoration-none text-info'>Learn More</Link>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="box-part text-center"> <i className="fas fa-hand-holding-water fs-1 text-info"></i>
                            <div className="title">
                                <h3>Water Treatment</h3>
                            </div>
                            <div className="text"> <span>We got certification for Water supply.</span> </div> <Link to="/" className='text-decoration-none text-info'>Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="box-part text-center"> <i className="fas fa-building fs-1 text-info" aria-hidden="true"></i>
                            <div className="title">
                                <h3>Governamen Building</h3>
                            </div>
                            <div className="text"> <span>We got certification for best Quality acres.</span> </div> <Link to="/" className='text-decoration-none text-info'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;