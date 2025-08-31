import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import "./header.scss";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    function scrollToWorkSection(sectionId) {
        const section = document.getElementById(sectionId);
        const offset = 150; // header height
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        setOpenDrop(false);
        window.scrollTo({ top, behavior: "smooth" });
    }

    const [openDrop, setOpenDrop] = useState(false);

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
                                <a onClick={() => scrollToWorkSection('product')}>Products</a>
                                <a onClick={() => scrollToWorkSection('solution')}>Solutions</a>
                                <a onClick={() => scrollToWorkSection('work')}>About</a>
                                <a onClick={() => scrollToWorkSection('contact')}>Contact</a>
                            </nav>
                        </div>
                        <div className="hamburger-menu">
                            <button>Get Quote</button>
                            <GiHamburgerMenu className="icon" onClick={()=>setOpenDrop(!openDrop)} style={{ fill: 'white', verticalAlign: 'middle' }} />
                        </div>
                    </div>
                </div>
                <div className={"menu-drop " + (openDrop ? 'open' : '')}>
                    <div className="menu-drop-container">
                        <a onClick={() => scrollToWorkSection('product')}>Products</a>
                        <a onClick={() => scrollToWorkSection('solution')}>Solutions</a>
                        <a onClick={() => scrollToWorkSection('work')}>About</a>
                        <a onClick={() => scrollToWorkSection('contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;