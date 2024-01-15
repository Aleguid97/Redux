// actions.js
import { ADD_FAVORITE } from './actionTypes';

export const addFavorite = (company) => {
  return {
    type: ADD_FAVORITE,
    payload: {
      id: company.id,
      name: company.name,
      description: company.description,
      // Altre informazioni dell'azienda se necessario
    },
  };
};

  