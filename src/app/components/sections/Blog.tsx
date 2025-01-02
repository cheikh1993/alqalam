import React from 'react'

const Blog = () => {
  return (
      <section className="py-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center text-orange-500">Notre Blog</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-8 mt-8">
              <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800">5 tendances technologiques à suivre en 2025</h3>
                  <p className="text-gray-700 mt-4">Découvrez les technologies les plus prometteuses pour l'année à venir et comment elles transformeront votre entreprise.</p>
                  <a href="/blog/tendance-2025" className="text-orange-500 mt-4 inline-block">Lire l'article</a>
              </div>
          </div>
      </section>

  )
}

export default Blog