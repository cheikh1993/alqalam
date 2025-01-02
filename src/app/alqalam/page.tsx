import React from 'react';
import Image from 'next/image';
import { FaLightbulb, FaUsers, FaThumbsUp } from 'react-icons/fa';

const values = [
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'Offrir des solutions novatrices adaptées aux besoins des clients.',
  },
  {
    icon: <FaUsers />,
    title: 'Collaboration',
    description: 'Créer des solutions durables en collaboration avec nos partenaires.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Excellence',
    description: 'Offrir des services de qualité supérieure.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-16">
      <div className="container mx-auto">
        {/* Introduction */}
        <div className="text-center mb-16 bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500 py-12 px-4 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Qui sommes-nous ?</h1>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Al Qalam Services est une entreprise dynamique et innovante opérant dans le secteur des services informatiques et technologiques.
            Fondée pour simplifier les opérations des entreprises et des particuliers, nous offrons une gamme complète de solutions adaptées aux besoins de nos clients.
          </p>
        </div>

        {/* Nos Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-left max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold text-blue-500 mb-6">Nos Services</h2>
            <ul className="text-lg text-gray-700 space-y-4">
              <li><strong>Defar Bamou Bakh:</strong> Maintenance et réseaux pour la gestion et la sécurité informatique.</li>
              <li><strong>Feñal:</strong> Publicité numérique et gestion web.</li>
              <li><strong>Dieummeul:</strong> Impression numérique et conception assistée.</li>
              <li><strong>Diappalé:</strong> Assistance bureautique et création de rapports.</li>
              <li><strong>Woyofal:</strong> Solutions logicielles adaptées aux entreprises.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Services de Al Qalam"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Notre Mission */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 mb-16 p-4 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-blue-500 mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Participer activement au développement technologique de l&apos;Afrique en promouvant les métiers du numérique et en sensibilisant la jeunesse à un usage responsable.
            </p>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white shadow-lg p-8 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl text-blue-500 mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Contactez-nous</h2>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              Vous avez une question ? Contactez-nous pour en savoir plus sur nos services et solutions adaptées à vos besoins !
            </p>
            <button className="bg-white text-blue-500 py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
              Nous Contacter
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
