import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ category, onCategoryChange }) => {
  const categories = [
    "All",
    "Behavioral",
    "Educational",
    "Geospatial",
    "Health",
    "Images",
    "Videos",
    "Voice",
    "Other",
  ];

  return (
    <div id="category-filter">
      <h3>Categories</h3>
      <ul id="categoriesContainer">
        {categories.map((cat) => (
          <li key={cat} className={category === cat ? "active" : ""}>
            <button onClick={() => onCategoryChange(cat)}>{cat}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
