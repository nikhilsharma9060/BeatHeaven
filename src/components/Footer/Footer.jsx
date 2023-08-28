import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Beat Heaven is a distinguished online emporium that presents a wide array of branded audio devices. With a commitment to customer satisfaction, it offers an assortment of captivating offers and deals. Discover an unparalleled auditory experience through their premium product selection while enjoying exceptional savings. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacts</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Behror, Kotputli-Behror, Rajasthan, India [301701]
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:<a href="tel: 6367297578"> +91 - 6367297578</a></div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: nikhilsharma9060@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Wireless Earbuds</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                            2023 | BEAT HEAVEN | ONLINE STORE : Developed by <a href="https://www.instagram.com/nikhil_sharma_9060/" target="blank">Nikhil Sharma</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
