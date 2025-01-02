"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Contactez-Nous</span>
          </h1>
          <p className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets.
            N'hésitez pas à nous écrire et à collaborer pour transformer vos idées en réalité.
          </p>
          <div className="mt-10">
            <a
              href="#contact-form"
              className="inline-block px-8 py-4 bg-white text-orange-500 font-semibold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              Envoyer un message
            </a>
          </div>
        </div>
      </section>



      {/* Contact Details */}
      <section className="container mx-auto py-16 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <FaPhone className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold">Appelez-nous</h3>
            <p className="text-gray-600 mt-2">+221 77 123 4567</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <FaEnvelope className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold">Envoyez un email</h3>
            <p className="text-gray-600 mt-2">contact@exemple.com</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <FaMapMarkerAlt className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold">Rendez-nous visite</h3>
            <p className="text-gray-600 mt-2">
              Dakar, Sénégal
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">Laissez-nous un message</h2>
          <p className="text-center text-gray-600 mt-2">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
          </p>
          <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mt-6">
              <textarea
                placeholder="Votre message"
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
