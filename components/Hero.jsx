"use client"

import React from 'react'
import '../styles/globals.css'

export default function Hero() {
  return (
    <section className="min-h-[72vh] relative overflow-hidden">
      <div className="absolute -right-40 top-8 opacity-40 animate-float">
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="210" cy="210" r="180" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#2b1462" />
              <stop offset="100%" stopColor="#3b2a8a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 bg-red-500 color-primary-500">Hi, I'm Vaibhav Gupta</h1>
            <p className="text-xl text-primary-100 mb-2">Full-Stack Developer &amp; Tech Enthusiast</p>
            <p className="text-gray-300 max-w-xl">Building scalable, modern, and intelligent web solutions. Backend specialist in PHP/Laravel &amp; Node.js.</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-3 rounded-md shadow-lg hover:bg-primary-600 transition">View My Work</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-md hover:bg-white/5 transition">Contact Me</a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center shadow-2xl">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
