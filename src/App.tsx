import React from 'react';
import { HashRouter as Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MovieList/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
