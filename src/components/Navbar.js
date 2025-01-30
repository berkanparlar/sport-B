import { Link } from "react-router-dom";
import { useState } from "react";
import {Menu, X} from "lucide-react";//hamburger menü ikonlar

function Navbar(){

    const [isOpen, setIsOpen]= useState(false);

    return(
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link to="/" className="text-2xl font-bold">
                Sport-B
                </Link>
                {/* Hamburger menü butonu (mobil) */}
                
                <button 
                className="md:hidden block text-white"
                onClick={()=>setIsOpen(!isOpen)}>


                    {isOpen? <X size={30}/>:<Menu size={30}/>}

                </button>
                {/* Menü */}
                <ul
                className={`md:flex md:space-x-6 md:relative absolute md:bg-transparent bg-gray-900 w-full md:w-auto md:flex-row flex-col items-center text-center transition-all duration-300 ${
                    isOpen ? "top-16" : "-top-60"
                } md:top-0`}                
                >
                    <li className="p-4 md:p-0">
                        <Link to="/" className="hover:text-gray-400">
                            Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <Link to="/Services" className="hover:text-gray-400">
                            Hizmetlerimiz
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="hover:text-gray-400">
                            İletişim
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;