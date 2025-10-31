function ContactSection() {
  return (
    <section className="bg-[#f1f5f9] text-black py-20 px-10 md:px-20 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        {/* Frase de confianza */}
        <p className="text-lg text-gray-700 italic">
          "Reliable service you can count on — anytime, anywhere."
        </p>

        {/* Contenido en dos columnas */}
        <div className="grid md:grid-cols-2 gap-10 mt-10 text-left md:text-left text-gray-800">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Get in Touch</h3>
            <p>
              📍 <span className="font-medium">Location:</span> Boulder Denver, Co
            </p>
            <p>
              📞 <span className="font-medium">Owner’s Number:</span> +17204994345
            </p>
            <p>
              🕒 <span className="font-medium">Available:</span> 24/7 Mobile Service
            </p>
          </div>

          {/* Mapa de Google */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97767.18544145054!2d-105.25951234583373!3d40.02576582454145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e1efa4d0aa7a003%3A0x4f0a945684ba849a!2sMobile%20Diesel%20Mechanic%20LLC!5e0!3m2!1ses!2sbo!4v1761871739685!5m2!1ses!2sbo"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
