import React from "react"

interface ListItemProps{
    text:string
}
const ListItem:React.FC<ListItemProps> = ({ text }) => (
    <li className="flex items-center gap-3">
        <span className="text-green-500 flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        </span>
        {text}
    </li>
)

export default ListItem
