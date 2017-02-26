import React from 'react';
import Avatar from './Avatars/Avatar';

const Header = () => (
  <div className="container-fluid rc-intro">
    <div className="container">
      <Avatar image={'react'} />
      <h1 className="rc-title">React Challenge</h1>
      <p className="rc-description">Поиск и сортировка данных</p>
    </div>
  </div>
  );

export default Header;
