import React, { useState } from 'react';

const LoginForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform authentication...
    alert('LOGIN');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">UserName:</label>
      <input
        type="text"
        id="userName"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
