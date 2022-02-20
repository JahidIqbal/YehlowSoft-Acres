import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-white mt-4'>

            <footer className="page-footer font-small bg-dark" >


                <div className="container text-white">


                    <div className="row text-center d-flex justify-content-center pt-5 mb-3 ">


                        <div className="col-md-2 mb-3 ">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">About us</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Acres</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Awards</Link>

                        </div>
                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Help</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Contact</Link>

                        </div>


                    </div>

                    <hr className="rgba-white-light" style={{ margin: ' 0 15%' }} />


                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4 text-white">


                        <div className="col-md-8 col-12 mt-5">
                            <p style={{ lineHeight: "1.7rem" }}>A Yehlosoft is a Real estate property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.
                            </p>
                        </div>


                    </div>

                    <hr className="clearfix d-md-none rgba-white-light" style={{ margin: ' 10% 15% 5%' }} />


                    <div className="row pb-3">


                        <div className="col-md-12">

                            <div className="mb-5 text-center">


                                <Link className="fb-ic text-white">
                                    <i className="fab fa-facebook-f fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="tw-ic text-white">
                                    <i className="fab fa-twitter fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="gplus-ic text-white">
                                    <i className="fab fa-google-plus-g fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="li-ic text-white">
                                    <i className="fab fa-linkedin-in fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="ins-ic text-white">
                                    <i className="fab fa-instagram fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="pin-ic text-white">
                                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                                </Link>

                            </div>

                        </div>


                    </div>


                </div>



                <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
                    <Link className='text-decoration-none text-white' to="https://ExpoTrip.com"> YehloSost.com</Link >
                </div>


            </footer>

        </div>
    );
};

export default Footer;