export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
            <p className="text-gray-600 leading-relaxed">
              Soy un(a) desarrollador(a) con pasión por el diseño y la interacción. Me gusta convertir ideas
              en productos digitales bien pulidos y escalables. Trabajo con React, Tailwind, FastAPI y MongoDB.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-black/5 bg-gray-50">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div className="p-6 rounded-2xl border border-black/5 bg-gray-50">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-gray-600">Proyectos entregados</p>
            </div>
            <div className="p-6 rounded-2xl border border-black/5 bg-gray-50">
              <p className="text-3xl font-bold">React</p>
              <p className="text-gray-600">Frontend</p>
            </div>
            <div className="p-6 rounded-2xl border border-black/5 bg-gray-50">
              <p className="text-3xl font-bold">FastAPI</p>
              <p className="text-gray-600">Backend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    { title: 'Dashboard SaaS', desc: 'Analítica con gráficos interactivos', tags: ['React', 'Tailwind', 'Charts'] },
    { title: 'Ecommerce', desc: 'Carrito, pagos y panel de admin', tags: ['FastAPI', 'MongoDB', 'Stripe'] },
    { title: 'Landing 3D', desc: 'Experiencia con Spline y animaciones', tags: ['Spline', 'Framer Motion'] },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Proyectos destacados</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <article key={idx} className="group p-6 rounded-2xl border border-black/5 bg-white hover:shadow-xl transition-shadow">
              <div className="h-32 mb-4 rounded-xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-black/5 p-8 bg-gradient-to-br from-gray-50 to-white">
          <h2 className="text-3xl font-bold mb-4">Hablemos</h2>
          <p className="text-gray-600 mb-6">¿Tienes un proyecto o idea? Estoy disponible para colaboraciones y freelance.</p>
          <a href="mailto:tu-email@correo.com" className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
            Enviar email
          </a>
        </div>
      </div>
    </section>
  )
}
