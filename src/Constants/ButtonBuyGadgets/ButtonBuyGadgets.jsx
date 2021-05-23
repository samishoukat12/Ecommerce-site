import {useState} from "react"
import Button from "@material-ui/core/Button"
import  Modal from "react-bootstrap/Modal"
import CloseIcon from "@material-ui/icons/Close";
import PlaceOderItems from "./PlaceOrderItems"
export default function ButtonBuy() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{color:"#FFFFFF"}}  onClick={handleShow}>
          Buy Now
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Place your Order</Modal.Title>
            <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
          </Modal.Header>
          <Modal.Body><PlaceOderItems/></Modal.Body>
          <Modal.Footer>
            <Button  variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="secondary" variant="contained" onClick={handleClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  