import React from 'react'

const Demo = () => {
  return (
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto flex flex-wrap justify-center">
              <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
                  <h2 className="text-4xl font-bold text-center text-orange-500">Contactez-nous</h2>
                  <form className="mt-8 space-y-4">
                      <input type="text" placeholder="Votre Nom" className="w-full p-4 border border-gray-300 rounded-md" />
                      <input type="email" placeholder="Votre Email" className="w-full p-4 border border-gray-300 rounded-md" />
                      <textarea placeholder="Votre Message" className="w-full p-4 border border-gray-300 rounded-md h-32"></textarea>
                      <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md w-full">Envoyer</button>
                  </form>
              </div>
          </div>
      </section>

  )
}

export default Demo