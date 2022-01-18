import axios from "axios";
import { useState } from "react";

const usePost = () => {

    // Take a state for showing loading gif
    const [ isSend, setIsSend ] = useState(false);

    // Take a state for showing the alert  while booking data insert true
    const [open, setOpen] = useState(false);

  const handlePost = (data, url) => {
    console.log(data, url);
    setIsSend(true);
    axios.post(`https://still-sierra-49002.herokuapp.com/${url}`, data)
    .then(res => {
      if(res.data.insertedId){
        setIsSend(false);
        setOpen(true);
       }
    })

};

    return { isSend, open, setOpen, handlePost };
};

export default usePost;