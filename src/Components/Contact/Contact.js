import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h1 className=" fw-bolder text-uppercase w-100 mb-3 text-center underline mt-2" >Contact Us</h1>
            <div className="contact bg-light w-75 mx-auto">

                <div className="row m-0">

                    <form onSubmit="https://formsubmit.co/ab7d8f932cb5ae6691a02db5d0b0c32b" method="POST">
                        <input type="text" name="name" placeholder="Your Name" className="box" required />
                        <input type="email" name="email" placeholder="Your Email" className="box" required />
                        <input type="number" name="subject" placeholder="Your Number" className="box" required />
                        <textarea name="message" id="" cols="30" rows="10" className="box message" placeholder="Message"
                            required></textarea>
                        <button type="submit" className="btn text-info" value="send">send <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;