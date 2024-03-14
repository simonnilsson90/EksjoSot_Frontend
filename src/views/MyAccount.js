import UserPic from "../assets/images/homepage/user.png";
import Datasets from "../assets/images/homepage/datasets.png";
import Girl from "../assets/images/homepage/girl.png";
import Home from "../assets/images/homepage/home.png";
import ThreePeople from "../assets/images/homepage/threepeople.png";
import TwoPeople from "../assets/images/homepage/twopeople.png";
import Document from "../assets/images/homepage/document.png";
import Feedback from "../assets/images/homepage/feedback.png";
import Help from "../assets/images/homepage/help.png";
import Invite from "../assets/images/homepage/invite.png";
import DemoMode from "../assets/images/homepage/demomode.png";

function MyAccount() {
  const SeperateDivs = {
    marginTop: "11%",
  };

  const SeperateElementsBottom = {
    marginBottom: "10px",
    alignItems: "center",
  };
  const SeperateIconsFromText = {
    marginRight: "12px",
  };
  const ListStyle = {
    listStyle: "none",
  };

  return (
    <div>
      <ul style={ListStyle}>
        <li style={SeperateElementsBottom}>
          <img
            src={UserPic}
            width={40}
            height={40}
            alt="User Picture"
            style={SeperateIconsFromText}
          />
          <a>My Account</a>
        </li>
        <li style={SeperateElementsBottom}>
          <img
            src={Home}
            width={24}
            height={24}
            alt="Home Picture"
            style={SeperateIconsFromText}
          />
          <a>Home</a>
        </li>
        <li style={SeperateElementsBottom}>
          <img
            src={Document}
            width={24}
            height={24}
            alt="Document Picture"
            style={SeperateIconsFromText}
          />
          <a>Reports</a>
        </li>
        <li style={SeperateElementsBottom}>
          <img
            src={Datasets}
            width={24}
            height={24}
            alt="Datasets Picture"
            style={SeperateIconsFromText}
          />
          <a>Data sets</a>
        </li>
        <li style={SeperateElementsBottom}>
          <img
            src={TwoPeople}
            width={24}
            height={24}
            alt="People Picture"
            style={SeperateIconsFromText}
          />
          <a>People</a>
        </li>
        <li style={SeperateElementsBottom}>
          <img
            src={ThreePeople}
            width={24}
            height={24}
            alt="Audience Picture"
            style={SeperateIconsFromText}
          />
          <a>Audiences</a>
        </li>
        <div style={SeperateDivs}>
          <li style={SeperateElementsBottom}>
            <img
              src={DemoMode}
              width={24}
              height={24}
              alt="Demo mode Picture"
              style={SeperateIconsFromText}
            />
            <a>Demo mode</a>
          </li>
          <li style={SeperateElementsBottom}>
            <img
              src={Invite}
              width={24}
              height={24}
              alt="Invite Picture"
              style={SeperateIconsFromText}
            />
            <a>Invite team</a>
          </li>
          <li style={SeperateElementsBottom}>
            <img
              src={Feedback}
              width={24}
              height={24}
              alt="Feedback Picture"
              style={SeperateIconsFromText}
            />
            <a>Feedback</a>
          </li>
          <li style={SeperateElementsBottom}>
            <img
              src={Help}
              width={24}
              height={24}
              alt="Help and docs Picture"
              style={SeperateIconsFromText}
            />
            <a>Help and docs</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default MyAccount;
