import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import "./header.scss";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
    return (
        <>
            <div className="header">
                <div className="header-social-ribbon">
                    <div className="container">
                        <p>
                            <a><FaLinkedin style={{ verticalAlign: 'middle' }} /></a>
                            <a><FaInstagram style={{ verticalAlign: 'middle' }} /></a>
                        </p>
                        <p>
                            <a><FaPhone style={{ verticalAlign: 'top' }} /></a>
                            <p className="mobile">98703 10987</p>
                        </p>
                    </div>
                </div>

                <div className="header-main">
                    <div className="container">
                        <div>
                            <img src="assets\logo-cropped.png" className="logo" alt="logo" />
                        </div>
                        <div className="header-right">
                            <nav>
                                <a href="#home">Products <FaChevronDown /></a>
                                <a href="#about">About</a>
                                <a href="#services">Services</a>
                                <a href="#contact">Contact</a>
                            </nav>
                            <button>Get Quote</button>
                        </div>
                        <div className="hamburger-menu">
                            <GiHamburgerMenu style={{ fill: 'white' }} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default header;