
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_THOUGHT } from '../utils/mutations';

function VacayCard() {
    //question marks as optional chaining only if previous value is undefined dont continue to avoid error 
    const {data} = useQuery(ME);
    const user =  data?.me || {}; 
    const  [delet, {error}] = useMutation(REMOVE_THOUGHT);
    const handleDelete = async (ids) => {
        try {
            const {data} = await delet({
                variables: {thoughtId: ids}
            });
            console.log(data);
            window.location.reload(false);
        } catch (e) {
            console.error(e);
        }
    }
    
    return (
        user.thoughts?.map(items => (
        <div key={items._id}>
        <Col className="mx-auto m-3" >
            <Card className="mx-auto col-5">
            <Card.Body>
                <Card.Title>{items.location}</Card.Title>
                <Card.Text >{items.departure}</Card.Text>
                <Button  href="/editCard" className='m-1' variant="primary">Edit</Button>
                <Button onClick={() =>handleDelete(items._id)} className='m-1' variant="danger">Delete</Button>
            </Card.Body>
            </Card>
        </Col>
        </div>
        ))
    );
}   

export default VacayCard;