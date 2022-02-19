import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleLight" className="carousel carousel-light slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active " data-bs-interval="10000">
                        <img src="  https://www.wallpapertip.com/wmimgs/172-1725869_house-wallpapers.jpg" className="d-block w-100 " alt="..." />

                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className='text-black fw-bold fs-1 text-uppercase'>The Best Way To Find Your Perfect Home</h5>
                            <p className='text-black'>Owning a home is a keystone of wealth nor can it be carried away.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://luxurylifestyleawards.com/wp-content/uploads/2020/02/MAIN-IMAGE.jpg" className="d-block w-100" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-black fw-bold fs-1 text-uppercase'>Best House For You and your family</h5>
                            <p className='text-black'>Buyers decide in the first eight seconds of seeing a home if they're interested in buying it</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.teahub.io/photos/full/151-1513340_real-estate-banner-design.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-black fw-bold fs-1 text-uppercase'>The better way To buy house</h5>
                            <p className='text-black'>Ninety percent of all millionaires become so through owning real estate.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden" >Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;