import React from 'react'
import Link from 'next/link' // Utiliser Link pour la navigation interne

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 text-white text-center">
      <h2 className="text-4xl font-bold leading-tight mb-4">
        Prêt à transformer votre entreprise ?
      </h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        Rejoignez des centaines d&apos;entreprises qui utilisent nos solutions pour réussir dans le monde numérique.
      </p>

      <div className="mt-8">
        <Link href="/contact" className="bg-white text-orange-500 px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2">
          Demander une démo
        </Link>
      </div>
    </section>
  )
}

export default Contact
