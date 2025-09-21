"use client"

import AnimateOnView from './AnimateOnView'

export default function Projects() {
  const items = [
    { title: 'E-commerce Platform', tech: 'PHP · Laravel · JS', img: '/images/project-1.svg', desc: 'Full-featured e-commerce with admin panel and payments', demo: '#', src: '#' },
    { title: 'Chat Application', tech: 'Node.js · Socket.io', img: '/images/project-2.svg', desc: 'Real-time chat with rooms and notifications', demo: '#', src: '#' },
    { title: 'Task Management Tool', tech: 'React · Firebase', img: '/images/project-3.svg', desc: 'Kanban-style task manager with realtime sync', demo: '#', src: '#' },
    { title: 'Portfolio Website', tech: 'Next.js · Tailwind', img: '/images/project-1.svg', desc: 'Personal portfolio and blog with CMS', demo: '#', src: '#' },
  ]

  return (
    <section id="projects-section" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <AnimateOnView key={p.title} className="animate-fadeInUp" once>
            <div style={{ animationDelay: `${i * 120}ms` }} className="card p-4 rounded-lg hover:-translate-y-1 hover:shadow-2xl transition">
              <div className="relative mb-4 rounded-md overflow-hidden">
                <img loading="lazy" src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition" />
              </div>
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Web</span>
                <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Backend</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.demo} className="text-sm text-primary-100 hover:underline">Live Demo</a>
                <a href={p.src} className="text-sm text-gray-300 hover:underline">Source</a>
              </div>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  )
}
