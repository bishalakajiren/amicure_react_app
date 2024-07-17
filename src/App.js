import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PatientList />
      </header>
    </div>
  );
}

export default App;
