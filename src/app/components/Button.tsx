import Link from "next/link"
import React from "react"

interface ButtonProps{
    text: string,
    url: string
}

const Button: React.FC<ButtonProps> = ({ text, url }) => (
    <Link
        href={url}
        className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
    >
        {text}
    </Link>
)

export default Button
