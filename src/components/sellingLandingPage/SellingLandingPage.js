import React from "react";
import Styles from "./sellingLandingPage.module.css";
import { Link } from "react-router-dom";

function SellingLandingPage() {
  return (
    <div className={Styles.wrap}>
      <div className={Styles.buyingBody}>
        <div className={Styles.buyingComponent}>
          <div className={Styles.left}>
            <div className={Styles.imagesGrid}>
              <div>
                <img
                  className={Styles.action}
                  src="/images/action.png"
                  alt="action board"
                />
              </div>
              <div className={Styles.tall}>
                <img
                  className={Styles.cameraFace}
                  src="/images/cameraFace.png"
                  alt="camera in front of a face"
                />
              </div>
              <div className={Styles.tall}>
                <img
                  className={Styles.camera}
                  src="/images/camera.png"
                  alt="camera in a hand"
                />
              </div>
              <div>
                <img
                  className={Styles.screaming}
                  src="/images/screaming.png"
                  alt="screaming boy in a microphone"
                />
              </div>
            </div>
          </div>

          <div className={Styles.right}>
            <p>
              Are you ready to the next level? <br></br>Now, you can also sell
              your own<br></br>
              creations, voice, videos or even<br></br> your own selfies.
              <br></br> With just one click.
            </p>

            <div className={Styles.buyingHeader}>
              <div className={Styles.buyingButton}>
                <Link to="sellings">SELL YOUR DATA</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.squareDecoration}></div>
      </div>
    </div>
  );
}

export default SellingLandingPage;
