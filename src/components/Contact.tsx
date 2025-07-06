import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Accessibility } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            We would love to meet you! Come as you are and experience the warmth of our church family. 
            Here's everything you need to know for your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Church Address</h4>
                  <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                    Mathare North<br />
                    Nairobi, 00100<br />
                    Kenya
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-3 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone Numbers</h4>
                  <div className="text-gray-300 dark:text-gray-400 space-y-1">
                    <div>Main Office: <a href="tel:+254722222222" className="text-amber-400 hover:text-amber-300">+(254) 722-222-222</a></div>
                    <div>Pastor's Line: <a href="tel:+254722222222" className="text-amber-400 hover:text-amber-300">+(254) 722-222-222</a></div>
                    <div>Prayer Hotline: <a href="tel:+254722222222" className="text-amber-400 hover:text-amber-300">+(254) 722-222-222</a></div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-3 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email Addresses</h4>
                  <div className="text-gray-300 dark:text-gray-400 space-y-1">
                    <div>General: <a href="mailto:info@outreachlivingmountain.org" className="text-amber-400 hover:text-amber-300">info@outreachlivingmountain.org</a></div>
                    <div>Pastor: <a href="mailto:pastor@outreachlivingmountain.org" className="text-amber-400 hover:text-amber-300">pastor@outreachlivingmountain.org</a></div>
                    <div>Prayer: <a href="mailto:prayer@outreachlivingmountain.org" className="text-amber-400 hover:text-amber-300">prayer@outreachlivingmountain.org</a></div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Office Hours</h4>
                  <div className="text-gray-300 dark:text-gray-400 space-y-1">
                    <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                    <div>Saturday: 10:00 AM - 2:00 PM</div>
                    <div>Sunday: Before & After Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visitor Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Plan Your Visit</h3>
            
            <div className="space-y-8">
              {/* Service Times */}
              <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-amber-400">Sunday Service Times</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700 dark:border-gray-600">
                    <span>Sunday School</span>
                    <span className="font-semibold">9:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700 dark:border-gray-600">
                    <span>Morning Worship</span>
                    <span className="font-semibold">10:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Evening Service</span>
                    <span className="font-semibold">6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-amber-400">What to Expect</h4>
                <ul className="space-y-3 text-gray-300 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    Warm, friendly welcome from our greeting team
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    Contemporary worship with traditional elements
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    Practical, Bible-based messages
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    Children's programs during main service
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    Fellowship and refreshments after service
                  </li>
                </ul>
              </div>

              {/* Facilities */}
              <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-amber-400">Facilities & Accessibility</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">Free Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Accessibility className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">Wheelchair Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-400">•</span>
                    <span className="text-sm">Nursery Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-400">•</span>
                    <span className="text-sm">Audio System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 text-center h-64 flex items-center justify-center">
            <div>
              <MapPin className="h-16 w-16 text-gray-600 dark:text-gray-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-400 dark:text-gray-500 mb-2">[Interactive Map Placeholder]</h4>
              <p className="text-gray-500 dark:text-gray-600">Google Maps integration showing church location and directions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Visit?</h3>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We can't wait to meet you! If you have any questions before your visit, 
            don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254722222222"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
            >
              Call Us Today
            </a>
            <a
              href="mailto:info@outreachlivingmountain.org"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;