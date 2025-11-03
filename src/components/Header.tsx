import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './LayoutComponents';
import logo from '../default_images/logo_default.webp';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const fuehrerscheineSubpages = [
    { name: 'Klasse A', path: '/fuehrerscheine/klasse-a' },
    { name: 'Klasse B', path: '/fuehrerscheine/klasse-b' },
    { name: 'Klasse C', path: '/fuehrerscheine/klasse-c' },
    { name: 'Klasse D', path: '/fuehrerscheine/klasse-d' },
    { name: 'Klasse L', path: '/fuehrerscheine/klasse-l' },
    { name: 'Klasse T', path: '/fuehrerscheine/klasse-t' },
  ];

  return (
    <header className="sticky top-0 z-50 pt-0 pb-0">
      {/* Top Bar - Contact Information */}
      <div className="bg-secondary-800 py-1 md:py-2">
        <Container>
          <div className="flex items-center justify-center">
            <div className="flex md:hidden items-center space-x-2 text-header-text text-xs font-medium">
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>0123 456789</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@fuehrerschein.de</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-header-text text-sm font-semibold">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>0123 456789</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@fuehrerschein.de</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Berlin</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar - Navigation */}
      <div className="bg-primary-500 py-4">
        <Container>
          <div className="relative flex items-center justify-center md:justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeMenus}>
              <img src={logo} alt="Führerschein Website" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-6 text-header-text font-bold">
              <Link to="/" className="hover:text-secondary-800 transition-colors font-bold" onClick={closeMenus}>
                Home
              </Link>

              {/* Führerscheine Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-secondary-800 transition-colors flex items-center font-bold"
                >
                  Führerscheine
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-secondary-800 border border-secondary-700 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                  <Link
                    to="/fuehrerscheine"
                    className="block px-4 py-2 text-header-text hover:bg-secondary-700"
                    onClick={closeMenus}
                  >
                    Übersicht
                  </Link>
                  {fuehrerscheineSubpages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block px-4 py-2 text-header-text hover:bg-secondary-700"
                      onClick={closeMenus}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/ueber-uns" className="hover:text-secondary-800 transition-colors font-bold" onClick={closeMenus}>
                Über Uns
              </Link>
              <Link to="/kontakt" className="hover:text-secondary-800 transition-colors font-bold" onClick={closeMenus}>
                Kontakt
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              to="/anmelden"
              className="hidden md:block bg-secondary-800 text-header-text px-4 py-2 rounded-md hover:bg-secondary-700 transition-colors ml-auto font-bold"
              onClick={closeMenus}
            >
              anmelden
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-header-text hover:text-secondary-800 font-bold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-secondary-700">
              <nav className="flex flex-col space-y-2 text-header-text">
                <Link to="/" className="hover:text-secondary-800 py-2 font-bold" onClick={closeMenus}>
                  Home
                </Link>

                {/* Mobile Führerscheine Section */}
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="hover:text-secondary-800 py-2 flex items-center w-full text-left font-bold"
                  >
                    Führerscheine
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="ml-4 space-y-1">
                      <Link
                        to="/fuehrerscheine"
                        className="block text-secondary-300 hover:text-secondary-800 py-1 font-semibold"
                        onClick={closeMenus}
                      >
                        Übersicht
                      </Link>
                      {fuehrerscheineSubpages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block text-secondary-300 hover:text-secondary-800 py-1 font-semibold"
                          onClick={closeMenus}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/ueber-uns" className="hover:text-secondary-800 py-2 font-bold" onClick={closeMenus}>
                  Über Uns
                </Link>
                <Link to="/kontakt" className="hover:text-secondary-800 py-2 font-bold" onClick={closeMenus}>
                  Kontakt
                </Link>
                <Link to="/anmelden" className="bg-secondary-800 text-header-text px-4 py-2 rounded-md hover:bg-secondary-700 transition-colors inline-block font-bold" onClick={closeMenus}>
                  anmelden
                </Link>
              </nav>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;