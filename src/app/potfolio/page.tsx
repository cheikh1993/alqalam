import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <Head>
              <title>Cheikh Faye - Développeur Web et Mobile</title>
              <meta name="description" content="Portfolio de Cheikh Faye, développeur web et mobile passionné d'informatique." />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <header className="w-full py-4 bg-white shadow-md">
              <div className="container mx-auto px-4 flex justify-between items-center">
                  <h1 className="text-xl font-bold text-gray-800">Cheikh Faye</h1>
                  <nav>
                      <ul className="flex space-x-4">
                          <li><a href="#about" className="text-gray-600 hover:text-gray-800">À propos</a></li>
                          <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projets</a></li>
                          <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Bonjour, je suis Cheikh Faye</h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                  Développeur web et mobile passionné d'informatique, je conçois des solutions modernes et performantes pour répondre aux besoins numériques.
              </p>
              <div className="mt-6">
                  <a
                      href="#projects"
                      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                      Voir mes projets
                  </a>
              </div>
          </main>

          <footer className="w-full py-4 bg-gray-800">
              <div className="container mx-auto px-4 text-center">
                  <p className="text-sm text-gray-400">&copy; 2025 Cheikh Faye. Tous droits réservés.</p>
              </div>
          </footer>
      </div>
  )
}

export default page