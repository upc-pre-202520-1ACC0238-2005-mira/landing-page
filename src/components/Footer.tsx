export default function Footer() {
  return (
    <footer className="bg-[#202245] text-white border-t border-black">
      {/* Large Logo Section */}
      <div className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="font-bold text-[8rem] sm:text-[12rem] lg:text-[16rem] xl:text-[20rem] text-white leading-[0.85] tracking-tighter">
            XANTINA
          </h2>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-white/20"></div>

      {/* Todo el contenido pequeño */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Mapa del Sitio */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/50 mb-4">Mapa del Sitio</h4>
            <ul className="space-y-2">
              <li>
                <a href="#baristas" className="text-white/70 hover:text-white transition-colors text-sm">
                  Para Baristas
                </a>
              </li>
              <li>
                <a href="#cafeterias" className="text-white/70 hover:text-white transition-colors text-sm">
                  Para Cafeterías
                </a>
              </li>
              <li>
                <a href="#comunidad" className="text-white/70 hover:text-white transition-colors text-sm">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#tienda" className="text-white/70 hover:text-white transition-colors text-sm">
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/50 mb-4">Síguenos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/50 mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hola@xantina.app" className="text-white/70 hover:text-white transition-colors text-sm">
                  hola@xantina.app
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/50 mb-4">Suscríbete</h4>
            <p className="text-white/70 text-xs mb-3 leading-relaxed">
              Recibe noticias y actualizaciones.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 bg-white/10 border border-white/30 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-[#202245] hover:bg-white/90 transition-colors text-xs tracking-widest uppercase font-medium"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Xantina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

