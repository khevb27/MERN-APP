
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../utils/mutations';

function vacayCard(data) {
    const [user, { error, data }] = useQuery(GET_USER_DATA);
    const { data } = await user({})
    
    return (
        data.projects.map(projectItem => (
        <Col>
            <Card>
            <Card.Img variant="top" src={projectItem.src} />
            <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text > 
                <Button variant="success" className="m-2" href=''>GitHub</Button> 
                <Button  variant="success" href=''>Deployment</Button> 
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        ))
    );
}   

export default vacayCard;