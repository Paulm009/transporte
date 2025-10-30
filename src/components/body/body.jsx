function Body() {
  const services = [
    { title: 'Transmission Repair', desc: 'Expert rebuilding and maintenance.' },
    { title: 'Check Engine Light', desc: 'Diagnostics and performance repair.' },
    { title: 'General Auto Care', desc: 'Brakes, AC, oil change and more.' },
  ];

  return (
    <section className="py-24 px-10 md:px-20 bg-[#F8F9FB] text-center">
      <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#002E6D]">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Body;
