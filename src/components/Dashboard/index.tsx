import React from 'react';
import UserProfile from '../UserProfile';
import LoginForm from '../LoginForm';

const Dashboard = () => {
  return (
    <div className="container">
      {false ? (
        <>
          <h2>Welcome to the dashboard, harki!</h2>
          <UserProfile />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Dashboard;
