'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './components/ServiceCard';
import Avis from './components/sections/Avis';
import Contact from './components/sections/Contact';
import Faq from './components/sections/Faq';
import Demo from './components/sections/Demo';
import Partner from './components/sections/Partner';
import Blog from './components/sections/Blog';
import Network from './components/sections/Network';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: true, // L'animation se déclenche une seule fois
    });
  }, []);
  return (
    <div>
      {/* Section de bienvenue */}
      <div
        className="flex items-center justify-center mt-8 bg-gray-50 overflow-hidden"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        <div
          className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 p-8 sm:p-12 text-white overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Arrière-plan flou */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: 'url(/img.jpg)' }}
          ></div>

          {/* Contenu principal */}
          <div className="relative z-10 text-center max-w-6xl w-full px-4">
            <h1 className="text-5xl sm:text-6xl  font-extrabold leading-6 tracking-tight text-shadow-md">
              DES SOLUTIONS INFORMATIQUES INNOVANTES POUR VOTRE ENTREPRISE
            </h1>
            <p className="mt-6 text-lg sm:text-2xl leading-relaxed">
              Accélérez la croissance de votre entreprise grâce à des services technologiques de pointe conçus pour répondre à vos besoins.
            </p>
            <div className="mt-8">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50">
                Savoir Plus
              </button>
            </div>
          </div>
        </div>







      </div>

      {/* Section des services */}
      <div className="py-10 bg-white"
        data-aos="fade-left"
        data-aos-delay="400">
        <h2 className="text-4xl font-bold text-center text-custumColor leading-tight">Nos Service Chez Alqalam-Service</h2>
        <div className="p-4 flex items-center gap-8 justify-center flex-wrap">
          <ServiceCard
            position='fade-left'
          />
          <ServiceCard
            position='fade-right'
          />
          <ServiceCard
            position='fade-up'
          />
        </div>
      </div>

      <section className="py-20 bg-gray-50" data-aos="fade-right" data-aos-delay="600">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 px-4 lg:px-0">
          {/* Texte */}
          <div className="max-w-lg flex flex-col gap-5 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-custumColor leading-tight">
              Al Qalam Services
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Al Qalam Services est une entreprise dynamique et innovante opérant dans le secteur des services informatiques et technologiques. Bienvenue chez nous, votre partenaire de confiance pour des solutions innovantes en informatique et infographie.
            </p>
            <button className="bg-custumColor text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
              A propos de nous
            </button>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Image
              src="/logo.png"
              alt="A propos de Al Qalam Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width={430}
              height={450}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-aos="fade-up" data-aos-delay="800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 px-4 lg:px-0">
          {/* Image */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Image
              src="/value.jpg"
              alt="Valeurs de Al Qalam Services"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width={300}
              height={400}
            />
          </div>

          {/* Texte et icônes */}
          <div className="max-w-lg flex flex-col gap-5 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-custumColor leading-tight">
              Pourquoi choisir Al Qalam Services ?
            </h2>
            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Rapport qualité prix
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Meilleure offre au meilleur prix
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Service de qualité
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Service personnalisé
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Assistance efficace
              </li>
            </ul>
          </div>
        </div>
      </section>


      <Avis

      />
      <Contact />
      <Faq />
      <Demo />
      <Partner />
      <Blog />
      <Network />

    </div>
  )
}

export default Home
