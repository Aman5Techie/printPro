// import React from 'react';
import PropTypes from "prop-types";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const Pdfviewer = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="" onClick={onOpenModal}>
        VIEW PDF
      </div>
      <Modal classNames="h-24" open={open} onClose={onCloseModal}>
        {children}
      </Modal>
    </div>
  );
};

Pdfviewer.propTypes = {
  children: PropTypes.any,
};

export default Pdfviewer;
