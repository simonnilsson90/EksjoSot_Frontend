import React from "react";
import Styles from "./profileContainer.module.css";
import { SiIconify } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";

function ProfileContainer() {
  return (
    <>
      <div className={Styles.myAccountContainer} id="profile">
        <div className={Styles.parent}>
          <div className={Styles.header}>
            <div className={Styles.bilder}>
              <SiIconify />
            </div>
            <div className={Styles.name}>Helen Smith</div>
          </div>

          <div className={Styles.menu}>
            <NavLink to="/My-Account-Menu/profile">Profile</NavLink>
            <NavLink to="/My-Account-Menu/favourites">Favourites</NavLink>
            <NavLink to="/My-Account-Menu/purchases">Purchases</NavLink>
            <NavLink to="/My-Account-Menu/sellings">Sellings</NavLink>
            <NavLink to="/My-Account-Menu/membership">Membership</NavLink>
          </div>
          <div className={Styles.exit}>Log out</div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default ProfileContainer;
