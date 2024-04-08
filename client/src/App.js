import React from "react";
import Navbar from "./components/navbar/NavbarComponent";
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./views/MyAccount";
import Footer from "./components/footer/FooterComponent";
import ConsentForm from "./components/feature/consent/ConsentForm";
import CardsComponent from "./components/feature/dataSetsCards/cards/CardsComponent";
import Carousel from "./components/feature/dataSetsCards/carousel/Carousel";
import CardsSidebar from "./components/feature/dataSetsCards/sidebar/CategoriesComponent";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="myAccount" element={<MyAccount />} />
        <Route path="consentForm" element={<ConsentForm />} />
          <Route path="cardsComponent" element={<CardsComponent />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="sidebar" element={<CardsSidebar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
