import React from "react";
import Styles from "./profileAccount.module.css";
import Girl from "../assets/images/homepage/girl.png";
import { MdOutlinePhotoCamera } from "react-icons/md";

function ProfileAccount() {
  return (
    <>
      <wrap className={Styles.wrap}>
        <header className={Styles.header}>
          <h1>Profile</h1>
        </header>
        <container className={Styles.container}>
         
          <section className={Styles.left}>
            <div className={Styles.photo}>
              <img src={Girl} alt="girl" />
              <MdOutlinePhotoCamera className={Styles.icon} size={30} />
            </div>
            <h3 className={Styles.name}>Helen</h3>
            <p className={Styles.email}>HelenTena@gmail.com</p>
         
          </section>

          <section className={Styles.right}>
            <div className={Styles.part}>
              <p>Name</p>
              <input
                placeholder="name..."
                className={Styles.inputFields}
              ></input>
            </div>
            <div className={Styles.emailGroup}>
              <div className={Styles.part1}>
                <p>Email</p>
                <input
                  placeholder="email..."
                  type="email"
                  className={Styles.inputFields}
                ></input>
              </div>
              <div className={Styles.part2}>
                <p>Confirm Email</p>
                <input
                  placeholder="confirm email..."
                  type="email"
                  className={Styles.inputFields}
                ></input>
              </div>
            </div>
            <div className={Styles.passwordGroup}>
              <div className={Styles.part1}>
                <p>Password</p>
                <input
                  placeholder="password..."
                  type="password"
                  className={Styles.inputFields}
                ></input>
              </div>
              <div className={Styles.part2}>
                <p>Confirm Password</p>
                <input
                  placeholder=" confirm password..."
                  type="password"
                  className={Styles.inputFields}
                ></input>
              </div>
            </div>

            <div className={Styles.profileButtons}>
              <div>
                <button className={Styles.saveButton}>Edit</button>
              </div>

              <div>
                <button className={Styles.saveButton}>Save</button>
              </div>
            </div>
          </section>
        </container>
      </wrap>
    </>
  );
}

export default ProfileAccount;
