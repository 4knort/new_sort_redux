import React from 'react';
import Avatar from '../components/Avatars/Avatar';
import { Link } from 'react-router';

const ActiveUser = ({ user, details }) => {
  const link = details && user ? <Link to={`/user/${user.id}`}>Details</Link> : ""
  if (user) {
    return (<div className="col-sm-4 col-md-3 col-lg-2">
      <div className="thumbnail">
        <Avatar image={user.avatar} />
        <div className="thumbnail-caption">
          <h3>{user.name}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>
                  Age
                </td>
                <td>
                  {user.age}
                </td>
              </tr>
              <tr>
                <td>
                  Phone
                </td>
                <td>
                  {user.phone}
                </td>
              </tr>
              <tr>
                <td>
                  Favourite animal
                </td>
                <td>
                  {user.image}
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <span><strong>Favorite phrase:</strong> </span>
            {user.phrase}
            {link}
          </p>
        </div>
      </div>
    </div>);
  } else {
    return (<div className="col-sm-4 col-md-3 col-lg-2">
      <h3>Nothing found! :(</h3>
    </div>);
  }
};

export default ActiveUser;
