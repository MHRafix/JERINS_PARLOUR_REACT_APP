import axios from "axios";
import { useState } from "react";

const usePost = (url, reset) => {

    // Take a state for showing loading gif
    const [ isSend, setIsSend ] = useState(false);

    // Take a state for showing the alert  while booking data insert true
    const [open, setOpen] = useState(false);

    const onSubmit = data => {
        setIsSend(true);
        axios.post(`https://still-sierra-49002.herokuapp.com/${url}`, data)
        .then(res => {
          if(res.data.insertedId){
            setIsSend(false);
            setOpen(true);
            reset();
           }
        })
  
  };

    return [ isSend, open, setOpen, onSubmit ];
};

export default usePost;