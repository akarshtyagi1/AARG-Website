import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import "./header.scss";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
    function scrollToWorkSection(sectionId) {
        const section = document.getElementById(sectionId);
        const offset = 150; // header height
        const top = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });
    }
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
                                <a onClick={() => scrollToWorkSection('product')}>Products <FaChevronDown /></a>
                                <a onClick={() => scrollToWorkSection('work')}>About</a>
                                <a onClick={() => scrollToWorkSection('solution')}>Services</a>
                                <a onClick={() => scrollToWorkSection('contact')}>Contact</a>
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