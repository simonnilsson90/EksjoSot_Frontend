import React from "react";
import "./global.css";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MyAccount from "./components/myAccount/MyAccount";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";
import SignUp, { signUpAction } from "./components/signUp/SignUp";
import ProfileAccount from "./views/ProfileAccount";
import ProfileContainer from "./components/myAccount/profileContainer/ProfileContainer";
import Tjanster from "./views/Tjanster";
import Taxor from "./views/Taxor";
import Kontakt from "./views/Kontakt";
import OmPage from "./views/Om";
import BesiktningarPage from "./views/Besiktningar";
import HallbarhetPage from "./views/Hallbarhet";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="taxor" element={<Taxor />} />
        <Route path="om" element={<OmPage />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="besiktningar" element={<BesiktningarPage />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="tjanster" element={<Tjanster />}>
    
        </Route>

        <Route path="hallbarhet" element={<HallbarhetPage />}/>

        <Route path="My-Account-Menu" element={<ProfileContainer />}>
          <Route path="profile" element={<ProfileAccount />} />
       
      
        </Route>
      </Route>
      <Route path="SignUp" element={<SignUp />} action={signUpAction} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
