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
          
        });
    } catch (e) {
      alert("Invalid Entry");
      console.error(e);
    }
  };
    return (
    <Form className="col-8 mx-auto m-3" onSubmit={handleSignupSubmit}>
    <h1>Enter Date and Locations</h1>
    <Form.Group className="mb-3" >
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Dream Vacation Spot" value={location}  onChange={(e) => setLocation(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Day of Vacation" value={departure} onChange={(e) => setDeparture(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    );
}

export default VacayForm;
