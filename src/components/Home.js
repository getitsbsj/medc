import React from 'react';
import { Link } from 'react-router-dom';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function Home() {
  return (
    <div>
      <h1>질환백과</h1>
      <div>
        {letters.map(letter => (
          <Link key={letter} to={`/diseases/${letter}`}>
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
