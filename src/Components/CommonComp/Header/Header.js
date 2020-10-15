import React from 'react'
import classes from "./Header.module.css"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <div className={classes.MainWrapper}>
                <div className={classes.LeftSide}>
                    <div className={classes.LogoWrapper}>
                        <Link className={classes.LogoLink} to="/">
                            <img src="https://assessments.edyoda.com/static/images/logo.png" alt="edyoda-logo" />
                        </Link>
                    </div>
                    <div className={classes.ContentWrapper}><Link to="/" >practice arena</Link> </div>
                    <div className={classes.ContentWrapper}><Link to="/classroom" >classroom</Link> </div>
                    <div className={classes.ContentWrapper}><Link to="/" target="_blank" >View Jobs</Link></div>
                    <div className={classes.Hamburger}>
                        <img src="https://assessments.edyoda.com/static/images/burger-svg-icon.svg" alt="icon" onclick="" />
                    </div>
                </div>
                <div className={classes.RightSideWrapper}>
                    <div className={classes.NotificationWrapper}>
                        <div className={classes.IconWrapper}>
                            <i className="far fa-bell"></i>
                            <span className={classes.Badge}>4</span>

                        </div>
                    </div>

                    <div className={classes.DropdownContent}>
                        <Link className={classes.UserName} to="#"  >
                            Manmohan
                            <i class="fas fa-caret-down"></i>
                        </Link>
                        <div className={classes.DropdownContainer} >
                            <Link className={classes.DropdownItem} to="#">Profile</Link>
                            <Link className={classes.DropdownItem} to="#" target="_blank" >Update Job Profile</Link>
                            <div className={classes.DropdownDivider} />
                            <Link className={classes.DropdownItem} to="#">Log Out </Link>
                            <Link className={classes.DropdownItem} to="#">Change Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
