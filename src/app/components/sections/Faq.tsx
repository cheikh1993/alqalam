import React from 'react'

const Faq = () => {
  return (
      <section className="py-20 bg-white">
          <h2 className="text-4xl font-bold text-center text-orange-500">Questions fréquentes</h2>
          <div className="container mx-auto max-w-3xl mt-8">
              <div className="space-y-6">
                  <div>
                      <h3 className="text-2xl text-gray-800">Quels services proposez-vous ?</h3>
                      <p className="text-lg text-gray-700">Nous offrons des services de développement web, mobile, et des solutions en infographie adaptées à vos besoins.</p>
                  </div>
                  <div>
                      <h3 className="text-2xl text-gray-800">Comment puis-je obtenir un devis ?</h3>
                      <p className="text-lg text-gray-700">Vous pouvez nous contacter via notre formulaire ou prendre une démo gratuite pour obtenir un devis personnalisé.</p>
                  </div>
              </div>
          </div>
      </section>

  )
}

export default Faq