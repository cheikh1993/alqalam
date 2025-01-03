"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const SocialBar = () => {
    return (
        <div className="fixed top-1/3 left-0 z-50 bg-white border-r border-gray-300 p-2 shadow-md flex flex-col items-center space-y-4">
            {/* Facebook */}
            <Link href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={24} />
            </Link>
            {/* Twitter */}
            <Link href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
            </Link>
            {/* LinkedIn */}
            <Link href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={24} />
            </Link>
            {/* GitHub */}
            <Link href="https://github.com" target="_blank" className="text-gray-700 hover:text-black">
                <FaGithub size={24} />
            </Link>
        </div>
    );
};

export default SocialBar;
