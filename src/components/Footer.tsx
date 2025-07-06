import React from 'react';
import { Mountain, Phone, Mail, MapPin, Heart, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 dark:bg-black text-white transition-colors duration-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <Link 
              to="/"
              className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-2 rounded-full">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Outreach Living</h1>
                <p className="text-sm text-blue-400 font-medium">Mountain Church</p>
              </div>
            </Link>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              A place where faith moves mountains and lives are transformed through God's love. 
              Join our church family and discover your purpose in Christ.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">Mathare North, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">+(254) 722-222-222</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">info@outreachlivingmountain.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/schedule" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">Weekly Schedule</Link></li>
              <li><Link to="/prayer" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">Prayer Requests</Link></li>
              <li><Link to="/donate" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Ministries</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 dark:text-gray-400">Sunday School</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Youth Fellowship</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Men's Ministry</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Women's Ministry</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Community Outreach</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Choir & Worship</span></li>
            </ul>
          </div>
        </div>

        {/* Service Times */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Sunday Services</h4>
              <div className="space-y-2 text-gray-300 dark:text-gray-400">
                <div>Sunday School: 9:00 AM</div>
                <div>Morning Worship: 10:30 AM</div>
                <div>Evening Service: 6:00 PM</div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Prayer Lines</h4>
              <div className="space-y-2 text-gray-300 dark:text-gray-400">
                <div>Pastor's Line: +(254) 722-222-222</div>
                <div>24/7 Prayer: +(254) 722-222-222</div>
                <div>Always available for you</div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 p-3 rounded-full transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 dark:bg-gray-900 hover:bg-pink-600 p-3 rounded-full transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 dark:bg-gray-900 hover:bg-red-600 p-3 rounded-full transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700 bg-black dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-center">
            <p className="text-gray-700 dark:text-gray-200 text-xs order-1 md:order-none">
              Built by <a href="https://brian-masheti.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Brian Masheti</a>
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold order-2 md:order-none">
              © 2025 Outreach Living Mountain Church. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 text-sm order-3 md:order-none">
              <span>Made with 💓</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for God's Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;