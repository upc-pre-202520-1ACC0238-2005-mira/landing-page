export default function Hero() {
  return (
    <>
      {/* Main Hero */}
      <section className="min-h-screen flex items-center bg-[#F5F3F0] pt-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido del texto */}
            <div className="space-y-8 lg:space-y-12">
              <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl text-[#452C20] leading-[0.95] tracking-tight">
                Xantina
              </h1>
              
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-[#452C20] font-light leading-relaxed tracking-wide">
                MEJORA TU TÉCNICA, CONECTA Y DESCUBRE
              </h2>
              
              <p className="text-lg lg:text-xl text-[#452C20]/70 leading-relaxed max-w-xl">
                Cada preparación es una historia. Regístrala, compártela y descubre nuevas formas de disfrutar el café que amas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#202245] text-white px-10 py-4 hover:bg-[#452C20] transition-all duration-300 text-sm tracking-widest uppercase">
                  Comenzar Gratis
                </button>
                <a 
                  href="#conocer" 
                  className="inline-flex items-center justify-center text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-widest uppercase group border-2 border-[#452C20] px-10 py-4"
                >
                  Conocer más
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Imagen grande - REEMPLAZA CON TU IMAGEN */}
            <div className="relative h-[500px] lg:h-[700px]">
              <img 
                src="/hero-background.jpg" 
                alt="Xantina Coffee" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para Baristas Section */}
      <section id="baristas" className="bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest uppercase text-[#9A857C]">Para Baristas</h3>
                <h2 className="font-serif text-4xl lg:text-6xl text-[#452C20] leading-tight">
                  Aprende, Extrae y Conecta
                </h2>
              </div>
              
              <p className="text-lg text-[#452C20]/70 leading-relaxed">
                Convierte cada taza en una oportunidad para crecer. Encuentra recetas, 
                sigue a otros baristas y comparte tus descubrimientos con la comunidad.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Asistente de Extracción</h4>
                    <p className="text-[#452C20]/70">Temporizador, ratios y guías paso a paso para distintos métodos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Red Social</h4>
                    <p className="text-[#452C20]/70">Comparte extracciones, logros y actividad dentro de la app</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Gamificación</h4>
                    <p className="text-[#452C20]/70">Logros por métodos usados, días consecutivos y retos con amigos</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#202245] text-white px-10 py-4 hover:bg-[#452C20] transition-all duration-300 text-sm tracking-widest uppercase mt-8">
                Comenzar Gratis
              </button>
            </div>

            {/* Imagen - REEMPLAZA CON TU IMAGEN */}
            <div className="relative h-[500px] lg:h-[600px]">
              <img 
                src="/placeholder-barista.jpg" 
                alt="Para Baristas" 
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
              {/* Si no tienes imagen aún, este placeholder se verá bien */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9A857C]/20 to-[#202245]/10 rounded-sm flex items-center justify-center">
                <div className="text-center space-y-4 p-12">
                  <div className="text-8xl">☕</div>
                  <p className="text-sm text-[#452C20]/50 tracking-widest uppercase">Tu viaje cafetalero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Cafeterías Section */}
      <section id="cafeterias" className="bg-[#F5F3F0]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Imagen - REEMPLAZA CON TU IMAGEN */}
            <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
              <img 
                src="/placeholder-cafeteria.jpg" 
                alt="Para Cafeterías" 
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
              {/* Si no tienes imagen aún, este placeholder se verá bien */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#202245]/10 to-[#9A857C]/20 rounded-sm flex items-center justify-center">
                <div className="text-center space-y-4 p-12">
                  <div className="text-8xl">🏪</div>
                  <p className="text-sm text-[#452C20]/50 tracking-widest uppercase">Gestión profesional</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest uppercase text-[#9A857C]">Para Cafeterías</h3>
                <h2 className="font-serif text-4xl lg:text-6xl text-[#452C20] leading-tight">
                  Optimiza y Estandariza
                </h2>
              </div>
              
              <p className="text-lg text-[#452C20]/70 leading-relaxed">
                Herramientas para mejorar la consistencia, capacitar al personal y gestionar 
                aspectos clave del negocio desde el ángulo del café.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Registro de Locales</h4>
                    <p className="text-[#452C20]/70">Gestión completa de sedes y ubicaciones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Control de Menúes</h4>
                    <p className="text-[#452C20]/70">Registro y actualización de menús y ofertas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1 h-12 bg-[#202245]"></div>
                  <div>
                    <h4 className="font-medium text-[#452C20] mb-2">Control de Baristas</h4>
                    <p className="text-[#452C20]/70">Capacitación y seguimiento del personal</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#202245] text-white px-10 py-4 hover:bg-[#452C20] transition-all duration-300 text-sm tracking-widest uppercase mt-8">
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Promise */}
      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl lg:text-6xl text-[#452C20] mb-6">Nuestra Filosofía</h2>
            <div className="w-20 h-1 bg-[#202245] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center space-y-4">
              <h3 className="text-sm tracking-widest uppercase text-[#9A857C]">Nuestra Visión</h3>
              <h4 className="font-serif text-2xl text-[#202245]">Por qué existimos</h4>
              <p className="text-[#452C20]/70 leading-relaxed">
                Construir una comunidad donde cada persona pueda crecer, 
                aprender y compartir su pasión por el café de especialidad.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-sm tracking-widest uppercase text-[#9A857C]">Nuestra Misión</h3>
              <h4 className="font-serif text-2xl text-[#202245]">Qué hacemos</h4>
              <p className="text-[#452C20]/70 leading-relaxed">
                Facilitamos herramientas y espacios para registrar, analizar 
                y compartir preparaciones, fortaleciendo la conexión entre baristas.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-sm tracking-widest uppercase text-[#9A857C]">Nuestra Promesa</h3>
              <h4 className="font-serif text-2xl text-[#202245]">Cómo ayudamos</h4>
              <p className="text-[#452C20]/70 leading-relaxed">
                Acompañamos a la comunidad cafetalera en su búsqueda de conocimiento, 
                excelencia y conexión, uniendo tecnología y pasión en cada taza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

