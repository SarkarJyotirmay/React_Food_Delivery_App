import { useCallback } from "react";
import { useSelector } from "react-redux";

const RazorPayButton = () => {
  const cart = useSelector((state) => state.cartReducers);
  const amount = () => {
    return cart.reduce((acc, curr) => acc + curr.price*curr.quantity, 0);
  };
  const handlePayment = useCallback(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      const options = {
        key: import.meta.env.VITE_razorPayApiKey, // Replace with your Razorpay Test Key ID
        amount: amount() * 100, // amount in paise (₹500)
        currency: "USD",
        name: "Jyotirmay Sarkar",
        description: "Test Transaction",
        handler: function (response) {
          alert("Payment successful!");
          console.log("Razorpay Response:", response);
        },
        prefill: {
          name: "John Doe",
          email: "xyz@.com",
          contact: "98400183830",
        },
        theme: {
          color: "#0a6bff",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    script.onerror = () => {
      alert("Failed to load Razorpay SDK");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#0a6bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Pay
    </button>
  );
};

export default RazorPayButton;
