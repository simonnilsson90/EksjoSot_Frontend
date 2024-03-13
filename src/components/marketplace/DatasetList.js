// src/components/marketplace/DatasetList.js:

import React from 'react';
import "./DatasetList.css";

const DatasetList = ({ datasets }) => {
    return (
        <div className="dataset-list">
            {datasets.map((dataset) => (
                <div key={dataset.id} className="dataset-item">
                    <img src={`/images/marketplace/${dataset.imagePreview}`} alt={dataset.title} />
                    <h4>{dataset.title}</h4>
                    <p>{dataset.description}</p>
                    <p className="price">${dataset.price}</p>
                </div>
            ))}
        </div>
    );
};

export default DatasetList;
