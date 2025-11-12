import React from "react";

const WhatsAppButton = () => {
  // Your business or personal WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "+919157256735"; // Example: for +1 (555) 123-4567
  const message = "Hello! I'm interested in your chartered accountant services.";

  // WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      💬 Chat with us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
