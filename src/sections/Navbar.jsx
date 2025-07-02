import { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { FaFileAlt } from 'react-icons/fa';

const NavItems = ({ onClick = () => {}, isOpen }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li
        key={item.id}
        className="nav-li"
        style={{
          color: isOpen ? '#ffffff' : '#1e201d', // Change text color based on isOpen state
          fontWeight: 'bold',
        }}>
        <a
          href={item.href}
          className="nav-li_a"
          onClick={onClick}
          style={{
            color: isOpen ? '#ffffff' : '#1e201d', // Ensure consistent text color
            textDecoration: 'none', // Remove default underline
            transition: 'text-decoration 0.3s ease', // Smooth transition for underline
          }}
          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')} // Add underline on hover
          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')} // Remove underline when not hovering
        >
          {item.name}
        </a>
      </li>
    ))}
    {/* Resume Button */}
    <li className="ml-4">
      <a
        href="/resume.pdf" // Replace with the actual link to your resume
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-6 py-3 rounded-full text-white font-bold text-sm"
        style={{ backgroundColor: '#1e201d' }}>
        <FaFileAlt className="mr-2 text-lg" /> Resume
      </a>
    </li>
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="font-bold text-xl" style={{ color: '#1e201d' }}>
            Hargun Singh
          </a>

          <button
            onClick={toggleMenu}
            className="focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            style={{ color: '#1e201d' }}>
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems isOpen={false} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
