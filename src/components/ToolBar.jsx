import React from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';

const ToolBar = ({ sortName, sortAge }) => (
  <div className="row">
    <div className="col-sm-12">
      <div className="toolbar">
        <button onClick={sortName} className="btn btn-default">
          <i className="icon fa fa-sort-alpha-asc" />
          <span> Sort by name</span>
        </button>
        <button onClick={sortAge} className="btn btn-default">
          <i className="icon fa fa-sort-numeric-desc" />
          <span> Sort by age</span>
        </button>
      </div>
    </div>
  </div>
    );

export default connect(state => ({
  initialList: state.users.initialList,
  modifiedList: state.users.modifiedList,
}), dataActions)(ToolBar);