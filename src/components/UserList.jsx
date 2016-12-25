import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import UserData from '../components/UserData';
import * as dataActions from '../actions/dataActions';

const UserList = ({ users, setActiveUser }) => {
  const tableItem = users.map(
    (item) => (
      <UserData
        onChange={() => setActiveUser(item)}
        key={`userdata-${item.id}`}
        item={item}
      />
    )
  );
  return (
    <div className="col-sm-8 col-md-9 col-lg-10">
      <table className=" user-list table table-striped">
        <thead >
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableItem}
        </tbody>
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveUser: PropTypes.func.isRequired,
};

export default connect(state => ({
  users: state.users.modifiedList,
}), dataActions)(UserList);
