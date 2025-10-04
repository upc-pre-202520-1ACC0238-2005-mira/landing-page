export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "V60 Hario",
      description: "Método de goteo clásico",
      image: "/curva_tueste.png"
    },
    {
      id: 2,
      name: "Aeropress",
      description: "Extracción por presión",
      image: "/dashboard_inventario.png"
    },
    {
      id: 3,
      name: "Chemex",
      description: "Elegancia y sabor",
      image: "/491856150-57fbf2a0-8aee-432f-b12c-32d9b0a2f53e.png"
    }
  ];

  return (
    <section className="bg-[#F5F3F0] border-t border-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Título */}
        <h2 className="font-serif text-4xl lg:text-5xl text-[#452C20] mb-16 lg:mb-20">
          Descubre tus accesorios favoritos
        </h2>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Imagen del producto */}
              <div className={`relative overflow-hidden mb-6 ${
                index === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'
              }`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Nombre del producto */}
              <h3 className="font-serif text-2xl lg:text-3xl text-[#452C20] mb-2">
                {product.name}
              </h3>
              
              {/* Descripción */}
              <p className="text-sm text-[#452C20]/60">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botón ver todos */}
        <div className="text-center">
          <button className="px-12 py-4 border-2 border-[#452C20] text-[#452C20] hover:bg-[#452C20] hover:text-white transition-all duration-300 text-sm tracking-widest uppercase">
            Mira todos los accesorios
          </button>
        </div>
      </div>
    </section>
  );
}

