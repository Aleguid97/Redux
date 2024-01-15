// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';  // Importa Link e Switch da react-router-dom
import { connect } from 'react-redux';
import { addFavorite } from './actionTypes/addFavorite';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente per visualizzare l'elenco delle aziende preferite
const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h2>Lista Aziende Preferite</h2>
      <ul>
        {favorites.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Componente per visualizzare un'azienda e aggiungerla ai preferiti
const CompanyItem = ({ company, addFavorite }) => {
  return (
    <div>
      <h3>{company.name}</h3>
      <button onClick={() => addFavorite(company)}>Aggiungi ai preferiti</button>
    </div>
  );
};

// Componente principale che gestisce le rotte
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Preferiti
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact>
              {/* Componente CompanyItem renderizzato sulla pagina principale */}
              <CompanyItem company={{ name: 'Azienda 1' }} />
            </Route>
            <Route path="/favorites">
              {/* Componente FavoritesPage renderizzato sulla pagina dei preferiti */}
              <FavoritesPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

// Mappatura dello stato Redux
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

// Mappatura delle azioni Redux
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (company) => dispatch(addFavorite(company)),
  };
};

// Collegamento del componente App con Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
