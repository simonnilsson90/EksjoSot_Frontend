import React from 'react';

const DatasetList = ({ datasets }) => {
    return (
        <div style={datasetList}>
            {datasets.map((dataset) => (
                <div key={dataset.id} style={datasetitem}>
                    <img src={`/images/marketplace/${dataset.imagePreview}`} alt={dataset.title} style={dataSetImage} />
                    <h4>{dataset.title}</h4>
                    <p>{dataset.description}</p>
                    <p className="price">${dataset.price}</p>
                </div>
            ))}
        </div>
    );
};

const datasetitem = {
    padding: '15px',
    textAlign: 'left',
};

const datasetList = {
    display: 'grid',
    gap: '20px',
    padding: '20px',
    marginTop: '50px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
}

const dataSetImage = {
    width: '100%',
    height: '180px',
    borderRadius: '20px',
    objectFit: 'cover',
}

export default DatasetList;
