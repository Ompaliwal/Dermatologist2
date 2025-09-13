// app/contact/page.tsx
"use client";

import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 to-white px-6 md:px-16 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in <span className="text-rose-600">Touch</span>
        </h1>
        <p className="text-gray-600 mt-2">
  Have questions or want to book an appointment? We&apos;re here to help you
  look and feel your best.
</p>

      </motion.div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE → Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.206176275072!2d80.9450453!3d26.8467089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d1234567!2sYour%20Clinic%20Location!5e0!3m2!1sen!2sin!4v1681567890000!5m2!1sen!2sin"
              width="100%"
              height="530"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT SIDE → Contact Options */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Image */}
          {/* <div className="w-full max-w-md mx-auto">
            <Image
              src="/images/contact1.jpg"
              alt="Contact"
              width={500}
              height={300}
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div> */}

          {/* Contact Links */}
          <div className="grid gap-4 w-full">
            <a
              href="https://wa.me/+917067995567"
              target="_blank"
              className="flex items-center gap-3 p-4 bg-rose-600 text-white rounded-xl shadow hover:scale-105 transition"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>

            <a
              href="mailto:clinic@example.com"
              className="flex items-center gap-3 p-4 bg-rose-100 text-rose-600 rounded-xl shadow hover:bg-rose-200 transition"
            >
              <Mail className="w-6 h-6" />
              <span className="font-medium">clinic@example.com</span>
            </a>

            <a
              href="tel:+917067995567"
              className="flex items-center gap-3 p-4 bg-rose-100 text-rose-600 rounded-xl shadow hover:bg-rose-200 transition"
            >
              <Phone className="w-6 h-6" />
              <span className="font-medium">+91 7067995567</span>
            </a>
          </div>

{/* Timings */}
<div className="p-6 bg-rose-50 rounded-xl shadow-md">
  <div className="flex items-center gap-3 mb-4">
    <Clock className="w-6 h-6 text-rose-600" />
    <p className="font-semibold text-lg text-gray-800">Clinic Hours</p>
  </div>

  <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
    <span className="font-medium">Monday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium">Tuesday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium">Wednesday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium">Thursday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium">Friday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium">Saturday</span>
    <span>10:00 AM – 7:00 PM</span>

    <span className="font-medium text-rose-600">Sunday</span>
    <span className="text-rose-600">Closed</span>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}
