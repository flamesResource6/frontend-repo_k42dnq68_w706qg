export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border bg-gradient-to-br from-slate-50 to-white p-8">
          <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
          <p className="text-slate-600 mt-2">Have a project in mind or want to collaborate? Send a message and I’ll get back to you.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
            <input className="col-span-1 rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
            <textarea className="sm:col-span-2 rounded-lg border px-4 py-2.5 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" />
            <div className="sm:col-span-2">
              <button type="button" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
