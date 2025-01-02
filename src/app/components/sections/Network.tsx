import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa'

const Network = () => {
  return (
      <section className="py-10 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-orange-500">Suivez-nous</h2>
          <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" className="text-blue-600"><FaFacebook size={30} /></a>
              <a href="https://twitter.com" className="text-blue-400"><FaTwitter size={30} /></a>
              <a href="https://linkedin.com" className="text-blue-700"><FaLinkedin size={30} /></a>
              <a href="https://facebook.com" className="text-blue-700"><FaFacebookF size={30} /></a>
          </div>
      </section>

  )
}

export default Network