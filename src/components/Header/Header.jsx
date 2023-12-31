import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("./Category/5")}>Categories</li>
                        <li onClick={() => navigate("/about")}>About</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        BEAT HEAVEN   
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <span className="cart-icon"
                            onClick={() => setShowCart(true)}>
                                <CgShoppingCart />
                                {!!cartCount && <span>{cartCount}</span>}
                        </span>
                        <FaRegUser />
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;
