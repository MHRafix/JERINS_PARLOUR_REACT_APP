import { useState } from "react";
import useDataFetching from "./useDataFetching";

const useDelete = (location) => {
    
    // Use state for open success modal and close
    const [ successModal, setSuccessModal ] = useState(false);

    // Import all service state from useDataFetching hook
    let { datas } = useDataFetching("services");
     
    // Handle delete booked package with confirmation window alert 
     const handleDelete = (id) => {
        const procced = window.confirm('Are you sure ?');
   
        if(procced){
           const url = `https://still-sierra-49002.herokuapp.com/${location}/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount > 0){
                   const rest = datas.filter(data => data._id !== id);
                   console.log(rest);
                   datas = rest;
                   console.log(datas);
                   // Set successModal true
                   setSuccessModal(true);
           }
        })
        }
       }

       return { successModal, handleDelete, setSuccessModal };

    };

export default useDelete;