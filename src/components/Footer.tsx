import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-bold text-rose-500">Nihal Reyyan Güzellik</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your premier destination for beauty and wellness treatments. 
              Experience luxury and excellence in every service.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 text-sm">Facial Treatments</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Hair Styling</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Nail Care</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm">Massage Therapy</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-center justify-center'>
            <h3 className="font-semibold text-gray-900 mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-rose-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  123 Beauty Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-rose-500" />
                <span className="text-gray-600 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-rose-500" />
                <span className="text-gray-600 text-sm">info@bellabeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Nihal Reyyan Güzellik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}