import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../index.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <>
      <div className="text-center"> {/* Center the header */}
        <h1>Welcome to My Trips App!</h1>
        <Button href="/login">Login</Button>
      </div>
    </>
  );
}

export default HomePage;
