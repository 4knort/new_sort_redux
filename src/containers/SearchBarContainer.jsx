import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import * as dataActions from '../actions/dataActions';

const SearchBarContainer = ({ findName }) => (
  <SearchBar onChange={findName} />
);

SearchBarContainer.propTypes = {
  findName: PropTypes.func.isRequired,
};

export default connect(state => ({
  modifiedList: state.users.modifiedList,
}), dataActions)(SearchBarContainer);


