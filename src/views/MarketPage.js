import React, {useState} from 'react';
import './MarketPage.css'; // You might adjust or remove some custom styles

import CategoryFilter from '../components/marketplace/CategoryFilter.js';
import DatasetList from '../components/marketplace/DatasetList.js';
// Import your mock data
import dummyData from '../data/dummyData';

const Marketplace = () => {
    const [datasets, setDatasets] = useState(dummyData);
    const [filters, setFilters] = useState({
        category: 'All'
    });

    const handleCategoryChange = (newCategory) => {
        setFilters({
            ...filters,
            category: newCategory
        });
        filterDatasets(newCategory);
    };

    const filterDatasets = (category) => {
        const filteredDatasets = dummyData
            .filter(dataset =>
                category === 'All' || dataset.category.includes(category))
        setDatasets(filteredDatasets);
    };

    return (
        // Use Bootstrap's row and col classes for layout
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"> {/* Adjusted for Bootstrap's 12-column grid */}
                    <div className="filters-container d-flex flex-column align-items-center gap-3"> {/* Bootstrap 5 utility classes */}
                        <CategoryFilter category={filters.category} onCategoryChange={handleCategoryChange}/>
                    </div>
                </div>
                <div className="col-md-10">
                    <DatasetList datasets={datasets}/>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
