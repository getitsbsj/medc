import React from 'react';
import { Link, useParams } from 'react-router-dom';



const diseaseDetails = {
  1: { name: 'Asthma', description: 'Asthma is a condition in which your airways narrow and swell and may produce extra mucus.' },
  2: { name: 'Alzheimer\'s Disease', description: 'Alzheimer\'s disease is a progressive disorder that causes brain cells to waste away (degenerate) and die.' },
  3: { name: 'Bronchitis', description: 'Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.' },
  // Add more details as needed
};

function DiseaseDetail() {
  const { id } = useParams();
  const disease = diseaseDetails[id];

  if (!disease) {
    return <div>Disease not found</div>;
  }

  return (
    <div>
      <h1>{disease.name}</h1>
      <p>{disease.description}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DiseaseDetail;
