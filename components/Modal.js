import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modalContext";
import './Modal.scss'
import Account from '../components/Account';

const Modal = ({selectedTab}) => {
  let { handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className="main-modal" >
        <div className="modal-content">
          <button className="close-button" onClick={() => handleModal()}>&times;</button>
           <Account setSignup={selectedTab}/>
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
