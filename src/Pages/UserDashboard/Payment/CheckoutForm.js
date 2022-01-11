import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useEffect, useState} from 'react';
import useAuth from '../../../CustomHooks/useAuth';

const CheckoutForm = ({watch}) => {
  
  const [ error, setError ] = useState();
  const [ proccesing, setProccesing ] = useState(false);
  const [ success, setSuccess ] = useState();
  const [ clientSecret, setClientSecret ] = useState('');
  const {salePrice} = watch;

  const { user } = useAuth();

  useEffect( () => {
      fetch('http://localhost:5000/create-payment-intent', {

        method: 'POST',
        headers: { 
          'content-type': 'application/json'
        },

        body: JSON.stringify({salePrice})
        
      })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));

  }, [salePrice]);

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
          setError(error.message);
          setSuccess('');

        }else{
          setError('');
          console.log(paymentMethod);

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
      const url = `http://localhost:5000/orders`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })

      .then(res => res.json())
      .then(data => console.log(data));
      
    }
    }



    return (
      <form onSubmit={handleSubmit}>
      {error && <p>{error}</p> }
      {success && <p>{success}</p> }
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
      <button className="specialBtn" type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
    );
};

export default CheckoutForm;