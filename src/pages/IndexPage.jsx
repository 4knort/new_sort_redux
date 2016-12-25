import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'ui/Icon';
import * as dataActions from 'actions/dataActions';
import SearchBarContainer from '../containers/SearchBarContainer';
import ToolBar from '../components/ToolBar';
import ActiveUser from '../components/ActiveUser';
import UserList from '../components/UserList';

@connect(state => ({ users: state.users }), dataActions)
export default class IndexPage extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!(this.props.users.initialList.length)) {
      return null
    }
    return (
      <div className="index-page">
        <div className="container-fluid">
          <SearchBarContainer />
          <ToolBar />
          <div className="row">
            <div>
              <ActiveUser user={this.props.users.active} details />
              <UserList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

