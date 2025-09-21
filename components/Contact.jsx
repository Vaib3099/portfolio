"use client"

import AnimateOnView from './AnimateOnView'

export default function Contact() {
  return (
    <section id="contact" className="py-12" aria-label="Contact section">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <AnimateOnView>
        <p className="text-gray-400">You can reach me at <a href="mailto:email@example.com" className="text-primary-400" aria-label="Send email">email@example.com</a> or via LinkedIn.</p>
      </AnimateOnView>
    </section>
  )
}
