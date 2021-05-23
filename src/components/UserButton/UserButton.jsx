import React from "react";
import Modal from "react-bootstrap/Modal";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import UserDetails from "./UserDetails";
import "./UserButton.css";

export default function UserButtonModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modalWidth">
      <Button
        style={{ borderRadius: 50 }}
        onClick={handleOpen}
        color="secondary"
      >
        <PersonOutlineTwoToneIcon />
      </Button>

      <Modal
        show={open}
        onHide={handleClose}
        keyboard={false}
        className="modalWidth"
      >
        <Modal.Header>
          <Modal.Title>Login User Details</Modal.Title>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <UserDetails />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
