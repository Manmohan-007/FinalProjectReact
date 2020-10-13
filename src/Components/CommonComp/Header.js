import React from 'react'
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <nav className="navigation-container">
                <div className="nav-content-1">
                    <div className="logo-link">
                        <link className="navbar-brand" href="/" />
                        <img src="/static/images/logo.png" width={200} height={40} alt="edyoda-logo" />
                    </div>
                    <div className="nav-item"><link href="/" />practice arena</div>
                    <div className="nav-item"><link href="/classroom/" />classroom</div>
                    <div className="nav-item"><link href="https://recruitcrm.io/jobs/EdYoda_jobs" target="_blank" />View Jobs</div>
                    <div className="sidebar-toggle">
                        <img src="/static/images/burger-svg-icon.svg" alt="icon" className="burger-icon" onclick="toggleSidebar(true)" />
                    </div>
                </div>
                <div className="nav-content-2">
                    <div className="nav-item">
                        {/* <div className="dropdown">
                            <i onclick="dropdownFunc()" className="fa fa-bell-o dropbtn" style={{ fontSize: '20px', float: 'left', color: 'black' }} />
                            <span className="badge badge-danger" id="notification">4</span>
                            <div id="dropdownMenu" className="bell-menu">
                                <ul>
                                    <li role="presentation" style={{ listStyle: 'none' }}>
                                        <link href="#" className="dropdown-menu-header" />Notifications
            </li>
                                </ul>
                                <ul id="notification-list" className="timeline timeline-icons timeline-sm" style={{ margin: '10px', width: '210px' }}>
                                    <li id="unread">
                                        <link href="/notifications/4501" />
                                        <p>
                                            <link href="/notifications/4501" /> Solve a problem on our assessment portal
                <span className="timeline-icon">
                                                <i className="fa fa-bullhorn" style={{ color: 'blue' }} /></span>
                                            <span className="timeline-date">2020-10-09T01:15:06.935Z</span>
                                        </p></li><li id="unread">
                                        <link href="/notifications/4056" /><p>
                                            <link href="/notifications/4056" /> Solve a problem on our assessment portal
                <span className="timeline-icon"><i className="fa fa-bullhorn" style={{ color: 'blue' }} /></span>
                                            <span className="timeline-date">2020-10-02T01:15:05.740Z</span></p></li>
                                    <li><link href="/notifications/1085" />
                                        <p><link href="/notifications/1085" />DSA Assignment is active now. Will due on 2020-08-30 00:00:00+05:30
                <span className="timeline-icon">
                                                <i className="fa fa-bullhorn" style={{ color: 'blue' }} /></span><span className="timeline-date">2020-08-21T12:25:05.928Z</span></p></li><li id="unread"><link href="/notifications/708" /><p><link href="/notifications/708" />New topic `Array` added in `Data Structure`<span className="timeline-icon"><i className="fa fa-bullhorn" style={{ color: 'blue' }} /></span><span className="timeline-date">2020-08-03T06:52:19.378Z</span></p></li><li id="unread"><link href="/notifications/263" /><p><link href="/notifications/263" />New topic `Map Filter and Lambda` added in `Python`<span className="timeline-icon"><i className="fa fa-bullhorn" style={{ color: 'blue' }} /></span><span className="timeline-date">2020-07-28T07:44:53.127Z</span></p></li></ul>
                            </div>
                        </div> */}
                        {/* <div id="notification" class="" style="float: right; padding: 13px">
                  <Link href="#" style="float: left" onclick="toggleNotif()">
                      <i class="fa fa-bell-o" style="font-size: 20px; float: left; color: black"></i>
                  </Link>
                  <span class="badge badge-danger">0</span> */}
                        {/* <div class="dropdown-menu bell-menu" role="menu" aria-labelledby="dropdownMenu1">
                      <div class="notification-menu" style="top: 8vh;">
                          <li role="presentation">
                              <Link href="#" class="dropdown-menu-header">Notifications</Link>
                          </li>
                          <ul id="notification-list" class="timeline timeline-icons timeline-sm" style="margin:10px;width:210px;">
                          </ul>
                      </div>
                  </div> */}
                        {/* <div class="triangle-node-pointer"></div>
                  <div id="bell-menu">
                      <div class="notification-menu" style="top: 8vh;">
                          <ul>
                              <li role="presentation" style="list-style:none">
                                  <Link href="#" class="dropdown-menu-header">Notifications</Link>
                              </li>
                          </ul>
                          <ul id="notification-list" class="timeline timeline-icons timeline-sm" style="margin:10px;width:210px;"></ul>
                      </div>
                  </div>
              </div> */}
                    </div>
                    {/* <div class="nav-item">
              <div class="dropdown">
                  <Link  onclick="dropdownFunc()" class="dropbtn" href="#">
                      manmohan80gupta
                  </Link>        
                  <div id="dropdownMenu" class="dropdown-content">
                          <Link class="dropdown-item" href="/accounts/password_change/">Change Password</Link>
                          
                          <Link class="dropdown-item" href="/talentlms/update-job-profile/" target="_blank">Update Job Profile</Link>
                          
                          <div class="dropdown-divider"></div>
                          <Link class="dropdown-item" href="/accounts/logout/">Log Out</Link>
                  </div>
              </div> 
          </div> */}
                    <div className="nav-item dropdown">
                        <link className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" aria-expanded="false" />
      manmohan80gupta
      {/* <div className="dropdown-menu" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px 0px', borderColor: 'rgb(0, 0, 0)' }}>
                           Implement in phase 2*/}
                        {/* <Link class="dropdown-item" href="#">Profile</Link>
                  <Link class="dropdown-item" href="#">Submissions</Link>
                  <Link class="dropdown-item" href="#">Leaderboard</Link> */}
                        <link className="dropdown-item" href="/accounts/profile/" />Profile
        {/* <Link class="dropdown-item" href="/instructor/update-profile/">Update profile</Link> 
                            <link className="dropdown-item" href="/talentlms/update-job-profile/" target="_blank" />Update Job Profile
        <div className="dropdown-divider" />
                            <link className="dropdown-item" href="/accounts/logout/" />Log Out
        <link className="dropdown-item" href="/accounts/password_change/" />Change Password
      </div> */}
                    </div>
                </div>
            </nav>



        </>
    )
}
