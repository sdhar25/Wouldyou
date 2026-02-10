
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modalr from './Modalr';
import Modaly from './Modaly'
import { useState } from 'react';
const Maincard = ()=>{
  const [isVisble, setVisible] = useState(false);
  const [istruVisible, settruVisible] = useState(false);
    return (
        
        <>
        <div >
            <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
                <Row>
                    <Col >
                    <Card className="text-center " >
                        <Card.Header> 🤷‍♀️Today's Question 🤔</Card.Header>
                            <Card.Body>
                                <Card.Title>Select your answer 🤗 </Card.Title>
                                    <Card.Text>
                                        First Valentine. Many more, hopefully—with you.
                                            Will you be my Valentine? ♥️
                                    </Card.Text>
                                    <Row className="g-2"> 
                                        <Col xs={12} sm={6}> 
                                            <Button variant="primary" onClick={()=>settruVisible(true)} >Yes Sure 🥰</Button>
                                            <Modaly show ={istruVisible} onHide={()=>settruVisible(false)} />
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Button variant="danger" onClick={()=>setVisible(true)}>Get Lost 💩</Button>
                                            <Modalr show ={isVisble} onHide={()=>setVisible(false)} />
                                        </Col>
                                    </Row>
                                    
                                    
                                    
                                </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                    </Col>
                </Row>
             
            </Container>
        </div>

        
        
        
        </>
    )

}

export default Maincard