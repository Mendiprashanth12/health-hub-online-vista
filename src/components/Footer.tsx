
import { Link } from 'react-router-dom';
import { Hospital, Mail, Bell, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Hospital className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">MediCare Plus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Providing exceptional healthcare services with compassion and excellence. 
              Your health and well-being are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Emergency Care</span></li>
              <li><span className="text-gray-400">Cardiology</span></li>
              <li><span className="text-gray-400">Neurology</span></li>
              <li><span className="text-gray-400">Pediatrics</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">123 Medical Center Dr, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-400 text-sm">info@medicareplus.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MediCare Plus. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
