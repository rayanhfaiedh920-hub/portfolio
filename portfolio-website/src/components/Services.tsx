export default function Services() {
  const services = [
    {
      title: "Strategic Scouting",
      description: "Identifying and vetting the perfect creators to align with your brand's technical and marketing goals."
    },
    {
      title: "End-to-End Campaign Management",
      description: "From negotiation to final reporting, we manage the entire campaign lifecycle for a seamless partnership."
    },
    {
      title: "Technical Content Briefing",
      description: "Ensuring content accuracy and depth with detailed briefings for benchmarks, PC builds, and hardware reviews."
    }
  ];

  return (
    <section id="services" className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.title} className={`p-8 rounded-lg shadow-lg ${index === 0 ? 'bg-accent text-gray-900' : 'bg-gray-800'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${index === 0 ? 'text-gray-900' : 'text-white'}`}>{service.title}</h3>
            <p className={`${index === 0 ? 'text-gray-800' : 'text-gray-400'}`}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
