import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI Interface</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>Characters</h2>
          <ul className="list-group">
            <li className="list-group-item">Luke Skywalker</li>
            <li className="list-group-item">Darth Vader</li>
            <li className="list-group-item">Leia Organa</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Planets</h2>
          <ul className="list-group">
            <li className="list-group-item">Tatooine</li>
            <li className="list-group-item">Alderaan</li>
            <li className="list-group-item">Hoth</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Starships</h2>
          <ul className="list-group">
            <li className="list-group-item">Millennium Falcon</li>
            <li className="list-group-item">X-wing</li>
            <li className="list-group-item">TIE Fighter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
