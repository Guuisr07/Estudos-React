import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import api from './services/api';

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
