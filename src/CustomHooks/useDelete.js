import { useState } from "react";

const useDelete = () => {
    

    
    // Use state for open success modal and close
    const [ successModal, setSuccessModal ] = useState(false);

     // Handle delete booked package with confirmation window alert 
     const handleDelete = (id, location) => {
        const procced = window.confirm('Are you sure ?');
   
        if(procced){
           const url = `https://still-sierra-49002.herokuapp.com/${location}/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               if(data.deletedCount > 0){
                
                // Set successModal true
                setSuccessModal(true);

                
           }
        })
        }
       }

       return { successModal, handleDelete, setSuccessModal };

    };

export default useDelete;