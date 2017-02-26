import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as dataActions from 'actions/dataActions';
import ActiveUser from './ActiveUser';

@withRouter
@connect(state => ({
  initialList: state.users.initialList,
  active: state.users.active,
}), dataActions)
export default class User extends PureComponent {
  componentDidMount() {
    if (!this.props.initialList.length) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Link to="/">Back</Link>
        <ActiveUser user={this.props.initialList.find(item => item.id === this.props.params.id)} />
      </div>
    );
  }
}
