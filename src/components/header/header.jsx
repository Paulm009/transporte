// src/components/header/Header.jsx
import { motion } from 'framer-motion'
import imagen1 from '../../assets/imagen1.jpg';


export default function Header() {
  return (
    <header className="grid md:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-start px-10 md:px-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Are Your Trusted <span className="text-[#E41E26]">Car Care Experts</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          At AAMCO, we put the care back into car care — trusted for over 50 years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <button className="bg-[#E41E26] hover:bg-[#C21A22] text-white px-6 py-3 text-lg rounded-2xl shadow-lg">
            Mobile Diesel Mechanic LLC
          </button>
        </motion.div>
      </div>

      <div className="relative hidden md:block">
        <img
          src={imagen1}
          alt="AAMCO Service"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-[#002E6D]/40" />
      </div>
    </header>
  )
}
