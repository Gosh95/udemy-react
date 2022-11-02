import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Modal;
