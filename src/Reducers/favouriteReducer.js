// favoritesReducer.js

import { ADD_FAVORITE } from './actionTypes'; // Assicurati di avere il percorso corretto per le actionTypes

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    // Aggiungi altri casi per gestire ulteriori azioni se necessario
    default:
      return state;
  }
};

export default favoritesReducer;
