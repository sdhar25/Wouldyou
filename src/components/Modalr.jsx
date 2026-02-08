import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import fartgif from '../assets/egg-fart.gif'

const Modalr = (props)=>{
    return(<>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Don't Be Dumb
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>😿😿😿😿😿</h4>
        <p>
          Don't Be Dumb, just close it and select correct option  🤬😤🤬😤🤬😤
          <img src={fartgif} alt="Loading..." />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>)
}

export default Modalr; 