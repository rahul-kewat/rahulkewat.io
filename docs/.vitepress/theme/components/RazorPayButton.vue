<!-- .vitepress/theme/components/RazorpayButton.vue -->
<template>
    <button @click="payWithRazorpay" class="razorpay-button">
      Pay Now
    </button>
  </template>
  
  <script setup>
  const payWithRazorpay = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
      amount: 50000, // Amount in smallest currency unit (e.g., 50000 paise = ₹500)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo', // Optional: Your company logo URL
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle the payment success event here
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };
  
    const rzp = new Razorpay(options);
    rzp.open();
  };
  </script>
  
  <style scoped>
  .razorpay-button {
    padding: 10px 20px;
    background-color: #3eaf7c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .razorpay-button:hover {
    background-color: #35a16a;
  }
  </style>
  