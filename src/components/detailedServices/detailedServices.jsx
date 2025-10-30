import { motion } from "framer-motion";
import {
  Wrench,
  Fuel,
  Battery,
  Fan,
  Truck,
  Gauge,
  Settings,
  Zap,
  AlertTriangle,
} from "lucide-react";

export function DetailedServices() {
  const services = [
    { title: "Emergency Roadside Repair", icon: AlertTriangle },
    { title: "24/7 Mobile Truck Repair", icon: Truck },
    { title: "Turbo Repair", icon: Fan },
    { title: "Radiator & Cooling Systems", icon: Gauge },
    { title: "Fuel Pumps & Leaks", icon: Fuel },
    { title: "Battery & Starter Replacement", icon: Battery },
    { title: "Check Engine Light", icon: Zap },
    { title: "Computer Diagnostics", icon: Settings },
    { title: "Brake Chambers & Air Systems", icon: Wrench },
    { title: "DPF / DEF Service", icon: Truck },
    { title: "Water Pumps", icon: Fan },
    { title: "General Maintenance", icon: Wrench },
  ];

  return (
    <section className="py-20 px-10 md:px-20 bg-gradient-to-b from-[#F8F9FB] to-[#EAF0F6] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#002E6D]">
        Detailed Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
          >
            {/* Efecto decorativo lateral */}
            <div className="absolute left-0 top-0 w-1 h-full bg-[#002E6D] opacity-0 group-hover:opacity-100 transition" />

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-[#002E6D] text-white p-4 rounded-full shadow-md group-hover:scale-110 transition">
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#002E6D]">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">
                Professional service with expert technicians, available on-site.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default DetailedServices;