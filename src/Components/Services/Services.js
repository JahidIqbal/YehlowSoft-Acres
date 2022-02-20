import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./acres.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            {
                services.length === 0 ?
                    <div className="spinner-border text-info " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    :
                    <div className=" mx-auto mt-5">
                        <h1 className=" fw-bolder text-uppercase w-100 mb-3 text-center underline mt-2" >Properties For Sale</h1>

                        <div className="row row-cols-1 row-cols-md-3 g-4 " >

                            {
                                services.map(service => <Service key={service.id} service={service}></Service>)
                            }


                        </div>
                    </div>
            }

        </div>
    );
};

export default Services;