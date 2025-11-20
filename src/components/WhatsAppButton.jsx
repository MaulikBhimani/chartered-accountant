import React from "react";

const WhatsAppButton = () => {
  // Your business or personal WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "+918758485159"; // Nikhil Amreliya's WhatsApp number
  const message = "Hello! I'm interested in SHREE CONSULTANCY services for GST, Income Tax, Accounting, and business registration.";

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
