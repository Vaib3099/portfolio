import '../styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Tailwind Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Use a normal stylesheet link in the server layout to avoid client-side event handlers */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
        </noscript>
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300 font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-3 py-2 rounded">Skip to content</a>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
