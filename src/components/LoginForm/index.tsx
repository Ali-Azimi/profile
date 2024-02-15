import React, { useState } from 'react';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmCode, setConfirmCode] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleConfirmCodeChange = (event) => {
    setConfirmCode(event.target.value);
  };

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
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />

      <label htmlFor="confirmCode">Confirmation Code:</label>
      <input
        type="text"
        id="confirmCode"
        value={confirmCode}
        onChange={handleConfirmCodeChange}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
