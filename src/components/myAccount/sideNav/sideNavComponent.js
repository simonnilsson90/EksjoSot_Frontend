import "./sideNavComponent.css";

import { Link, useLocation } from "react-router-dom";

import React, { useState, useEffect } from "react";
import UP from "../../../assets/images/homepage/user.png";
import H from "../../../assets/images/homepage/home.png";
import DS from "../../../assets/images/homepage/datasets.png";
import ThreeP from "../../../assets/images/homepage/threepeople.png";
import TwoP from "../../../assets/images/homepage/twopeople.png";
import D from "../../../assets/images/homepage/document.png";
import FB from "../../../assets/images/homepage/feedback.png";
import HLP from "../../../assets/images/homepage/help.png";
import I from "../../../assets/images/homepage/invite.png";
import DM from "../../../assets/images/homepage/demomode.png";

function SideNav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/myAccount");

  return (
    <div className="display-align">
      <ul className="list-style">
        <div className="first-icon">
          <li className="seperate-elements-bottom">
            <div className="display-align">
              <img
                src={UP}
                width={40}
                height={40}
                alt="User Picture"
                className="seperate-icons-from-text"
              />
              <a>My Account</a>
            </div>
          </li>
        </div>
        <li className="seperate-elements-bottom">
          <div
            className={`display-align ${
              location.pathname === "/myAccount" ? "active-link" : ""
            }`}
          >
            <img
              src={H}
              width={24}
              height={24}
              alt="Home Picture"
              className="seperate-icons-from-text"
            />
            <Link
              to="/myAccount"
              className="nav-link"
              onClick={() => setActiveLink("/myAccount")}
            >
              Home
            </Link>
          </div>
        </li>

        <li className="seperate-elements-bottom">
          <div
            className={`display-align ${
              location.pathname === "/myAccount/reports" ? "active-link" : ""
            }`}
          >
            <img
              src={D}
              width={24}
              height={24}
              alt="Document Picture"
              className="seperate-icons-from-text"
            />
            <Link
              to="/myAccount/reports"
              className="nav-link"
              onClick={() => setActiveLink("/myAccount")}
            >
              {" "}
              Reports
            </Link>
          </div>
        </li>
        <li className="seperate-elements-bottom">
          <div
            className={`display-align ${
              location.pathname === "/myAccount/dataSets" ? "active-link" : ""
            }`}
          >
            <img
              src={DS}
              width={24}
              height={24}
              alt="Datasets Picture"
              className="seperate-icons-from-text"
            />

            <Link
              to="/myAccount/dataSets"
              className="nav-link"
              onClick={() => setActiveLink("/myAccount/dataSets")}
            >
              Data sets
            </Link>
          </div>
        </li>
        <div className="seperate-icons">
          <li>
            <div className="display-align">
              <img
                src={TwoP}
                width={24}
                height={24}
                alt="People Picture"
                className="seperate-icons-from-text"
              />
              <a className="list-style">People</a>
            </div>
          </li>
        </div>
        <li className="seperate-elements-bottom">
          <div className="display-align">
            <img
              src={ThreeP}
              width={24}
              height={24}
              alt="Audience Picture"
              className="seperate-icons-from-text"
            />
            <a>Audiences</a>
          </div>
        </li>

        <div className="seperate-divs">
          <li className="seperate-elements-bottom">
            <div className="display-align">
              <img
                src={DM}
                width={24}
                height={24}
                alt="Demo mode Picture"
                className="seperate-icons-from-text"
              />
              <a>Demo mode</a>
            </div>
          </li>
          <li className="seperate-elements-bottom">
            <div className="display-align">
              <img
                src={I}
                width={24}
                height={24}
                alt="Invite Picture"
                className="seperate-icons-from-text"
              />
              <a>Invite team</a>
            </div>
          </li>
          <li className="seperate-elements-bottom">
            <div className="display-align">
              <img
                src={FB}
                width={24}
                height={24}
                alt="Feedback Picture"
                className="seperate-icons-from-text"
              />
              <a>Feedback</a>
            </div>
          </li>
          <li className="seperate-elements-bottom">
            <div className="display-align">
              <img
                src={HLP}
                width={24}
                height={24}
                alt="Help and docs Picture"
                className="seperate-icons-from-text"
              />
              <a>Help and docs</a>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default SideNav;
