import { ThemeToggle } from '../common/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
export const Header = () => {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`transition-colors ${isDarkMode ? 'bg-[#1C1C1C] text-white' : 'bg-white'}`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-3 h-3 bg-green-500"></div>
            <div className="w-3 h-3 bg-yellow-500"></div>
            <div className="w-3 h-3 bg-blue-500"></div>
            <div className="w-3 h-3 bg-red-500"></div>
          </div>
          <span className="text-xl font-bold">supertasks.io</span>
          <span className="px-2 py-1 text-xs bg-black text-white rounded">BETA</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="/workspaces" className="hover:text-gray-600">Workspaces</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/pricing" className="hover:text-gray-600">Pricing</a>
          <a href="/feedback" className="hover:text-gray-600">Feedback</a>
          <a href="/login" className="hover:text-gray-600">Login</a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t p-4 space-y-4">
          <div className="flex items-center justify-between">
            <ThemeToggle />
          </div>
          <a href="/workspaces" className="block py-2 hover:text-gray-600">Workspaces</a>
          <a href="/about" className="block py-2 hover:text-gray-600">About</a>
          <a href="/pricing" className="block py-2 hover:text-gray-600">Pricing</a>
          <a href="/feedback" className="block py-2 hover:text-gray-600">Feedback</a>
          <a href="/login" className="block py-2 hover:text-gray-600">Login</a>
        </nav>
      )}
    </header>
  );
};