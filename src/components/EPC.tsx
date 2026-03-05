import Image from 'next/image';
import Link from 'next/link';

// MUST HAVE default export to avoid runtime error
export default function EPC() {
  const pillars = [
    { 
      title: "Cleanrooms", 
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      desc: "ISO-classified construction for pharmaceutical & electronics."
    },
    { 
      title: "Laboratories", 
      img: "https://images.unsplash.com/photo-1576086213369-97a306dca1c5?q=80&w=2000",
      desc: "High-containment BSL-2 & BSL-3 laboratory infrastructure."
    },
    { 
      title: "Sterile Facilities", 
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
      desc: "GMP-compliant aseptic zones and controlled environments."
    }
  ];

  return (
    <section className="py-24 bg-white px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-[#003366] uppercase tracking-tighter">
          Engineering capabilities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((item, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="h-64 relative overflow-hidden">
              <Image 
                src={item.img} 
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-[#003366] mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">{item.desc}</p>
              <Link href="#" className="link-detail text-[#b71c1c] text-xs font-bold uppercase tracking-widest group-hover:text-[#003366]">
                Know More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}