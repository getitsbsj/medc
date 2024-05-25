import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import DiseaseList from './components/DiseaseList';
import DiseaseDetail from './components/DiseaseDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>

      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
