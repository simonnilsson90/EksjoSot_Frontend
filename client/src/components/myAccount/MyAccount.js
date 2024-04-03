
import "./MyAccount.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SideNav from "./sideNav/sideNavComponent";
import DataSetsComponent from "./dataSets/dataSetsComponent";

import Girl from "../../assets/images/homepage/girl.png"





function MyAccount() {
  const [activeComponent, setActiveComponent] = useState("MyAccount");

  const handleNewDataClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="parentDiv">
   {/*  <div>hej</div> 
   <div>då</div>  */}    
   
{/* */}
 
<SideNav />

        <div className="marginParent">
          <div>
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
        </div>


      </div>
    </>
  );
}


export default MyAccount;
