import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {NotificationsNone,Language,Settings,Logout,AccountBox} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
            <span className="logo">Bioscoop</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
          <div className="dropdowntop">
            <Settings />
            <div className="dropdowntop-content">
            <p><Link to="/Login" className="signingtop"><AccountBox/>&nbsp;Sign In</Link></p>
            <p><Link to="/" className="signingtop"><Logout/>&nbsp;LogOut</Link></p>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
