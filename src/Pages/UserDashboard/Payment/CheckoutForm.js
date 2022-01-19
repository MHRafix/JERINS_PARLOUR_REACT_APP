import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';

const CheckoutForm = ({payableAmount, serviceID}) => {
  
  const history = useHistory();
  const [ error, setError ] = useState();
  const [ proccesing, setProccesing ] = useState(false);
  const [ success, setSuccess ] = useState();
  const [ clientSecret, setClientSecret ] = useState('');

  const { user } = useAuth();
  
  useEffect( () => {
      fetch('https://still-sierra-49002.herokuapp.com/create-payment-intent', {

        method: 'POST',
        headers: { 
          'content-type': 'application/json'
        },

        body: JSON.stringify({payableAmount})
        
      })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));

  }, [payableAmount]);

    // use stripe and elements
    const stripe = useStripe();
    const elements = useElements();
    
    

    // Handle crdit card form
    const handleSubmit = async (e) => {
      e.preventDefault();
        // Conditionaly payment
        if(!stripe || !elements){
            return;
        }


        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        setProccesing(true);
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
          setProccesing(false);
          setError(error.message);
          setSuccess('');

        }else{
          setError('');
          
        }

    // Paymey intent
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email
          },
        },
      },
    );

    if(intentError){
      setSuccess('');
      setError(intentError.message);
    }else{
      setError('');
      setSuccess('Your payment successfully proccesed!');
      setProccesing(false);

      // Save to database
      const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction : paymentIntent.client_secret.slice('_secret')[0]
      }
      const url = `https://still-sierra-49002.herokuapp.com/bookedServices/${user.email}/${serviceID}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })

      .then(res => res.json())
      .then(data => {
        // Nothing here
      });

    // Declare a timeOut function
    const timeOut = () => {
      history.push('/services');
    }

    // Initialize timeOut function here
    setTimeout(timeOut, 3000);
      
    }
    }



    return (
      <form onSubmit={handleSubmit}>
      {error && <p className='text-danger'>{error}</p> }
      {success && <p className='text-success'>{success}</p> }
      <CardElement className="cardElement"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      /> <br />
      {proccesing ? <button className="specialBtn"><Spinner animation="border" variant="danger" /></button>:<button className="specialBtn" type="submit" disabled={!stripe || success}>
        Pay Now
      </button>}
    </form>
    );
};

export default CheckoutForm;