import React, {useEffect, useState} from "react";
import {useModal} from "../utils/hooks";
import Modal from "../components/Modal";

let ModalContext;
ModalContext = React.createContext();
let { Provider } = ModalContext;

let ModalProvider = ({ children }) => {
  const [tab,setTab]=useState('');
  console.log(useModal())
  let { modal, handleModal, modalContent } = useModal();
  useEffect(()=>{
    if(document.getElementById('signUpToday')){
      document.getElementById('signUpToday').addEventListener("click", function() {
        setTab('0');
      });
    }else
    {
      setTab('1');
    }

  })
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal selectedTab={tab} />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
