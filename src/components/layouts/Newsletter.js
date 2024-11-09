import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import popupimg from "../../assets/img/popup.jpg";

const Newsletter = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      show={show}
      className="on-load-modal"
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${popupimg})` }}
      >
        <Modal.Header>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-inner">
            <h3 className="title">Newsletter</h3>
            <p>Subscribe to our newsletter to receive exclusive offers</p>
            <form>
              <input type="email" placeholder="Email Address" name="email" />
              <button
                type="submit"
                className="main-btn btn-filled"
                name="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default Newsletter;
