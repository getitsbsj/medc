import React, { useState } from 'react';
import './Medicines.css'; // Import your CSS file for styling

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', dosage: '500mg', price: 5 },
    { id: 2, name: 'Ibuprofen', dosage: '200mg', price: 8 },
    { id: 3, name: 'Aspirin', dosage: '325mg', price: 6 },
    // Add more medicines as needed
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="medicines-container">
      <h2 className="medicines-heading">Order Medicines</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="medicines-list">
        {filteredMedicines.length > 0 ? (
          <ul className="medicine-items">
            {filteredMedicines.map((medicine) => (
              <li key={medicine.id} className="medicine-item">
                <div>
                  <h3 className="medicine-name">{medicine.name}</h3>
                  <p className="medicine-details">Dosage: {medicine.dosage}</p>
                  <p className="medicine-details">Price: ${medicine.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-medicines">No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default Medicines;
