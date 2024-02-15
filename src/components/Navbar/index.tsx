import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/login" className="navbar__link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
