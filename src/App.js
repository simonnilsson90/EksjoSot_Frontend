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
import ContactUs from "./components/feature/contact/ContactUs";
import Carousel from "./components/marketplace/dataSetCards/carousel/Carousel";
import MarketplaceLayout from './components/marketplace/marketplaceLayout/MarketplaceLayout';
import FilteredCategory from './components/marketplace/dataSetCards/FilteredCategory';
import FilteredLicense from './components/marketplace/dataSetCards/FilteredLicense';
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";
import AboutUs from "./components/aboutUs/AboutUs";
import Faq from "./components/faq/Faq"
import SignUp, { signUpAction } from "./components/signUp/SignUp";
import Shopping from "./components/shopping/Shopping";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="FaQ" element={<Faq />} />
      <Route path="myShopping" element={<Shopping />} />
      <Route path="myAccount" element={<MyAccount />} />
      <Route path="consentForm" element={<ConsentForm />} />
      <Route path="marketplace" element={<MarketplaceLayout />} >
      <Route index element={<Carousel />} />
        <Route path='category' element={<FilteredCategory />} />
        <Route path="category/:categoryType" element={<FilteredCategory />} />
        <Route path='license' element={<FilteredLicense />} />
        <Route path="license/:license" element={<FilteredLicense />} />
       </Route>
      <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
      <Route path="myAccount/dataSets/createDataset" element={<CreateDataset />} />
      <Route path="myAccount/reports" element={<Reports />} />
    </Route>


    <Route path="SignUp" element={<SignUp />} action={signUpAction} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
