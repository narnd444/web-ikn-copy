import React from "react";
import Logo from "../assets/logo/logo.png";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {

    return(
        <header className="header flex fixed top-0 left-0 w-full z-50 ">
        <div className="header-container container mx-auto flex items-center justify-between p-4">
          <div className="header-logo flex items-center">
            <img src={Logo} alt="" />
          </div>
      
         
          <nav className="header-nav hidden md:flex space-x-6 text-white ">
            <a href="#beranda" className="nav-item hover:text-blue-500">Beranda</a>
            <a href="#tentang-ikn" className="nav-item hover:text-blue-500">Tentang IKN</a>
            <a href="#struktur-organisasi" className="nav-item hover:text-blue-500">Struktur Organisasi</a>
            <a href="#berita" className="nav-item hover:text-blue-500">Berita dan Artikel</a>
            <a href="#karier" className="nav-item hover:text-blue-500">Karier</a>
          </nav>
      
          
          <div className="header-language flex items-center space-x-2">
            <button className="language-button flex items-center space-x-1 text-white px-3 py-2 rounded ">
            <IoLanguage /> Bahasa Indonesia <IoIosArrowDown />
            </button>
          </div>
      
          
          <button className="header-menu-toggle md:hidden text-gray-700 focus:outline-none">
            <svg className="menu-icon w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>
      
    )
}
export default Header