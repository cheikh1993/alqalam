import React from 'react'

const Avis = () => {
  return (
      <section className="py-10 bg-gray-50">
          <h2 className="text-4xl font-bold text-center text-orange-500">Témoignages</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4 mt-4">
              <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
                  <p className="text-lg text-gray-700">"Service incroyable, nous avons vu une nette amélioration dans nos performances grâce à l'équipe d'Al Qalam Services."</p>
                  <p className="text-sm text-gray-500 mt-2">- Aliou Gaye, CEO</p>
              </div>
              <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
                  <p className="text-lg text-gray-700">"Une expérience exceptionnelle, très réactifs et toujours à l'écoute. Je recommande vivement."</p>
                  <p className="text-sm text-gray-500 mt-2">- Cheikh Faye, CTO</p>
              </div>
          </div>
      </section>

  )
}

export default Avis