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
      {/* <Route path="contacUs" element={<ContactUs />} /> */}
      {/* <Route path="FaQ" element={<FaQ />} /> */}

      {/* <Route path="shopping-bag" element={<Shopping />} /> */}
      <Route path="myAccount" element={<MyAccount />} />
      <Route path="consentForm" element={<ConsentForm />} />

      <Route path="marketplace" element={<MarketplaceLayout />} >
        <Route path="carousel" element={<Carousel />} />
        <Route path="images" element={<ImagesPage />} />
        <Route path="audio" element={<AudioPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="other" element={<OtherPage />} />
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
