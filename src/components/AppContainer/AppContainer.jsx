import React, { PropTypes } from 'react';
import Header from '../Header.jsx';

const AppContainer = ({ children }) => (
  <div>
    <Header />
    <div className="app">{children}</div>
  </div>
  
);

AppContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppContainer;
