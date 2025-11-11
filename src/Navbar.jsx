import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <>
      <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
      <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
    </>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl">My Portfolio</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95">
          <div className="px-4 py-3 flex flex-col gap-3 text-gray-700">
            <NavLinks />
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-full hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
