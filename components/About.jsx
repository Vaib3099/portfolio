"use client"

import React from 'react'
import AnimateOnView from './AnimateOnView'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnView>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold">About</h2>
              <p className="mt-4 text-gray-600">Experienced backend and full-stack developer with strong leadership skills and a focus on clean, maintainable code. I apply SOLID principles and leverage AI-assisted tools to accelerate problem solving.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Backend</h3>
                  <p className="text-gray-500">PHP, Laravel, Node.js</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">Frontend</h3>
                  <p className="text-gray-500">HTML, CSS, JS, jQuery, Next.js</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">Database</h3>
                  <p className="text-gray-500">MySQL, MongoDB, Postgres</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">Additional</h3>
                  <p className="text-gray-500">Leadership, SOLID principles, AI-assisted problem solving</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-full max-w-sm bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"></path>
                  </svg>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-600">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
