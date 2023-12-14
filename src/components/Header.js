import React from 'react';

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <header>
      {!isLoggedIn ? (
        <button onClick={onLogin}>Увійти</button>
      ) : (
        <button onClick={onLogout}>Вийти</button>
      )}
    </header>
  );
};

export default Header;