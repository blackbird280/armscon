import React, { useEffect, useState } from 'react';
import Razorpay from 'razorpay';

function RazorpayComponent() {
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const options = {
      key: 'rzp_test_u461OiTH8F0HK7', // Replace with your API key
      amount: 10000, // The amount in paise (e.g., 10000 paise = ₹100)
      currency: 'INR', // Currency code (e.g., INR for Indian Rupees)
      name: 'ritesh',
      description: 'Test Payment',
      image: '/https://th.bing.com/th/id/OIP.3xo5KtdOVaHLH-v0ODdsvwHaEu?w=307&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Your logo
      handler: function (response) {
        console.log(response);
        // Handle the payment success or failure here
      },
    };

    const instance = new Razorpay(options);
    instance.on('payment.failed', function (response) {
      console.error(response.error.description);
      // Handle payment failure
    });

    setPaymentData(instance);
  }, []);

  const handlePayment = () => {
    if (paymentData) {
      paymentData.open();
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Razorpay;
