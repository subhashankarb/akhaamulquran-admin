import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Smartphone, Globe } from 'lucide-react'; // Make sure to install lucide-react or use text icons

export default function LandingLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-emerald-600 font-bold' : 'text-gray-600 hover:text-emerald-500';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-500">
                AkhaamUlQuran
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <Link to="/products" className={isActive('/products')}>Products</Link>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
              <Link 
                to="/login" 
                className="px-5 py-2 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-emerald-50 text-gray-700">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-emerald-50 text-gray-700">About Us</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-emerald-50 text-gray-700">Products</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-emerald-50 text-gray-700">Contact</Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 mt-4 text-center rounded-md bg-emerald-600 text-white font-bold">Login</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">AkhaamUlQuran</h3>
            <p className="text-gray-400 max-w-sm">
              Bridging the gap between technology and spirituality. The world's most advanced AI-powered Quran recitation assistant.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400">Our App</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Download</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded border border-slate-700">
                <Smartphone className="text-emerald-400" /> <span>App Store</span>
              </button>
              <button className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded border border-slate-700">
                <Globe className="text-emerald-400" /> <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-slate-800 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} AkhaamUlQuran. All rights reserved.
        </div>
      </footer>
    </div>
  );
}