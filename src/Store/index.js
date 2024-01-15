
import { createStore, combineReducers } from 'redux';
import favoritesReducer from '../Reducers';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Aggiungi altri riduttori se necessario
});

const store = createStore(
  rootReducer,
  // Configurazioni aggiuntive, ad esempio middleware, devtools, ecc.
);

export default store;
