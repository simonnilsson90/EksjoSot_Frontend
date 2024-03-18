import React from "react";
import "./DatasetList.css";
import Card from "./DatasetCard";
const DatasetList = ({ datasets }) => {
  return (
    <div id="dataset-list">
      {datasets.map((dataset) => (
        <Card key={dataset.id} dataset={dataset} />
      ))}
    </div>
  );
};

export default DatasetList;
