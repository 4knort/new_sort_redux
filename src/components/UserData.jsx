import React from 'react';
// import Avatar from './Avatars/Avatar';
// <Avatar image={item.image} />
const UserData = ({ item, onChange }) => (
  <tr onClick={onChange}>
    <td>
      
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
