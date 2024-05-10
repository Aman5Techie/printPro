// import React from 'react';
import PropTypes from 'prop-types';

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";

const Pdfviewer = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div >
      <button className = "" onClick={onOpenModal}>VIEW PDF</button>
      <Modal classNames = "h-24" open={open} onClose={onCloseModal} center>
        {children}
      </Modal>
    </div>
  );
};

Pdfviewer.propTypes = {
    children : PropTypes.any
};

export default Pdfviewer;
