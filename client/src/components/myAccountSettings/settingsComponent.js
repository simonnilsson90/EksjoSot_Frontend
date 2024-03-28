
import "./settingsComponent.css";
 import G from "../../assets/images/homepage/girl.png";


function Settings(){

    return (

       <div className="marginParent">
<div >
          <h1>Settings</h1>
          <div className="center-button">
        <img src={G} />      
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
    )

   
    
}

export default Settings;