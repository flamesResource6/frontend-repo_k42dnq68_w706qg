import { useEffect, useState } from 'react'

const projectsSeed = [
  {
    title: 'AI Chatbot Assistant',
    description: 'Conversational assistant with retrieval and tools.',
    tags: ['React', 'FastAPI', 'OpenAI'],
    link: '#'
  },
  {
    title: 'E‑commerce Dashboard',
    description: 'Analytics, orders, customers, and inventory.',
    tags: ['Next.js', 'Tailwind', 'MongoDB'],
    link: '#'
  },
  {
    title: '3D Product Teaser',
    description: 'Interactive 3D experience powered by Spline.',
    tags: ['Spline', 'Three.js'],
    link: '#'
  }
]

function Tag({ children }) {
  return <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">{children}</span>
}

export default function Projects() {
  const [projects, setProjects] = useState(projectsSeed)

  useEffect(() => {
    setProjects(projectsSeed)
  }, [])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-slate-600 mt-2">A selection of work highlighting product thinking and engineering craft.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition bg-white">
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 mb-4" />
              <h3 className="font-semibold text-lg group-hover:text-blue-700">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
