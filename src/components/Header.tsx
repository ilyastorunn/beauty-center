import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'Anasayfa' },
  { path: '/services', label: 'Hizmetler' },

  { path: '/about', label: 'Hakkımızda' },
  // { path: '/contact', label: 'İletişim' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-page/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-bold text-rose-500">Nihal Reyyan Güzellik</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                  location.pathname === item.path
                    ? 'text-rose-500'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-rose-500 hover:bg-rose-600 text-white">
              <Link to="/contact">İletişim</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                    location.pathname === item.path
                      ? 'text-rose-500'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-rose-500 hover:bg-rose-600 text-white w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  İletişim
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}