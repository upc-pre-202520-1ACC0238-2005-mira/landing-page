export default function Hero() {
  return (
    <>
      {/* Main Hero - Estilo Reseda */}
      <section className="relative pt-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-0 min-h-screen items-center">
            {/* Columna Izquierda - Contenido */}
            <div className="py-20 lg:py-32 lg:pr-16 space-y-8">
              <h1 className="font-serif text-7xl lg:text-8xl xl:text-9xl text-[#452C20] leading-[0.9] tracking-tight">
                Xantina
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-[#452C20] font-normal leading-relaxed tracking-wider uppercase">
                App para Baristas y Cafeterías de Especialidad
              </h2>
              
              <p className="text-base lg:text-lg text-[#452C20]/70 leading-relaxed max-w-lg">
                La voz de Xantina da vida a nuestra pasión por el café. A través de nuestras herramientas y comunidad, buscamos inspirar, educar y conectar a las personas que viven el café con propósito. Sabemos que detrás de cada taza hay esfuerzo, curiosidad y comunidad.
              </p>

              <div className="pt-4">
                <a 
                  href="#conocer" 
                  className="inline-flex items-center text-[#452C20] hover:text-[#202245] transition-colors duration-300 text-sm tracking-wider group"
                >
                  <span className="mr-2">→</span> Conocer más
                </a>
              </div>
            </div>

            {/* Columna Derecha - Imagen Grande */}
            <div className="relative h-[500px] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
              <img 
                src="/hero-background.jpg" 
                alt="Xantina Coffee Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* Para Cafeterías Section */}
      <section id="cafeterias" className="bg-white border-t border-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[600px] rounded-sm overflow-hidden order-2 lg:order-1">
              <img 
                src="/cafe3.jpg" 
                alt="Gestión profesional" 
                className="w-full h-full object-cover"
              />
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

       {/* Para Baristas Section */}
       <section id="baristas" className="bg-[#F5F3F0] border-t border-black">
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
            <div className="relative h-[600px] rounded-sm overflow-hidden">
              <img 
                src="/cafe2.jpg" 
                alt="Tu viaje cafetalero" 
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* Vision, Mission, Promise */}
      <section className="bg-[#F5F3F0] border-t border-black">
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

