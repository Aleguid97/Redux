// CompanyItem.js

import React from 'react';
import { connect } from 'react-redux';
import { addFavorite } from './actionType';

const CompanyItem = ({ company, addFavorite }) => {
  return (
    <div>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <button onClick={() => addFavorite(company)}>Aggiungi ai preferiti</button>
    </div>
  );
};

// Mappatura delle azioni Redux
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (company) => dispatch(addFavorite(company)),
  };
};

export default connect(null, mapDispatchToProps)(CompanyItem);
