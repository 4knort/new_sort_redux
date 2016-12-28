import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter, browserHistory} from 'react-router';
import * as dataActions from '../actions/dataActions';

@withRouter
@connect(state => ({
  initialList: state.users.initialList,
  modifiedList: state.users.modifiedList,
  ascName: state.users.ascName,
  ascAge: state.users.ascAge,
}), dataActions)
export default class ToolBar extends Component {

  // componentDidMount() {
  //   if(this.props.modifiedList.length){
  //     const {sort, direction} = this.props.location.query;
  //     this.props.setDirection(direction, sort);
  //     if ( sort === 'name') {
  //       this.props.sortName();
  //     } else if ( sort === 'age') {
  //       this.props.sortAge();
  //     }
  //   }
  // }

  sortName = () => {
    this.props.sortName();
    browserHistory.replace({pathname: "/", query: {sort: "name", direction: this.props.ascName}});
    console.log(this.props.location.query)
  }

  sortAge = () => {
    this.props.sortAge();
    browserHistory.replace({pathname: "/", query: {sort: "age", direction: this.props.ascAge}})
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="toolbar">
            <button onClick={this.sortName} className="btn btn-default">
              <i className="icon fa fa-sort-alpha-asc" />
              <span> Sort by name</span>
            </button>
            <button onClick={this.sortAge} className="btn btn-default">
              <i className="icon fa fa-sort-numeric-desc" />
              <span> Sort by age</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

}