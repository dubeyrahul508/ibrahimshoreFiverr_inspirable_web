import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios'


const useFetchData = ({url, headers, payload}) => {
    const [res, setRes] = useState({data: null, error: null, isLoading: false});

 
    const callAPI = useCallback(() => {
         setRes(prevState => ({...prevState, isLoading: true}));
         console.log(res)
         axios.post(url, payload, {headers: headers}).then(res => {
            console.log('here');
            setRes({data: res.data, isLoading: false, error: null});
         }).catch((error) => {
            console.log('here',error)
            setRes({data: null, isLoading: false, error});
         })
    }, [url, headers, payload])
    return [res, callAPI];
}



const useModal = () => {
   let [modal, setModal] = React.useState(false);
   let [modalContent, setModalContent] = React.useState("I'm the Modal Content");
 
   let handleModal = (content = false) => {
     setModal(!modal);
     if (content) {
       setModalContent(content);
     }
   };

   return { modal, handleModal, modalContent };
}





export {useFetchData, useModal};
