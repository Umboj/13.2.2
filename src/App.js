import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Add = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : x + y;

  return <h1>Wynik dodawania: {result}</h1>;
};

const Subtract = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : x - y;

  return <h1>Wynik odejmowania: {result}</h1>;
};

const Multiply = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : x * y;

  return <h1>Wynik mnożenia: {result}</h1>;
};

const Divide = () => {
  let location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : x / y;

  return <h1>Wynik dzielenia: {result}</h1>;
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Subtract />} />
        <Route path="/mul" element={<Multiply />} />
        <Route path="/div" element={<Divide />} />
      </Routes>
    </Router>
  );
};

export default App;

