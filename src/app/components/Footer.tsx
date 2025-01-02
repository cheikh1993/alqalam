import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Section 1: Logo et description */}
          <div className="flex flex-col items-center sm:items-start">
            <Image src="/logo.png" alt="Logo Al Qalam Services" width={150} height={150} />
            <p className="mt-4 text-lg text-gray-400 text-center sm:text-left">
              Al Qalam Services fournit des solutions informatiques innovantes pour aider les entreprises à prospérer dans le monde numérique.
            </p>
          </div>

          {/* Section 2: Liens */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-gray-400 text-center sm:text-left">
              <li><a href="#services" className="hover:text-orange-500 transition">Nos Services</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition">A propos de nous</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition">FAQ</a></li>
              <li><a href="#blog" className="hover:text-orange-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Section 3: Contact et réseaux sociaux */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-center sm:text-left">
              <li><span className="block">Email: contact@alqalamservices.com</span></li>
              <li><span className="block">Téléphone: +123 456 7890</span></li>
            </ul>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: Newsletter */}
        <div className="mt-12 bg-custumColor p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Abonnez-vous à notre Newsletter</h3>
          <p className="text-lg text-gray-300 mb-4">Recevez les dernières actualités et offres directement dans votre boîte de réception.</p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Votre email"
              className="p-3 w-full sm:w-80 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-600 transition-all">
              S&apos;abonner
            </button>
          </form>
        </div>

        {/* Section 5: Footer bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Al Qalam Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
