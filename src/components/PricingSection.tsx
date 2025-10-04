import { useState, useEffect } from 'react';

export default function PricingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const plans = [
    {
      id: 1,
      name: "Plan Barista Básico",
      price: "Gratis",
      priceDetail: "",
      features: [
        "Asistente de extracción básico",
        "Temporizador y ratios estándar",
        "Acceso a recetas compartidas",
        "Feed social básico",
        "Acceso desde móvil"
      ],
      buttonText: "Comenzar Gratis",
      featured: false
    },
    {
      id: 2,
      name: "Plan Barista Premium",
      price: "s/.29",
      priceDetail: "/mes",
      features: [
        "Todo Plan Barista Básico",
        "Recetas avanzadas y analíticas",
        "Gamificación: logros y retos",
        "Retos con amigos",
        "Tienda integrada con descuentos"
      ],
      buttonText: "Upgrade a Premium",
      featured: true
    },
    {
      id: 3,
      name: "Plan Cafetería",
      price: "s/.99",
      priceDetail: "/mes",
      features: [
        "Gestión de recetas estandarizadas",
        "Control de consistencia",
        "Entrenamiento barista",
        "Registro de locales y menús",
        "Control de baristas"
      ],
      buttonText: "Plan para Cafeterías",
      featured: false
    },
    {
      id: 4,
      name: "Plan Cafetería Pro",
      price: "s/.199",
      priceDetail: "/mes",
      features: [
        "Todo Plan Cafetería",
        "Analítica avanzada de extracción",
        "Integración con POS",
        "Módulos de capacitación avanzada",
        "Soporte prioritario"
      ],
      buttonText: "Plan Pro",
      featured: true
    }
  ];

  // Para carrusel infinito, duplicamos los planes
  const infinitePlans = [...plans, ...plans, ...plans];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Reset infinito
  useEffect(() => {
    if (currentSlide === plans.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(plans.length);
      }, 700);
    } else if (currentSlide === plans.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(plans.length * 2 - 1);
      }, 700);
    }
  }, [currentSlide, plans.length]);

  return (
    <section id="planes" className="bg-white border-t border-black">
      <div className="py-24 lg:py-32">
        {/* Título - Alineado a la izquierda */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-[#452C20] mb-4">
            Nuestros planes
          </h2>
          <p className="text-lg text-[#452C20]/70">
            Planes diseñados para tu pasión cafetalera.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <div className="overflow-hidden px-6 lg:px-0">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% / 3))` 
              }}
            >
              {infinitePlans.map((plan, index) => (
                <div 
                  key={`${plan.id}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-0 md:px-4 lg:px-6"
                >
                  <div className={`h-full p-6 md:p-8 lg:p-10 border-2 transition-all duration-300 mx-auto max-w-md md:max-w-none ${
                    plan.featured 
                      ? 'border-[#202245] bg-[#202245]/5' 
                      : 'border-[#452C20]/20 bg-white'
                  }`}>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-[#452C20] mb-4 md:mb-6">
                      {plan.name}
                    </h3>
                    <div className="mb-6 md:mb-8">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#452C20]">{plan.price}</span>
                      {plan.priceDetail && (
                        <span className="text-base md:text-lg text-[#452C20]/60">{plan.priceDetail}</span>
                      )}
                    </div>
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-[#452C20]/80">
                          <span className="mr-2 md:mr-3 text-[#202245] font-bold flex-shrink-0">✓</span>
                          <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                      plan.featured
                        ? 'bg-[#202245] text-white hover:bg-[#452C20]'
                        : 'border-2 border-[#452C20] text-[#452C20] hover:bg-[#452C20] hover:text-white'
                    }`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegación - Estilo Reseda */}
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-8 md:mt-12 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#452C20] text-white hover:bg-[#202245] transition-all duration-300 flex items-center justify-center text-xl md:text-2xl flex-shrink-0"
              aria-label="Anterior"
            >
              ←
            </button>
            
            <div className="flex gap-2 md:gap-3 overflow-hidden mx-4">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(plans.length + index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                    (currentSlide % plans.length) === index 
                      ? 'bg-[#452C20] w-8 md:w-12' 
                      : 'bg-[#452C20]/30 w-2 hover:bg-[#452C20]/50'
                  }`}
                  aria-label={`Ir a plan ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#452C20] text-white hover:bg-[#202245] transition-all duration-300 flex items-center justify-center text-xl md:text-2xl flex-shrink-0"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

