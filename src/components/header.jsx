import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/logo.png";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Bahasa Indonesia");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`flex fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="header-container container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="header-logo flex items-center max-sm:h-2 md:h-6">
          <img src={Logo} alt="Logo" className="object-cover p-4 max-sm:h-20" />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="header-nav transition-all duration-300 hidden md:flex space-x-6 text-white">
          <a href="#beranda" className="nav-item relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Beranda
          </a>
          <a href="#tentang-ikn" className="nav-item relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Tentang IKN
          </a>
          <a href="#struktur-organisasi" className="nav-item relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Struktur Organisasi
          </a>
          <a href="#berita" className="nav-item relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Berita dan Artikel
          </a>
          <a href="#karier" className="nav-item relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
            Karier
          </a>
        </nav>

        {/* Language Dropdown */}
        <div className="header-language hidden md:flex relative items-center space-x-2 hover:scale-110 transition-all duration-300">
          <button
            className="language-button flex items-center space-x-1 text-white px-3 py-2 rounded focus:outline-none"
            onClick={toggleDropdown}
          >
            <IoLanguage />
            {selectedLanguage}
            <IoIosArrowDown />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu absolute top-full mt-2 right-0 bg-primary rounded shadow-lg text-white w-40">
              <button
                className="dropdown-item w-full text-left px-4 py-2 hover:bg-secondary"
                onClick={() => changeLanguage("Bahasa Indonesia")}
              >
                Bahasa Indonesia
              </button>
              <button
                className="dropdown-item w-full text-left px-4 py-2 hover:bg-secondary"
                onClick={() => changeLanguage("English")}
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header-menu-toggle md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="menu-icon w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-primary text-white fixed w-full h-screen flex flex-col items-center justify-center space-y-6">
          <a
            href="#beranda"
            className="mobile-nav-item text-lg relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={toggleMobileMenu}
          >
            Beranda
          </a>
          <a
            href="#tentang-ikn"
            className="mobile-nav-item text-lg relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={toggleMobileMenu}
          >
            Tentang IKN
          </a>
          <a
            href="#struktur-organisasi"
            className="mobile-nav-item text-lg relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={toggleMobileMenu}
          >
            Struktur Organisasi
          </a>
          <a
            href="#berita"
            className="mobile-nav-item text-lg relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={toggleMobileMenu}
          >
            Berita dan Artikel
          </a>
          <a
            href="#karier"
            className="mobile-nav-item text-lg relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={toggleMobileMenu}
          >
            Karier
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
