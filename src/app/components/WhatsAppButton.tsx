"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917067995567?text=Hello%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20reach%20out."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
