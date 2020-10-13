import React from 'react'
import { Link } from "react-router-dom"

export default function footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-item-container">
                    <div className="footer-link-section">
                        <div className="footer-section-heading">
                            Edyoda
      </div>
                        <div className="footer-item"><Link to="https://university.edyoda.com/about/">About Us</Link></div>
                        <div className="footer-item"><Link to="https://university.edyoda.com/contact-us/">Contact Us</Link></div>
                        <div className="footer-item"><Link to="https://university.edyoda.com/terms/">Terms Of Use</Link></div>
                        <div className="footer-item"><Link to="https://university.edyoda.com/privacy/">Privacy Policy</Link></div>
                    </div>
                    <div className="footer-link-section">
                        <div className="footer-section-heading">
                            Resources
      </div>
                        <div className="footer-item"><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/courses/all"> Courses </Link></div>
                        <div className="footer-item"><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/videos/all"> Learning Videos </Link></div>
                        <div className="footer-item"><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/stories"> EdYoda Stories </Link></div>
                        <div className="footer-item"><Link target="_blank" to="https://university.edyoda.com">University</Link></div>
                    </div>
                    <div className="footer-link-section">
                        <div className="footer-section-heading">
                            For Enterprises
      </div>
                        <div className="footer-item"><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/enterprise/hiring"> Hire EdYoda Graduates </Link></div>
                        <div className="footer-section-heading">
                            Quick Links
      </div>
                        <div className="footer-item"><Link to="https://www.edyoda.com/learn-and-earn" target="_blank" rel="noopener noreferrer">Learn and Earn</Link></div>
                        <div className="footer-item"><Link to="https://www.edyoda.com/become-learning-enabler">Become a Learning-Enabler</Link></div>
                        <div className="footer-item"><Link to="https://www.edyoda.com/learning-enabler-tips">Tips for Learning-Enabler</Link></div>
                        <div className="footer-item"><Link to="https://www.edyoda.com/requestnewtopic">Request New Topic</Link></div>
                    </div>
                    <div className="footer-link-section">
                        <div className="footer-section-heading">
                            Connect
      </div>
                        <div className="footer-item">
                            2nd Floor #188, Survey No. - 123/1,
                            Incubes Building Next to McDonalds,
                            ITPL Main Rd, Brookefield,
                            Bengaluru, Karnataka-560037,
                            India
      </div>
                        <div className="footer-item-with-icon">
                            <img src="/static/images/Email.svg" alt="email" style={{ textTransform: 'lowercase !important' }} />
        hello@edyoda.com
      </div>
                        <div className="footer-item-with-icon">
                            <img src="/static/images/Call.svg" alt="email" />
        +91 8971554184
      </div>
                        <div className="footer-section-social-links">
                            <img src="/static/images/landmark.png" alt="lo" className="land" />
                            <img src="/static/images/twitter.svg" alt="tw" className="tweet" />
                            <img src="/static/images/fbimage.png" alt="fb" className="fb" />
                            <img src="/static/images/linkden.png" alt="li" className="linkden" />
                        </div>
                        <div className="footer-section-copyright">
                            © 2020 <br /> zekeLabs Technologies Private Limited
      </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
