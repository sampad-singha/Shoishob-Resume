import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function CardHorizontal({image, title, text}) {
    return (
        <Card className='flex-row' style={{width: '50%'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Bachelor in Urban & Regional Planning</Card.Title>
                <Card.Text>
                    <p>January 2018- October 2023</p>
                    <p>Rajshahi University of Engineering and Technology</p>
                    <p>Grade: 3.80 out of 4.00</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardHorizontal;