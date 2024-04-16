import React from "react";
import "./global.css";

import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
import "./App.css";
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MyAccount from "./components/myAccount/MyAccount";

import ConsentForm from "./components/feature/consent/ConsentForm";


import CardsLayoutWithSidebar from "./components/marketplace/dataSetsCards/CardsLayoutWithSidebar";
import ImagesCardComponent from './components/marketplace/dataSetsCards/cards/sortedByCategoryCards/ImagesCardComponent'

import DataSetsComponent from "./components/myAccount/dataSets/dataSetsComponent";
import CreateDataset from "./components/myAccount/createDataset/createDatasetComponent";
import Reports from "./components/myAccount/reports/reportsComponent";

//layouts
import RootLayout from "./layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route path="/" element={<HomePage />} />
      <Route path="market" element={<MarketPage />} />
      {/* <Route path="contacUs" element={<ContactUs />} /> */}
      {/* <Route path="FaQ" element={<FaQ />} /> */}
     
      {/* <Route path="shopping-bag" element={<Shopping />} /> */}

      <Route path="myAccount" element={<MyAccount />} />
      <Route path="consentForm" element={<ConsentForm />} />
      <Route path="cards" element={<CardsLayoutWithSidebar />} />
      <Route path="imagescard" element={<ImagesCardComponent />} />
      <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
      <Route path="myAccount/dataSets/createDataset" element={<CreateDataset />} />
      <Route path="myAccount/reports" element={<Reports />} />
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
