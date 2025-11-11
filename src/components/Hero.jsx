import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider bg-white/10 border border-white/10 rounded-full px-3 py-1 mb-6">Tech • Interactive • Modern</p>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Profesional Portfolio
        </h1>
        <p className="mt-4 text-slate-200 text-lg">
          Showcasing projects, skills, and experience with an interactive 3D touch.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">View Projects</a>
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Contact Me</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
    </section>
  )
}
