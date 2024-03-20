import React, { useState } from "react";
import "./MarketPage.css";

import CategoryFilter from "../components/marketplace/CategoryFilter.js";
import DatasetList from "../components/marketplace/DatasetList.js";
// Import your mock data
import dummyData from "../data/dummyData";

const Marketplace = () => {
  const [datasets, setDatasets] = useState(dummyData);
  const [filters, setFilters] = useState({
    category: "All",
  });

  const handleCategoryChange = (newCategory) => {
    setFilters({
      ...filters,
      category: newCategory,
    });
    filterDatasets(newCategory);
  };

  const filterDatasets = (category) => {
    const filteredDatasets = dummyData.filter(
      (dataset) => category === "All" || dataset.category.includes(category)
    );
    setDatasets(filteredDatasets);
  };

  return (
    <div className="marketplace">
      <div className="filters-container">
        <CategoryFilter
          category={filters.category}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div id="dataSetContainer">
        <DatasetList datasets={datasets} />
      </div>
    </div>
  );
};

export default Marketplace;
