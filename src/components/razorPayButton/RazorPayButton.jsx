import { useCallback } from "react";

const RazorPayButton = ({ formData, isFormValid, amount, cart }) => {
  const handlePayment = useCallback(() => {
    if (!isFormValid) {
      alert("Please fill in all the fields.");
      return;
    }

    // Check if Razorpay script is already added
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => triggerRazorpay();
      script.onerror = () => alert("Failed to load Razorpay SDK");

      document.body.appendChild(script);
    } else {
      triggerRazorpay();
    }
  }, [formData, isFormValid, amount, cart]);

  const triggerRazorpay = () => {
    const options = {
      key: import.meta.env.VITE_razorPayApiKey, // Use environment variable
      amount: amount * 100, // Convert to paise
      currency: "USD",
      name: "Jyotirmay Sarkar",
      description: "DineDash Order Payment",
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Customer Info:", formData);
        console.log("Cart Items:", cart);
      },
      prefill: {
        name: formData.name || "Guest",
        email: formData.email || "not@provided.com",
        contact: "0000000000", // Optional: you can add a phone field in formData
      },
      theme: {
        color: "#0a6bff",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
        marginTop: "1rem",
      }}
    >
      Pay ${amount}
    </button>
  );
};

export default RazorPayButton;
