import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../CustomHooks/useAuth';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jy986Fp0BiFtInNOEHC9OKJqS8ZxsvPVSpODrGL7ipWsSSii2mFo8LlY3BQC0bkzWqnZNW1x0lgIGxSYIiiwtgJ00Hshw7nKQ');


const Payment = ({amount}) => {
        // Take history for changing the route of the app
        const history = useHistory();
        
        // Import use auth
        const { user, admin } = useAuth();
        
         // Prevent admins from the normal user route
         if(user?.email && admin){
            history.replace('/dashboard');
         }


    return (
        <div className="Paymentwrapper">
            <div className="container">

            <Elements stripe={stripePromise}>
               <CheckoutForm payableAmount={amount} />
            </Elements>

        </div>
     </div>
    );
};

export default Payment;