import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h3>SALE!!!</h3>
                    <p>
                    Sound Savings: Tune into Affordable Luxury! 🎧🔥 Unbeatable deals on premium headphones – Elevate your audio experience without breaking the bank! 🎶💰 Hurry Up, limited stock available!
                    </p>
                    <div className="ctas">
                        <div className="banner-cta v2" onClick={() => navigate("./Category/1")}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Banner"/>
            </div>
        </div>
    );
};

export default Banner;
