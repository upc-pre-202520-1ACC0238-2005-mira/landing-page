export default function ProductsSection() {
  const team = [
    {
      id: 1,
      name: "Nelson Fabrizzio Pereira Vasquez",
      role: "Desarrollador - 202417468",
      description: "Desarrollador principal del proyecto Xantina, especializado en tecnologías web modernas.",
      image: "/nelson.jpeg"
    },
    {
      id: 2,
      name: "Fabián Alejandro Oliva López",
      role: "Desarrollador - 202312013",
      description: "Experto en desarrollo frontend y experiencia de usuario para aplicaciones de café.",
      image: "/491856150-57fbf2a0-8aee-432f-b12c-32d9b0a2f53e.png"
    },
    {
      id: 3,
      name: "Miguel Angel Vidal Castro",
      role: "Desarrollador - 202314186",
      description: "Especialista en backend y arquitectura de sistemas para la plataforma Xantina.",
      image: "/Miguel.png"
    },
    {
      id: 4,
      name: "Juan Diego Javier Mondoñedo Rodriguez",
      role: "Desarrollador - 202110373",
      description: "Desarrollador full-stack con experiencia en aplicaciones móviles y web.",
      image: "/JuanDiego.jpg"
    },
    {
      id: 5,
      name: "Guillermo Fabián Tantaleán Mesta",
      role: "Desarrollador - 202311958",
      description: "Especialista en integración de sistemas y desarrollo de APIs para la comunidad cafetalera.",
      image: "/guillermo.jpeg"
    }
  ];

  return (
    <section id="equipo" className="bg-[#F5F3F0] border-t border-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Título */}
        <h2 className="font-serif text-4xl lg:text-5xl text-[#452C20] mb-16 lg:mb-20">
          Nuestro Equipo
        </h2>

        {/* Grid del equipo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
          {team.map((member, index) => (
            <div key={member.id} className="group">
              {/* Imagen del miembro */}
              <div className={`relative overflow-hidden mb-6 ${
                index === 1 || index === 4 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Nombre del miembro */}
              <h3 className="font-serif text-xl lg:text-2xl text-[#452C20] mb-2">
                {member.name}
              </h3>
              
              {/* Rol */}
              <p className="text-sm text-[#452C20] font-medium mb-3">
                {member.role}
              </p>
              
              {/* Descripción */}
              <p className="text-sm text-[#452C20]/60 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

