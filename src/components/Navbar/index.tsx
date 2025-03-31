import React, { useContext } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__title">My App</div>
      <div className="navbar__links">
        {false ? (
          <>
            <span>Welcome, Harki!</span>
            <button onClick={() => {}}>Log Out</button>
          </>
        ) : (
          <a href="/login" className="navbar__link">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
