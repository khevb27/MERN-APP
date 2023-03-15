import React from 'react';
import Button from 'react-bootstrap/Button';
import '../index.css'; // Import the CSS file for styling
import Auth from '../utils/auth';
import Vacay from '../components/Vacayform';
function HomePage() {
  if (Auth.loggedIn()) {
    return (
      <>
        <div className="text-center"> {/* Center the header */}
          <Vacay />
        </div>
      </>
    );
 
}else{
  return (
    <>
      <div className="text-center"> {/* Center the header */}
        <h1 className= "mt-4 mb-3">Welcome to My Trips App!</h1>
        <Button className="m-2" href="/login" size="lg" style={{ width: "10%"}}>Login</Button>
        <Button className="m-2" href="/signup" size="lg" style={{ width: "10%"}}>Signup</Button>
      </div>
    </>
  );
}
}

export default HomePage;
