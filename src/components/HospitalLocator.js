// HospitalLocator.js

import React, { useState } from 'react';
import './HospitalLocator.css';

const hospitals = [
  { name: 'City Hospital', area: 'Downtown', type: 'General', rating: 4.5, image: '/hosp1.jpg' },
  { name: 'Green Valley Clinic', area: 'Suburbs', type: 'Clinic', rating: 4.0, image: '/istockphoto-173799627-612x612.jpg' },
  { name: 'Mountain View Hospital', area: 'Rural', type: 'General', rating: 4.8, image: '/istockphoto-855680246-612x612.jpg' },
  { name: 'Sunrise Health Center', area: 'Downtown', type: 'Specialty', rating: 4.2, image: '/istockphoto-1398625179-612x612.jpg' },
  // Add more hospitals as needed
];

const HospitalLocator = () => {
  const [areaFilter, setAreaFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAreaChange = (e) => {
    setAreaFilter(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(parseFloat(e.target.value));
  };

  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      (areaFilter === 'All' || hospital.area === areaFilter) &&
      (typeFilter === 'All' || hospital.type === typeFilter) &&
      hospital.rating >= ratingFilter
    );
  });

  return (
    <div className="hospital-locator">
      <h1>Hospital Locator</h1>
      <div className="filters">
        <div className="filter">
          <label>Area:</label>
          <select value={areaFilter} onChange={handleAreaChange}>
            <option value="All">All</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburbs">Suburbs</option>
            <option value="Rural">Rural</option>
          </select>
        </div>
        <div className="filter">
          <label>Type:</label>
          <select value={typeFilter} onChange={handleTypeChange}>
            <option value="All">All</option>
            <option value="General">General</option>
            <option value="Clinic">Clinic</option>
            <option value="Specialty">Specialty</option>
          </select>
        </div>
        <div className="filter">
          <label>Minimum Rating:</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={ratingFilter}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="hospital-list">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div key={index} className="hospital-item">
              <img src={hospital.image} alt={hospital.name} className="hospital-image" />
              <h2>{hospital.name}</h2>
              <p>Area: {hospital.area}</p>
              <p>Type: {hospital.type}</p>
              <p>Rating: {hospital.rating}</p>
            </div>
          ))
        ) : (
          <p>No hospitals match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default HospitalLocator;
