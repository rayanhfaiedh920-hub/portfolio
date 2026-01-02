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
    },
    {
      title: "Performance Reporting",
      description: "Delivering comprehensive analytics and insights to measure campaign impact and ROI."
    }
  ];

  return (
    <section className="py-20 w-full text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-tech-blue">{service.title}</h3>
            <p className="mt-4 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
