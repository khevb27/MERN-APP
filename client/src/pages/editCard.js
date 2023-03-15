import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormSubmit() {
  return (
    <Form className="col-8 mx-auto m-4">
      <h1>EDIT LOCATION</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><h2>Location:</h2></Form.Label>
        <Form.Control type="Name" placeholder="Name"/>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label><h2>Date</h2></Form.Label>
          <Form.Control type="date" size="lg"/>
          <Form.Text className="text-muted">Previous Date: </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" size="lg" style={{ width: '100%' }}>
        Submit Edit
    </Button>
    </Form>
  );
}

export default FormSubmit;
