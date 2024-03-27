import React from "react";
import Navbar from "./components/navbar/NavbarComponent";
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./views/MyAccount";
import Footer from "./components/footer/FooterComponent";
import ConsentForm from "./components/feature/consent/ConsentForm";
import DataSetsComponent from "./components/dataSets/dataSetsComponent";
import Settings from "./components/myAccountSettings/settingsComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="consentForm" element={<ConsentForm />} />
        <Route path="dataSetsComponent" element={<DataSetsComponent />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
