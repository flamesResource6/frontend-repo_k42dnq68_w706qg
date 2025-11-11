export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          I am a product-focused software engineer specializing in delightful user experiences, performant web apps, and pragmatic AI integrations. I combine design sense with engineering to ship polished, business-ready features.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
          <div className="rounded-lg bg-white border p-4">
            <p className="font-semibold">Frontend</p>
            <p className="mt-1">React, Next.js, Tailwind, Framer Motion</p>
          </div>
          <div className="rounded-lg bg-white border p-4">
            <p className="font-semibold">Backend</p>
            <p className="mt-1">FastAPI, Node, MongoDB</p>
          </div>
          <div className="rounded-lg bg-white border p-4">
            <p className="font-semibold">AI & 3D</p>
            <p className="mt-1">OpenAI, RAG, Spline, Three.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}
