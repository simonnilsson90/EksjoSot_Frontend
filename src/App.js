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
import ConsentForm from "./components/feature/consent/ConsentForm";
import DataSetsComponent from "./components/myAccount/dataSets/dataSetsComponent";
import CreateDataset from "./components/myAccount/createDataset/createDatasetComponent";
import Reports from "./components/myAccount/reports/reportsComponent";
import Carousel from "./components/marketPlace/dataSetCards/carousel/Carousel";
import FilteredCategory from "./components/marketPlace/dataSetCards/FilteredCategory";
import FilteredLicense from "./components/marketPlace/dataSetCards/FilteredLicense";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";
import Faq from "./views/Faq";
import SignUp, { signUpAction } from "./components/signUp/SignUp";
import Shopping from "./views/Shopping";

import ProfileAccount from "./views/ProfileAccount";
import Favourites from "./views/Favourites";
import Purchases from "./views/Purchases";
import Sellings from "./views/Sellings";
import Membership from "./views/Membership";
import ProfileContainer from "./components/myAccount/profileContainer/ProfileContainer";
import Tjanster from "./views/Tjanster";
import Taxor from "./views/Taxor";
import Kontakt from "./views/Kontakt";
import OmPage from "./views/Om";
import BesiktningarPage from "./views/Besiktningar";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="taxor" element={<Taxor />} />
        <Route path="om" element={<OmPage />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="besiktningar" element={<BesiktningarPage />} />
        <Route path="FaQ" element={<Faq />} />
        <Route path="myShopping" element={<Shopping />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="consentForm" element={<ConsentForm />} />
        <Route path="tjanster" element={<Tjanster />}>
        

          <Route index element={<Carousel />} />
          <Route path="category" element={<FilteredCategory />} />
          <Route path="category/:categoryType" element={<FilteredCategory />} />
          <Route path="license" element={<FilteredLicense />} />
          <Route path="license/:license" element={<FilteredLicense />} />
        </Route>
        <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
        <Route
          path="myAccount/dataSets/createDataset"
          element={<CreateDataset />}
        />
        <Route path="myAccount/reports" element={<Reports />} />

        <Route path="My-Account-Menu" element={<ProfileContainer />}>
          <Route path="profile" element={<ProfileAccount />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="sellings" element={<Sellings />} />
          <Route path="membership" element={<Membership />} />
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
