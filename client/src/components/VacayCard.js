
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';

function VacayCard(props) {
    const {data} = useQuery(ME);
    //question marks as optional chaining only if previous value is undefined dont continue to avoid error 
    const user =  data?.me || {}; 
    console.log(user);
    return (
        user.thoughts?.map(items => (
        <Col className="mx-auto m-3" lg="8">
            <Card>
            <Card.Body>
                <Card.Title>{items.location}</Card.Title>
                <Card.Text >{items.departure}</Card.Text>
                <Button className='m-3' variant="primary">Edit</Button>
                <Button className='m-3' variant="danger">Delete</Button>
            </Card.Body>
            </Card>
        </Col>
        ))
    );
}   

export default VacayCard;