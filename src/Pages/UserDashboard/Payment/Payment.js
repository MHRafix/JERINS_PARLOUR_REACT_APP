import React from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../CustomHooks/useAuth';
// import Dashboard from '../Dashboard';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
        // Take history for changing the route of the app
        const history = useHistory();

        // const { watchId } = useParams();

        // Import watch state
        // const {} = useGet('')
        
        let watch = {};
        // Conditionaly finding out the absolute current user orders using filter method
        // if(watches.length) {
            
        //     const orderedOrders = watches.find(watch => watch._id === watchId);
        //     watch = orderedOrders
        // }

        // Import use auth
        const { user, admin } = useAuth();
        
         // Prevent admins from the normal user route
         if(user?.email && admin){
            history.replace('/dashboard');
         }

         const { name, salePrice } = watch;

         const stripePromise = loadStripe('pk_test_51Jy986Fp0BiFtInNOEHC9OKJqS8ZxsvPVSpODrGL7ipWsSSii2mFo8LlY3BQC0bkzWqnZNW1x0lgIGxSYIiiwtgJ00Hshw7nKQ');

    return (
        <div className="Paymentwrapper">
            <div className="container">

            <Elements stripe={stripePromise}>
               <CheckoutForm 
               watch={watch} />
            </Elements>

        </div>
     </div>
    );
};

export default Payment;