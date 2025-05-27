"use client"

import React, {useState} from "react";
import Image from "next/image";

let mockVideosArray = [
    "Most recent",
    "Most liked",
    "Most viewed"
]

const DropDownList = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
             <div className="filter-trigger">
                 <figure>
                     <Image
                     src="/assets/icons/hamburger.svg"
                     alt="menu"
                     width={16}
                     height={16}
                     />
                     Most recent videos
                 </figure>
                 <Image
                 src="/assets/icons/arrow-down.svg"
                 alt="arrow-down"
                 width={20}
                 height={20}
                 />
             </div>

                {
                    isOpen && (
                        <ul className="dropdown">
                            {mockVideosArray.map((option) => (
                                <li key={option} className="list-item">
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default DropDownList;