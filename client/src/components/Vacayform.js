import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css'; // Import the CSS file for styling
import {useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../utils/mutations';

function VacayForm() {
    const [location, setLocation] = useState("");
    const [departure, setDeparture] = useState("");

    const [addThought, { error, data }] = useMutation(ADD_THOUGHT);
    const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(` ${location},  ${departure}`)
    try {
        const { data } = await addThought({
          variables:
          { location: location, departure: departure },
        });window.location.reload(false);
    } catch (e) {
      alert("Invalid Entry");
      console.error(e);
    }
  };
  
    return (
    <Form className="col-8 mx-auto m-4" onSubmit={handleSignupSubmit}>
    <h1>Enter Date and Locations</h1>
    <Form.Group className="mb-2" >
        <Form.Label><h2>Location</h2></Form.Label>
        <Form.Control type="text" placeholder="Enter Dream Vacation Spot" value={location}  onChange={(e) => setLocation(e.target.value)} size="lg"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label><h2>Date</h2></Form.Label>
        <Form.Control type="date" placeholder="Enter Days to " value={departure} onChange={(e) => setDeparture(e.target.value)}  size="lg"/>
    </Form.Group>
    <Button variant="primary" type="submit" size="lg" style={{ width: '100%' }}>
        Submit
    </Button>
    </Form>
    );
}

export default VacayForm;
