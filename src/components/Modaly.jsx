import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import forygif from '../assets/fory1.gif';
import dance from '../assets/dancing-cat-dance.gif';
import Customconfetti from './Customconfetti';

const Modaly = (props)=>{
    return(<>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Congratulation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>💐🪻🎁♥️🌻🌼</h4>
        <p>
          Correct answer. Smart move. Nice choice.
          
        </p>
        {/* <img src={forygif} alt="Loading..." /> */}
        <img src={dance} alt="Loading..." />
        <Customconfetti />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>)
}

export default Modaly; 