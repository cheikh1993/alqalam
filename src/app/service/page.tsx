"use client"
import { FaTools, FaDesktop, FaPrint, FaFileAlt, FaCogs, FaRegCalendarCheck } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/services-hero.jpg)' }}></div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Nos <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos solutions innovantes pour les secteurs phares de la société et des entreprises,
            propulsées par notre plateforme technologique.
          </p>
          <div className="mt-8">
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              En savoir plus
            </a>
          </div>
        </div>
      </section>


      {/* Service 1 - Defar Bamou Bakh */}
      <section className="container mx-auto py-16 px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">Defar Bamou Bakh</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Nous offrons une approche moderne et professionnelle de la maintenance et des réseaux, avec une réparation garantie des appareils électroniques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12 ">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaTools className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Maintenance & Réparation</h3>
              <p className="text-gray-600 mt-2 text-center">
                Réparation d&apos;ordinateurs, téléphones, télévisions et autres appareils électroniques avec une garantie de satisfaction ou remboursement.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaDesktop className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Systèmes & Réseaux</h3>
              <p className="text-gray-600 mt-2 text-center">
                Maintenance préventive et corrective des systèmes informatiques, gestion des réseaux et sécurité informatique.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaDesktop className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Systèmes & Réseaux</h3>
              <p className="text-gray-600 mt-2 text-center">
                Maintenance préventive et corrective des systèmes informatiques, gestion des réseaux et sécurité informatique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Feñal */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500">Feñal</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Solutions de publicité en ligne et gestion de sites web pour aider les entreprises à atteindre leurs objectifs de prospection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaCogs className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Publicité en ligne</h3>
              <p className="text-gray-600 mt-2 text-center">
                Publicité en ligne efficace et ciblée, services assistés par des influenceurs pour une meilleure visibilité sur le web.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaRegCalendarCheck className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Gestion de Sites Web</h3>
              <p className="text-gray-600 mt-2 text-center">
                Création et gestion de sites web performants pour améliorer votre présence en ligne.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaRegCalendarCheck className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Gestion de Sites Web</h3>
              <p className="text-gray-600 mt-2 text-center">
                Création et gestion de sites web performants pour améliorer votre présence en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Dieummeul */}
      <section className="container mx-auto py-16 px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">Dieummeul</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Solutions avancées dans l&apos;impression numérique et la fabrication assistée par ordinateur (CAO/FAO), y compris l&apos;impression 3D.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaPrint className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Impression & Broderie</h3>
              <p className="text-gray-600 mt-2 text-center">
                Impression sur papier, broderie, découpe, flocage, et conception assistée par ordinateur (CAO).
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaCogs className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Impression 3D</h3>
              <p className="text-gray-600 mt-2 text-center">
                Création d&apos;objets en 3D pour des projets innovants dans différents secteurs, notamment la publicité et l&apos;architecture.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaCogs className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Impression 3D</h3>
              <p className="text-gray-600 mt-2 text-center">
                Création d&apos;objets en 3D pour des projets innovants dans différents secteurs, notamment la publicité et l&apos;architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 - Diappalé */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-500">Diappalé</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Assistance professionnelle dans la gestion et la rédaction de documents administratifs pour les entreprises et particuliers.
          </p>
          <div className="flex flex-col items-center mt-12">
            <FaFileAlt className="text-6xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-orange-500">Services Administratifs</h3>
            <p className="text-gray-600 mt-2 text-center max-w-lg mx-auto">
              Rédaction de rapports, mémoires, conception de magazines, flyers et cartes de visite. Un service complet pour tous vos besoins administratifs.
            </p>
          </div>
        </div>
      </section>

      {/* Service 5 - Woyofal */}
      <section className="container mx-auto py-16 px-4 lg:px-0">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-500">Woyofal</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Logiciels innovants pour l&apos;automatisation des tâches dans différents secteurs économiques, permettant une gestion efficace des ressources.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaCogs className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Gestion des Ressources</h3>
              <p className="text-gray-600 mt-2 text-center">
                Outils pour la gestion des locations, ressources dans les entreprises, écoles, et autres secteurs d&apos;activité.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaDesktop className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Logiciel de Conception</h3>
              <p className="text-gray-600 mt-2 text-center">
                Conception en 1D, 2D, et 3D pour la création de plans et structures complexes, notamment pour l&apos;architecture et l&apos;ingénierie.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105">
              <FaDesktop className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-orange-500">Logiciel de Conception</h3>
              <p className="text-gray-600 mt-2 text-center">
                Conception en 1D, 2D, et 3D pour la création de plans et structures complexes, notamment pour l&apos;architecture et l&apos;ingénierie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
