import React from "react";

const CategoryFilter = ({category, onCategoryChange}) => {
    const categories = ['All', 'Behavioral', 'Educational', 'Geospatial', 'Health', 'Images', 'Videos', 'Voice', 'Other'];

    return (
        <aside className="category-filter p-3" >
            <h3 className="mb-3">Categories</h3>
            <ul className="list-unstyled d-flex flex-wrap" style={{gap: '5px'}} >
                {categories.map((cat) =>
                    <li key={cat} className="mb-2">
                        <button
                            onClick={() => onCategoryChange(cat)}
                            className={`btn ${category === cat ? 'btn-primary' : 'btn-outline-secondary'} btn-block`}
                        >
                            {cat}
                        </button>
                    </li>
                )}
            </ul>
        </aside>
    );
}

export default CategoryFilter;
