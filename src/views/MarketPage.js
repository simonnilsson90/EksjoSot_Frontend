// src/views/MarketPage.js:

import React, { useState } from 'react';

import CategoryFilter from '../components/marketplace/CategoryFilter.js';
import DatasetList from '../components/marketplace/DatasetList.js';
// Import your mock data
import dummyData from '../data/dummyData';

const Marketplace = () => {
    const [datasets, setDatasets] = useState(dummyData);
    const [category, setCategory] = useState('All');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        // When we got a DB, we make an API call here to get the datasets for the selected category
        const filteredDatasets = dummyData.filter(dataset => dataset.category === newCategory);
        setDatasets(filteredDatasets);
    };

    return (
        <div>
            <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
            <DatasetList datasets={datasets} />
        </div>
    );
};

export default Marketplace;
