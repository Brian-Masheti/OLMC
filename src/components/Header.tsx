import React, { useState } from 'react';
import { Menu, X, Mountain, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/about', label: 'About' },
  { id: '/schedule', label: 'Schedule' },
  { id: '/prayer', label: 'Prayer' },
  { id: '/donate', label: 'Donate' },
  { id: '/contact', label: 'Contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-2 rounded-full">
              <Mountain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Outreach Living</h1>
              <p className="text-sm text-blue-800 dark:text-blue-400 font-medium">Mountain Church</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  location.pathname === item.id
                    ? 'text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 hover:scale-105'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-left ${
                    location.pathname === item.id
                      ? 'text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;