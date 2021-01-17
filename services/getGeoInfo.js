import axios from "axios";
import { useState, useEffect } from "react";

export const getCountry = () => {

    const [country, setCountry] = useState('');
    
      useEffect( async () =>{
        const res = await axios.get("https://ipapi.co/json/");
        setCountry(res.data.country_name)
        return ;
      }, [])
  
  return country;
};
