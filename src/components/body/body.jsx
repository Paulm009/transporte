import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fleetImg from "../../assets/fleet.jpg";
import oilImg from "../../assets/oil.jpg";
import inspectionImg from "../../assets/inspection.jpg";
import diagnosticsImg from "../../assets/diagnostics.jpg";
import onsiteImg from "../../assets/onsite.jpg";

export default function Body() {
  const mainServices = [
    { title: "Fleet Maintenance", desc: "Complete care for your truck fleet to keep them running efficiently.", img: fleetImg },
    { title: "Oil Changes and Checks", desc: "Regular oil changes and full system checks for reliability.", img: oilImg },
    { title: "Pre-trip and DOT Inspections", desc: "Certified inspections to ensure your vehicle meets DOT standards.", img: inspectionImg },
    { title: "Bumper to Bumper Diagnostics", desc: "Full diagnostics and repairs across your vehicle systems.", img: diagnosticsImg },
    { title: "On-site Maintenance Program", desc: "Professional maintenance wherever your fleet is located.", img: onsiteImg },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % mainServices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mainServices.length]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 1, zIndex: 0 }),
  };

  return (
    <div className="w-full">
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <div className="relative w-full h-full">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={mainServices[index].img}
                alt={mainServices[index].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute text-center px-4 md:px-20 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {mainServices[index].title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                  {mainServices[index].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {mainServices.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-10 rounded-full transition-all duration-300 ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
