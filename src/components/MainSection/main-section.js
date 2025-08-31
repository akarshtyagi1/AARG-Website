import './main-section.scss';
import { MdOutlineWarehouse } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { LuFence } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { CiMail } from "react-icons/ci";


const MainSection = () => {

    function scrollToWorkSection(sectionId) {
        const section = document.getElementById(sectionId);
        const offset = 150; 
        const top = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });
    }


    return (
        <>
            <div className='main-section'>
                <div className='home-banner'>
                    <h1>Smarter Racking.<br /> Smarter Warehousing.<br /> Smarter Solutions.</h1>
                    <div onClick={() => scrollToWorkSection('work')} className='view-product-button'>View Our Recent Work</div>
                </div>

                <div id='product' className='middle-section'>
                    <div className='image-gallery'>
                        <div className='gallery-item'>
                            <div>
                                <h1>Pallet Racking System</h1>
                                <p>Our pallet racking systems are designed to maximize storage capacity <br /> and improve warehouse efficiency.</p>
                            </div>
                            <img src='assets/feature-block-01.jpg' alt='feature-01' />
                        </div>
                        <div className='gallery-item'>
                            <div>
                                <h1>Order Picking Systems</h1>
                                <p>We offer customized order picking systems that streamline the picking process and enhance productivity.</p>
                            </div>
                            <img src='assets/feature-block-02.jpg' alt='feature-02' />
                        </div>
                        <div className='gallery-item'>
                            <div>
                                <h1>High Density Storage</h1>
                                <p>Our high density storage solutions optimize space utilization and provide easy access to inventory.</p>
                            </div>
                            <img src='assets/feature-block-03.jpg' alt='feature-03' />
                        </div>
                    </div>
                    <h2 className='tagline'>A professionally designed warehouse will help you ...</h2>
                    <div className='features'>
                        <div className='feature'>
                            <MdOutlineWarehouse className='icon' />
                            <h3>Maximize Space</h3>
                            <p>Our expert team will analyze your warehouse layout and
                                design a racking system that optimizes vertical and horizontal space,
                                allowing you to store more inventory without expanding your facility.</p>
                        </div>
                        <div className='feature'>
                            <BsBoxes className='icon' />
                            <h3>Increase Efficiency</h3>
                            <p>With a well-planned racking system, you can streamline your operations,
                                reduce picking times, and improve overall workflow,
                                leading to faster order fulfillment and increased productivity.</p>
                        </div>
                        <div className='feature'>
                            <FaHelmetSafety className='icon' />
                            <h3>Boost Safety</h3>
                            <p>Safety is our top priority. We design racking systems that comply with industry standards,
                                ensuring the safety of your employees and protecting your valuable inventory from damage.</p>
                        </div>
                    </div>
                </div>

                <div id='solution' className='solution-section'>
                    <div className='solution-main'>
                        <div className='solution-left'>
                            <h1>Looking for a custom solution?</h1>
                            <p>Designing the right storage solution for your warehouse goes beyond just the racking itself.</p>
                            <p>It’s about bringing together the right components to enhance storage capacity,
                                racking efficiency, and overall material handling within your facility.</p>
                            <p>At AAR G Industries, we specialize in creating tailored industrial racking solutions
                                that fit your unique requirements. We carefully assess your needs and integrate a range
                                of products to deliver the best outcome—helping you maximize space utilization and streamline workflow.</p>

                            <p className='warehouse-workers'>
                                <img src='assets/warehouse-workers.png' alt='workers' />
                            </p>
                        </div>
                        <div className='solution-right'>
                            <div className='solution-feature'>
                                <MdOutlineEngineering className='icon' />
                                <h1>Engineering Services</h1>
                                <p>Our team of experienced engineers will work closely with you to design a
                                    racking system that meets your specific needs and complies with industry standards.</p>
                            </div>
                            <div className='solution-feature'>
                                <GrCompliance className='icon' />
                                <h1>Safety Inspections</h1>
                                <p>We offer comprehensive safety inspections to ensure that your racking system is in compliance
                                    with safety regulations and industry best practices.</p>
                            </div>
                            <div className='solution-feature'>
                                <LuFence className='icon' />
                                <h1>Racking Accessories</h1>
                                <p>We provide a wide range of racking accessories, including safety barriers, wire decking,
                                    and column protectors, to enhance the safety and functionality of your racking system.</p>
                            </div>
                            <div className='solution-feature'>
                                <HiOutlineWrenchScrewdriver className='icon' />
                                <h1>Installation Maintenance</h1>
                                <p>Our team of skilled technicians will ensure that your racking system is installed correctly
                                    and provide ongoing maintenance to keep it in optimal condition.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='work' className='work-section'>
                    <h1>Empowering Businesses with Smarter Storage Solutions</h1>
                    <div className='work-intro'>
                        <p>For over 5 years, AAR G Industries has been providing innovative warehouse storage
                            solutions tailored to the needs of diverse industries, including manufacturing,
                            third-party logistics (3PL), retail, distribution centers, cold storage, and automotive facilities.</p>
                        <p>We are dedicated to supporting businesses of every scale with reliable, efficient,
                            and cost-effective solutions. Headquartered in Ghaziabad, our services extend across
                            India, helping companies optimize their warehouse operations. Experience the AAR G difference
                            and join our growing list of satisfied clients.</p>
                    </div>
                    <div className='partner-logos'>
                        <img className='partner-logo' src='assets/moon_beverages.jpg' alt='moon-beverages' />
                        <img className='partner-logo' src='assets/penguin.jpg' alt='penguin' />
                        <img className='partner-logo' src='assets/ti_automotive.jpg' alt='ti-automotive' />
                        <img className='partner-logo' src='assets/uniparts.jpg' alt='uniparts' />
                        <img className='partner-logo' src='assets/shivalal.jpg' alt='shivalal' />
                        <img className='partner-logo' src='assets/mek.png' alt='MEK' />
                    </div>
                </div>

                <div id='contact' className='footer'>
                    <div className='footer-container'>
                        <div className='floating-box'>
                            <div>
                                <h2>Ready to optimize your warehouse?</h2>
                                <p>Contact us today for a free consultation and quote</p>
                            </div>
                            <div>
                                <button className='contact-button'>Contact Us</button>
                                <p>or call 98703 10987</p>
                            </div>
                        </div>
                        <div>
                            <div className='contact-info'>
                                <h1>Contact Us</h1>
                                <p className='address1'><strong>AAR G Industries</strong><br />
                                    87 Radha Kunj II,<br />
                                    Nandgram, Ghaziabad<br />
                                    Uttar Pradesh, 201003<br />
                                    Phone: 98703 10987<br />
                                    <CiMail style={{ verticalAlign: 'bottom' }} /> : aargindustries<MdAlternateEmail style={{ verticalAlign: 'bottom' }} />gmail.com
                                </p>
                            </div>
                        </div>
                        <div className='footer-separator'>
                            <p className='copyright'>© 2025 AAR G Industries. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection;