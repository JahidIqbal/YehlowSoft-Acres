import React from 'react';
import './HeadBanner.css'

const HeadBanner = () => {
    return (
        <div className="bg-dark">
            <div className="row justify-content-center align-items-center text-white">

                <div className="col-md-6 justify-content-center align-items-center">
                    <h1 className="h1 font-weight-bold text-uppercase">we <span className="text-primary">care</span> <br /> for your <span className="text-primary">Health</span></h1>
                    <p className="font-italic font-weight-bold">Travelling is one of the most interesting things you can do in your life. While you always make sure to get the best photographs in your travel, you should get the right captions to complement the pictures. In this collection of funny travel captions, you are going to find what you have been looking for. Take a look and see for yourself.
                    </p>
                </div>
                <div className="col-md-6 ">
                    <img src="https://www.realestateexpress.com/wp-content/uploads/2018/01/blog-image-real-estate-brokerage.jpg" alt="" style={{ width: "800px", height: "400px" }} className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default HeadBanner;