import React from "react";
import Navbar from "./components/navbar/NavbarComponent";
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { BrowserRouter, Route, Routes, Links } from "react-router-dom";
import MyAccount from "./components/myAccount/MyAccount";
import Footer from "./components/footer/FooterComponent";
import ConsentForm from "./components/feature/consent/ConsentForm";
import DataSetsComponent from "./components/myAccount/dataSets/dataSetsComponent";
import CreateDataset from "./components/myAccount/createDataset/createDatasetComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="consentForm" element={<ConsentForm />} />
        <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
        <Route path="myAccount/dataSets/createDataset" element={<CreateDataset />} />
        <Route path="termsOfService" element={<ConsentForm/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
