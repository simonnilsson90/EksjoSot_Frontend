import React from "react";
import "./global.css";
import HomePage from "./views/HomePage";
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
import AboutUs from './components/feature/aboutUs/AboutUs'
// Marketplace routes
import Carousel from "./components/marketplace/carousel/Carousel";
import MarketplaceLayout from './components/marketplace/marketplaceLayout/MarketplaceLayout';
import CategoryDisplay from './components/marketplace/dataSetsCards/cards/customCards/sortedByCategory/CategoryDisplay'
import LicenseDisplay from './components/marketplace/dataSetsCards/cards/customCards/sortedByLicense/LicenseDisplay'
//layouts
import RootLayout from "./layouts/RootLayout";
// import Login from "./components/login/loginComponent";
 import SignUp, { signUpAction } from "./components/signUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutUs" element={<AboutUs />} />
      {/* <Route path="contacUs" element={<ContactUs />} /> */}
      {/* <Route path="FaQ" element={<FaQ />} /> */}

      {/* <Route path="shopping-bag" element={<Shopping />} /> */}
      <Route path="myAccount" element={<MyAccount />} />
      <Route path="consentForm" element={<ConsentForm />} />

      <Route path="marketplace" element={<MarketplaceLayout />} >
      <Route index element={<Carousel />} />
        <Route path='category' element={<CategoryDisplay />} />
        <Route path="category/:categoryType" element={<CategoryDisplay />} />
        <Route path='license' element={<LicenseDisplay />} />
        <Route path="license/:license" element={<LicenseDisplay />} />
       </Route>

      <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
      <Route path="myAccount/dataSets/createDataset"element={<CreateDataset />} />
      <Route path="myAccount/reports" element={<Reports />} />
    </Route>

    {/* <Route path="LogIn" element={<Login /> } />  */}
    <Route path="SignUp" element={<SignUp />} action={signUpAction} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
