import UserPic from "../assets/images/homepage/user.png";
import Datasets from "../assets/images/homepage/datasets.png";

import Home from "../assets/images/homepage/home.png";
import ThreePeople from "../assets/images/homepage/threepeople.png";
import TwoPeople from "../assets/images/homepage/twopeople.png";
import Document from "../assets/images/homepage/document.png";
import Feedback from "../assets/images/homepage/feedback.png";
import Help from "../assets/images/homepage/help.png";
import Invite from "../assets/images/homepage/invite.png";
import DemoMode from "../assets/images/homepage/demomode.png";
import "./MyAccount.css";
import Settings from "../components/myAccountSettings/settingsComponent";
import DataSetsComponent from "../components/dataSets/dataSetsComponent";
import { useState } from "react";


function MyAccount() {
const [activeComponent, setActiveComponent] = useState(null)


const handleNavLinkClick = (componentName) => {
  setActiveComponent(componentName)
}

  return (
    <>
      <div className="parent-div">
        <div className="display-align">
          <ul className="list-style">
            <div className="first-icon">
              <li className="seperate-elements-bottom">
                <div className="display-align">
                  <img
                    src={UserPic}
                    width={40}
                    height={40}
                    alt="User Picture"
                    className="seperate-icons-from-text"
                  />
                  <a className="sideNavLink" onClick={() => handleNavLinkClick("MyAccount")}
                  >My Account</a>
                 
                </div>
              </li>
            </div>
            <li className="seperate-elements-bottom">
              <div className="display-align">
                <img
                  src={Home}
                  width={24}
                  height={24}
                  alt="Home Picture"
                  className="seperate-icons-from-text"
                />
                <a>Home</a>
              </div>
            </li>
            <li className="seperate-elements-bottom">
              <div className="display-align">
                <img
                  src={Document}
                  width={24}
                  height={24}
                  alt="Document Picture"
                  className="seperate-icons-from-text"
                />
                <a>Reports</a>
              </div>
            </li>
            <li className="seperate-elements-bottom">
              <div className="display-align">
                <img
                  src={Datasets}
                  width={24}
                  height={24}
                  alt="Datasets Picture"
                  className="seperate-icons-from-text"
                />
                 <a className="sideNavLink" onClick={() => handleNavLinkClick("DataSets")}>Data sets</a>
                
              </div>
            </li>
            <div className="seperate-icons">
              <li>
                <div className="display-align">
                  <img
                    src={TwoPeople}
                    width={24}
                    height={24}
                    alt="People Picture"
                    className="seperate-icons-from-text"
                  />
                  <a>People</a>
                </div>
              </li>
            </div>
            <li className="seperate-elements-bottom">
              <div className="display-align">
                <img
                  src={ThreePeople}
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
                    src={DemoMode}
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
                    src={Invite}
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
                    src={Feedback}
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
                    src={Help}
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

        {activeComponent === "MyAccount" && <Settings />}
        {activeComponent === "DataSets" && <DataSetsComponent />}
        
       

        {/*
        <div className="padding-left">
          <h1>Settings</h1>
          <div className="center-button">
            <img src={Girl} />
            <div className="seperate-text">
              <h3 className="seperate-elements-bottom-v2">Helen</h3>
              <p className="grey-mail">@gmail.com</p>
            </div>
            <div className="container">
              <button className="start-right">Change photo</button>
            </div>
          </div>
          <p>Name</p>
          <input placeholder="name..." className="input-fields"></input>
          <p>Email</p>
          <input
            placeholder="email..."
            type="email"
            className="input-fields"
          ></input>
          <p>Password</p>
          <input
            placeholder="password..."
            type="password"
            className="input-fields"
          ></input>
          <div>
            <button className="save-button">Save</button>
          </div>
        </div>
        
        */}
      
        
      </div>
    </>
  );
}

export default MyAccount;
