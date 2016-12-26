import React from 'react';
import Avatar from './Avatars/Avatar';

const UserData = ({ item, onChange }) => (
  <tr onClick={onChange}>
    <td>
      <Avatar image={item.avatar} />
    </td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>
      <span>8 </span>
      {item.phone}
    </td>
  </tr>
);

export default UserData;
