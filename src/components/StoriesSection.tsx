export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      title: "María González",
      subtitle: "Barista",
      description: "Xantina me ha ayudado a mejorar mis extracciones. La comunidad es increíble.",
      image: "/Ana_Rivera.jpg",
      rating: 5
    },
    {
      id: 2,
      title: "Carlos Mendoza",
      subtitle: "Dueño de Cafetería",
      description: "Como dueño de cafetería, las herramientas de gestión son perfectas.",
      image: "/Martin_guiterrez.jpg",
      rating: 5
    },
    {
      id: 3,
      title: "Ana Rodríguez",
      subtitle: "Barista",
      description: "La app es intuitiva y las recetas compartidas son geniales.",
      image: "/Ana_Rivera.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="bg-[#F5F3F0] border-t border-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Título */}
        <h2 className="font-serif text-4xl lg:text-5xl text-[#452C20] text-center mb-20 lg:mb-24">
          Lo que dicen nuestros usuarios
        </h2>

        {/* Grid de historias */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {stories.map((story) => (
            <div key={story.id} className="group">
              {/* Imagen */}
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Título */}
              <h3 className="font-serif text-2xl lg:text-3xl text-[#452C20] text-center mb-2">
                {story.title}
              </h3>
              
              {/* Subtítulo */}
              <p className="text-sm text-[#452C20]/60 text-center mb-4">
                {story.subtitle}
              </p>

              {/* Estrellas */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(story.rating)].map((_, idx) => (
                  <span key={idx} className="text-[#202245] text-lg">⭐</span>
                ))}
              </div>

              {/* Descripción / Testimonio */}
              <p className="text-[#452C20]/80 text-center leading-relaxed">
                "{story.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

