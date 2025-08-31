import './GetQuote.scss';

const GetQuote = ({ showGetQuote, setShowGetQuote }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowGetQuote(false);
    }

    // if (!showGetQuote) return null; // don't render unless open

    return (
        <div className={"modal-overlay " + (showGetQuote ? 'modal-animation' : '')} onClick={() => setShowGetQuote(false)}>
            <div className={"modal-container " + (showGetQuote ? 'container-animation' : '')} onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setShowGetQuote(false)}>
                    ✖
                </button>
                <h2>Get a Quote</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-wrapper'>
                        <label for='name'>Name</label>
                        <input id='name' type="text" placeholder="Your Name" />
                    </div>
                    <div className='input-wrapper'>
                        <label>Company</label>
                        <input type="text" placeholder="Your Company" />
                    </div>
                    <div className='input-wrapper'>
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className='input-wrapper'>
                        <label>Phone</label>
                        <input type="tel" placeholder="Your Phone Number" />
                    </div>
                    <div className='input-wrapper'>
                        <label>Message</label>
                        <textarea placeholder="Your Message"></textarea>
                    </div>
                    <button className='submitButton' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default GetQuote;