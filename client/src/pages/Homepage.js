import React from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css'; // Import the CSS file for styling
import Auth from '../utils/auth';
function HomePage() {
  if (!Auth.loggedIn()) {
  return (
    <>
      <div className="text-center"> {/* Center the header */}
        <h1>Welcome to My Trips App!</h1>
        <Button href="/login">Login</Button>
        <Button href="/signup">Login</Button>
      </div>
    </>
  );
}else{
  return (
    <>
      <div className="text-center"> {/* Center the header */}
        <h1>YOU HAVE A TOKEN</h1>
      </div>
    </>
  );
}
}

export default HomePage;
