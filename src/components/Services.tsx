import Link from 'next/link';

export default function Services() {
  const services = [
    { 
      title: "Cleanrooms", 
      desc: "ISO-classified construction, modular panel systems, and HEPA contamination control.",
      href: "#" 
    },
    { 
      title: "Laboratories", 
      desc: "BSL-2 & BSL-3 setups, pressure cascades, and biosafety compliance airflow.",
      href: "#" 
    },
    { 
      title: "Sterile Facilities", 
      desc: "GMP-compliant manufacturing, aseptic compounding, and controlled production.",
      href: "#" 
    },
    { 
      title: "Critical HVAC", 
      desc: "Temperature/humidity control, AHU design, and clean air ducting validation.",
      href: "#" 
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[#b71c1c] font-bold text-xs tracking-[0.2em] uppercase mb-2">Core Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">Our Specializations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-hover-effect p-8 flex flex-col h-full group">
              <div className="w-10 h-1 bg-[#66C2E0] mb-6 group-hover:bg-[#003366] transition-colors" />
              <h3 className="text-xl font-bold text-[#003366] mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <Link href={service.href} className="link-detail mt-auto">Know More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}