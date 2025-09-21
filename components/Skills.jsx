"use client"

import AnimateOnView from './AnimateOnView'

export default function Skills() {
  const skills = [
    { group: 'Backend', items: [
      { name: 'PHP', pct: 80 },
      { name: 'Laravel', pct: 75 },
      { name: 'Node.js', pct: 86 },
    ]},
    { group: 'Frontend', items: [
      { name: 'HTML', pct: 90 },
      { name: 'CSS', pct: 85 },
      { name: 'JavaScript', pct: 82 },
      { name: 'jQuery', pct: 75 },
      { name: 'Next.js', pct: 78 },
    ]},
    { group: 'Database', items: [
      { name: 'MySQL', pct: 85 },
      { name: 'MongoDB', pct: 78 },
      { name: 'Postgres', pct: 75 },
    ]},
  ]

  return (
  <section id="skills" className="py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-gray-500 mt-2">Technical skills with representative proficiency levels.</p>
      </div>

      <AnimateOnView>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((col) => (
            <div key={col.group} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-200/90">{col.group}</h3>
              {col.items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{s.name}</span>
                    <span className="font-mono">{s.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="h-3 rounded-full bg-primary-500" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </AnimateOnView>
  </section>
  )
}
