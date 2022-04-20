import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
