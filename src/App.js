import React from "react";
import "./global.css";

import HomePage from "./views/HomePage";
import MarketPage from "./views/MarketPage";
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
import ImagesCollection from "./components/marketplace/dataSetsCards/cards/sortedByCategory/images/ImagesCollection";
import VideoCollection from "./components/marketplace/dataSetsCards/cards/sortedByCategory/video/VideoCollection";
import VideoPage from "./components/marketplace/dataSetsCards/cards/sortedByCategory/video/VideoPage";
import AudioPage from "./components/marketplace/dataSetsCards/cards/sortedByCategory/audio/AudioPage";
import OtherPage from "./components/marketplace/dataSetsCards/cards/sortedByCategory/other/OtherPage";



//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="market" element={<MarketPage />} />
      {/* <Route path="contacUs" element={<ContactUs />} /> */}
      {/* <Route path="FaQ" element={<FaQ />} /> */}

      {/* <Route path="shopping-bag" element={<Shopping />} /> */}

      <Route path="myAccount" element={<MyAccount />} />
      <Route path="consentForm" element={<ConsentForm />} />

      <Route path="marketplace" element={<MarketplaceLayout />} >
        <Route index element={<Carousel />} />
        <Route path="images" element={<ImagesCollection />} />
        <Route path="audio" element={<AudioPage />} />
        <Route path="video" element={<VideoCollection />} />
        <Route path="other" element={<OtherPage />} />
        </Route>

      <Route path="myAccount/dataSets" element={<DataSetsComponent />} />
      <Route
        path="myAccount/dataSets/createDataset"
        element={<CreateDataset />}
      />
      <Route path="myAccount/reports" element={<Reports />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
