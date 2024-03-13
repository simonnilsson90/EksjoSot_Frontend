// src/components/marketplace/CategoryFilter.js:

import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({category, onCategoryChange}) => {
    const categories = ['All', 'Images', 'Videos', 'Voice', 'Other'];

    return (
        <aside className="category-filter">
            <h3>Categories</h3>
            <ul>
                {categories.map((cat) =>
                    <li key={cat} className={category === cat ? 'active' : ''}>
                        <button onClick={() => onCategoryChange(cat)}>{cat}</button>
                    </li>
                )}
            </ul>
        </aside>
    );
}


export default CategoryFilter;
