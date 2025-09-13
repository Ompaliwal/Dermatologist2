// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
<footer className=" bg-gradient-to-b from-rose-50 to-white  py-12 px-6 md:px-16 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Column 1 */}
    <div>
      <h2 className="text-xl font-semibold text-rose-600 mb-4">About Us</h2>
      <p className="text-sm text-black leading-relaxed">
        We are dedicated dermatology specialists offering professional skincare
        treatments and advice tailored for every individual.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h2 className="text-xl font-semibold text-rose-600 mb-4">Quick Links</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:underline text-black">Home</a></li>
        <li><a href="/doctors" className="hover:underline text-black">Doctors</a></li>
        <li><a href="/services" className="hover:underline text-black">Services</a></li>
        <li><a href="/contact" className="hover:underline text-black">Contact</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h2 className="text-xl font-semibold text-rose-600 mb-4">Get in Touch</h2>
      <p className="text-sm text-black">123 SkinCare Street, New Delhi, India</p>
      <p className="text-sm text-black">Email: info@dermaclinic.com</p>
      <p className="text-sm text-black">Phone: +91 706799 5567</p>
    </div>
  </div>

  <div className="mt-10 text-center text-rose-600 text-xs border-t border-white/20 pt-6">
    © {new Date().getFullYear()} Dermaclinic. All rights reserved.
  </div>
</footer>

  );
}
