import React, { useState } from 'react';

const LoginForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform authentication...
    alert('LOGIN');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        required
      />

      <label htmlFor="confirmCode">Confirmation Code:</label>
      <input
        type="text"
        id="confirmCode"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
