import React from "react";
import "./global.css";
import Navbar from "./components/navbar/NavbarComponent";
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./components/myAccount/MyAccount";
import Footer from "./components/footer/FooterComponent";
import ConsentForm from "./components/feature/consent/ConsentForm";

import CardsLayoutWithSidebar from "./components/marketplace/dataSetsCards/CardsLayoutWithSidebar";
import ImagesCardComponent from "./components/marketplace/dataSetsCards/cards/sortedByCategoryCards/ImagesCardComponent";

import DataSetsComponent from "./components/myAccount/dataSets/dataSetsComponent";
import CreateDataset from "./components/myAccount/createDataset/createDatasetComponent";
import Reports from "./components/myAccount/reports/reportsComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="consentForm" element={<ConsentForm />} />

        <Route path="cards" element={<CardsLayoutWithSidebar />} />
        <Route path="imagescard" element={<ImagesCardComponent />} />

        <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
        <Route
          path="myAccount/dataSets/createDataset"
          element={<CreateDataset />}
        />
        <Route path="myAccount/reports" element={<Reports />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
