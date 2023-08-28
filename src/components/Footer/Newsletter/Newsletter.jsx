import React from "react";
import { useState } from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    const [subValue, setSubValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setSubValue('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    };
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Be a part of Beat Heaven.</span>
                <span className="big-text">
                    Sign Up for Latest Updates and Offers.
                </span>
                <form className="form" onSubmit={submitHandler}>
                    <input 
                        type="email"
                        className="input_field"
                        placeholder="Email Address"
                        required
                        value={subValue}
                        onChange={(e) => setSubValue(e.target.value)} 
                    />
                    <button type="submit" className="btn">Subscribe</button>
                </form>
                <span className="text">
                    Don't Worry! Your data is secured with us.
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/nikhil-sharma-162699276/">
                            <button>
                            <FaLinkedinIn size={14} />
                            </button>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/Nik9060/">
                            <button>
                            <FaFacebookF size={14} />
                            </button>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.instagram.com/nikhil_sharma_9060/">
                            <button>
                            <FaInstagram size={14} />
                            </button>
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
