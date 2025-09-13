// app/doctors/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Jenny Walker",
    specialty: "Dermatologist",
    image: "/images/doctor1.jpg",
    bio: "Specialist in skincare, acne treatment, and cosmetic dermatology with 10+ years of experience.",
  },
  {
    name: "Dr. Evans Brown",
    specialty: "Cosmetic Surgeon",
    image: "/images/doctor4.jpg",
    bio: "Expert in cosmetic procedures, facial aesthetics, and minimally invasive treatments.",
  },
  {
    name: "Dr. Taylor Smith",
    specialty: "Plastic Surgeon",
    image: "/images/doctor3.jpg",
    bio: "Expert in cosmetic procedures, facial aesthetics, and minimally invasive treatments.",
  },

];

export default function DoctorsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our <span className="text-rose-600">Doctors</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Experienced specialists dedicated to your care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition border-b-4 border-rose-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Doctor Image */}
            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md mb-4 ring-2 ring-rose-200">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Doctor Info */}
            <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-rose-600 font-medium">{doctor.specialty}</p>
            <p className="text-gray-600 mt-3 text-sm">{doctor.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
