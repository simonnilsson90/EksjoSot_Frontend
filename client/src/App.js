import React from "react";
import Navbar from "./components/navbar/NavbarComponent";
import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAccount from "./views/MyAccount";
import Footer from "./components/footer/FooterComponent";
import ConsentForm from "./components/feature/consent/ConsentForm";
import CardsComponent from "./components/marketplace/dataSetsCards/cards/mainCardsComponent/CardsComponent";
import Carousel from "./components/marketplace/dataSetsCards/carousel/Carousel";
import Sidebar from './components/marketplace/dataSetsCards/sidebar/Sidebar'
import CardsLayoutWithSidebar from "./components/marketplace/dataSetsCards/CardsLayoutWithSidebar";
import ImagesCardComponent from './components/marketplace/dataSetsCards/cards/sortedByCategoryCards/ImagesCardComponent'


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

          <Route path="sidebar" element={<Sidebar />} />
          <Route path="cards" element={<CardsLayoutWithSidebar />} />
          <Route path="imagescard" element={<ImagesCardComponent />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
