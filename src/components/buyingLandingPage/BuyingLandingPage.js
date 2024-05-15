import React from "react";
import Styles from "./buyingLandingPage.module.css";
import { Link } from "react-router-dom";

function BuyingLandingPage() {
  return (
    <div className={Styles.buyingBody}>
      <div className={Styles.component}>
        <div className={Styles.buyingHeader}>
          <div className={Styles.buyingButton}>
            <Link to="marketplace">
                BUY IN THE <br></br> MARKETPLACE
            </Link>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.imagesGrid}>
            <div>
              <img
                className={Styles.robotwoman}
                src="/images/robotwoman.jpg"
                alt="robotwoman"
              />
            </div>

            <div className={Styles.tall}>
              <img className={Styles.kids} src="/images/kids.jpg" alt="kids" />
            </div>

            <div>
              <img
                className={Styles.discowoman}
                src="/images/discowoman.jpg"
                alt="discowoman"
              />
            </div>
            <div>
              <img
                className={Styles.sunset}
                src="/images/sunset.jpg"
                alt="sunset"
              />
            </div>
            <div>
              <img
                className={Styles.woman}
                src="/images/woman.png"
                alt="woman"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.squareDecoration}></div>
    </div>
  );
}

export default BuyingLandingPage;
