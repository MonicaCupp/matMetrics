import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewMatchPage from './components/NewMatchPage';

function App() {
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/NewMatchPage">New Match</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/NewMatchPage' element={ <NewMatchPage /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;