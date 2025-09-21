"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold text-white/90">Vaibhav Gupta</Link>
          </div>

          <div className="hidden md:flex md:space-x-10 items-center">
            <div className="flex space-x-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-label={`Go to ${l.label}`}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`text-sm transition-colors duration-150 ${isActive(l.href) ? 'text-white font-medium' : 'text-white/70 hover:text-white'}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:bg-white/10"
            >
              <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-2 py-2 rounded-md transition-colors duration-150 ${isActive(l.href) ? 'text-white font-medium' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
