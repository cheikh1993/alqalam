import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

interface PositionProps {
    position: string
}

const ServiceCard: React.FC<PositionProps> = ({ position }) => {
    return (
        <div
            className="flex cursor-pointer flex-col gap-4 w-full sm:w-80 p-4 shadow-lg rounded-md bg-white transition-all transform hover:scale-105 hover:shadow-xl"
            data-aos={position}
            data-aos-delay="300"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-md">
                <Image
                    src="/img.jpg"
                    width={300}
                    height={165}
                    alt="Service Image"
                    className="w-full h-auto object-cover transition-transform transform hover:scale-105"
                />
            </div>

            {/* Contenu */}
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-orange-500">
                    Maintenance Informatique
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Nous offrons des solutions complètes de maintenance informatique pour
                    assurer le bon fonctionnement de vos équipements et systèmes.
                </p>
            </div>

            {/* Bouton */}
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md mt-2 self-start hover:bg-orange-600 transition-all ease-in-out duration-300">
                En savoir plus
            </button>

            {/* Icônes des réseaux sociaux */}
            <div className="flex justify-center gap-4 mt-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-blue-600 hover:text-blue-700 text-xl transition-all ease-in-out duration-300"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-blue-500 hover:text-blue-600 text-xl transition-all ease-in-out duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-blue-400 hover:text-blue-500 text-xl transition-all ease-in-out duration-300"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="text-red-600 hover:text-red-700 text-xl transition-all ease-in-out duration-300"
                >
                    <FaYoutube />
                </a>
            </div>
        </div>
    )
}

export default ServiceCard
