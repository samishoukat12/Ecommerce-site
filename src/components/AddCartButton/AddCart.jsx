import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import AddCartDetailsList from "./AddcartDetailsList";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { FetchAddCart } from "./FetchAddCart";


export default function AddCart() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Cartz, Loading] = FetchAddCart();
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);
  return (
    <>
      <Button
        aria-label="show 4 new mails"
        style={{ borderRadius: 50 }}
        color="secondary"
        onClick={handleShow}
        
      >
        <StyledBadge badgeContent={Cartz.length} color="secondary" >
          <ShoppingCartTwoToneIcon />
        </StyledBadge>
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title>Carts</Modal.Title>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <AddCartDetailsList />
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
