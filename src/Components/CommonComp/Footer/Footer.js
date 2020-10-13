import React from 'react'
import { Link } from "react-router-dom"
import classes from "./Footer.module.css"
export default function footer() {
    return (
        <>
            <footer className={classes.MainWrapper}>
                <div className={classes.FooterItemWrapper}>
                    <div className={classes.lists}>
                        <div className={classes.Heading}>
                            Edyoda
      </div>
                        <div className={classes.Content}><Link to="https://university.edyoda.com/about/">About Us</Link></div>
                        <div className={classes.Content}><Link to="https://university.edyoda.com/contact-us/">Contact Us</Link></div>
                        <div className={classes.Content}><Link to="https://university.edyoda.com/terms/">Terms Of Use</Link></div>
                        <div className={classes.Content}><Link to="https://university.edyoda.com/privacy/">Privacy Policy</Link></div>
                    </div>
                    <div className={classes.lists}>
                        <div className={classes.Heading}>
                            Resources
      </div>
                        <div className={classes.Content}><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/courses/all"> Courses </Link></div>
                        <div className={classes.Content}><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/videos/all"> Learning Videos </Link></div>
                        <div className={classes.Content}><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/stories"> EdYoda Stories </Link></div>
                        <div className={classes.Content}><Link target="_blank" to="https://university.edyoda.com">University</Link></div>
                    </div>
                    <div className={classes.lists}>
                        <div className={classes.Heading}>
                            For Enterprises
      </div>
                        <div className={classes.Content}><Link target="_blank" rel="noopener noreferrer" to="https://www.edyoda.com/enterprise/hiring"> Hire EdYoda Graduates </Link></div>
                        <div className={classes.Heading}>
                            Quick Links
      </div>
                        <div className={classes.Content}><Link to="https://www.edyoda.com/learn-and-earn" target="_blank" rel="noopener noreferrer">Learn and Earn</Link></div>
                        <div className={classes.Content}><Link to="https://www.edyoda.com/become-learning-enabler">Become a Learning-Enabler</Link></div>
                        <div className={classes.Content}><Link to="https://www.edyoda.com/learning-enabler-tips">Tips for Learning-Enabler</Link></div>
                        <div className={classes.Content}><Link to="https://www.edyoda.com/requestnewtopic">Request New Topic</Link></div>
                    </div>
                    <div className={classes.lists}>
                        <div className={classes.Heading}>
                            Connect
      </div>
                        <div className={classes.Content}>
                            2nd Floor #188, Survey No. - 123/1,
                            Incubes Building Next to McDonalds,
                            ITPL Main Rd, Brookefield,
                            Bengaluru, Karnataka-560037,
                            India
      </div>
                        <div className={classes.ItemIcon}>
                            <img src="https://assessments.edyoda.com/static/images/Email.svg" alt="email" style={{ textTransform: 'lowercase !important' }} />
        hello@edyoda.com
      </div>
                        <div className={classes.ItemIcon}>
                            <img src="https://assessments.edyoda.com/static/images/Call.svg" alt="email" />
        +91 8971554184
      </div>
                        <div className={classes.ItemSocialIcon}>
                            <img src="https://assessments.edyoda.com/static/images/landmark.png" alt="lo" />
                            <img src="https://assessments.edyoda.com/static/images/twitter.svg" alt="tw" />
                            <img src="https://assessments.edyoda.com/static/images/fbimage.png" alt="fb" style={{ width: "12px" }} />
                            <img src="https://assessments.edyoda.com/static/images/linkden.png" alt="li" />
                        </div>
                        <div className={classes.CopyrightSection}>
                            © 2020 <br /> zekeLabs Technologies Private Limited
      </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
