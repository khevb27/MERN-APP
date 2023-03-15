import React from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css'; // Import the CSS file for styling
import Auth from '../utils/auth';
function HomePage() {
  if (Auth.loggedIn()) {
    return (
      <>
        <div className="text-center"> {/* Center the header */}
          <h1>YOU HAVE A TOKEN</h1>
        </div>
      </>
    );
 
}else{
  return (
    <>
      <div className="text-center"> {/* Center the header */}
        <h1>Welcome to My Trips App!</h1>
        <Button className="m-3" href="/login">Login</Button>
        <Button className="m-3" href="/signup">Signup</Button>
      </div>
    </>
  );
}
}

export default HomePage;
