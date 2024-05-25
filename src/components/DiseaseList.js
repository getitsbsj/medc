import React from 'react';
import { Link, useParams } from 'react-router-dom';

const diseases = {
  A: [{ id: 1, name: 'Asthma' }, { id: 2, name: 'Alzheimer\'s Disease' }],
  B: [{ id: 3, name: 'Bronchitis' }],
  // Add more diseases as needed
};

function DiseaseList() {
  const { letter } = useParams();
  const diseaseList = diseases[letter] || [];

  return (
    <div>
      <h1>Diseases starting with {letter}</h1>
      <ul>
        {diseaseList.map(disease => (
          <li key={disease.id}>
            <Link to={`/disease/${disease.id}`}>{disease.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DiseaseList;
