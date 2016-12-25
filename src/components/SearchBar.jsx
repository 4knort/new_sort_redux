import React from 'react';

const SearchBar = ({ onChange }) => {
  const findName = (e) => onChange(e.target.value);
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="searchbar form-group">
          <input onChange={findName} type="text" placeholder="Search people by name" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
