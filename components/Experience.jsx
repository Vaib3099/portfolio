"use client"

import AnimateOnView from './AnimateOnView'

export default function Experience() {
  const items = [
    { title: 'Senior Developer at ABC Tech', period: '2023 - Present', desc: 'Lead backend full-stack development and project design.' },
    { title: 'Software Engineer at XYZ Solutions', period: '2020 - 2023', desc: 'Backend development and database management.' },
    { title: 'Junior Developer at Startup Inc.', period: '2018 - 2020', desc: 'Front-end development and UI/UX design.' },
  ]

  return (
  <aside id="experience" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <AnimateOnView>
        <div className="space-y-6">
          {items.map((it, idx) => (
            <div key={it.title} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary-500 mt-1" />
                {idx < items.length - 1 && <div className="w-px h-full bg-gray-700 mt-2" />}
              </div>
              <div>
                <h3 className="font-medium">{it.title}</h3>
                <p className="text-sm text-gray-400">{it.period}</p>
                <p className="mt-1 text-gray-300 text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnView>
    </aside>
  )
}
