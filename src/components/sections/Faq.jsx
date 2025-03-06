import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../elements/Accordion'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            
            <div className="headline">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            <div className="contact-options">
                <div className="contact-option">
                    <i class="fa-solid fa-phone"></i>
                    <p>Still have questions?</p>
                    <Link to="/contact">Contact us</Link>
                </div>
                <div className="contact-option">
                    <i class="bi bi-chat-dots-fill"></i>
                    <p>Don't like phone calls?</p>
                    <Link to="/contact">Contact us</Link>
                </div>
            </div>

            <Accordion />

        </div>
    </section>
  )
}

export default Faq