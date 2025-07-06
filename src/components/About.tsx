import React from 'react';
import { Mountain, Book, Handshake, Star } from 'lucide-react';
import GalleryCarousel from './GalleryCarousel';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Our Church</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Outreach Living Mountain Church is a vibrant community located in Mathare North, Nairobi, Kenya, dedicated to spreading God's love 
            and transforming lives through faith, fellowship, and service.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission & Vision</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We believe that faith can move mountains, and our mission is to help every person 
              discover their God-given purpose while building a stronger community through love, 
              compassion, and service.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our church family welcomes everyone, regardless of where you are in your spiritual 
              journey. Whether you're seeking answers, looking for community, or wanting to grow 
              deeper in your faith, you'll find a home here.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Church Family</div>
              </div>
            </div>
          </div>

          {/* Mountain Image */}
          <div className="rounded-2xl overflow-hidden h-96 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <img
              src="https://images.pexels.com/photos/32745006/pexels-photo-32745006.jpeg"
              alt="Mountain - Outreach Living Mountain Church"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Gallery Section */}
        <GalleryCarousel />

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Book className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Biblical Teaching</h4>
            <p className="text-gray-600 dark:text-gray-300">Grounded in Scripture and relevant to daily life</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Handshake className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community Service</h4>
            <p className="text-gray-600 dark:text-gray-300">Actively serving and supporting our local community</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Authentic Worship</h4>
            <p className="text-gray-600 dark:text-gray-300">Heartfelt praise and worship that honors God</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Mountain className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Faith in Action</h4>
            <p className="text-gray-600 dark:text-gray-300">Living out our faith through love and service</p>
          </div>
        </div>

        {/* Pastor Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-16 h-16 mx-auto mb-3">
                    <Mountain className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-blue-800 dark:text-blue-400 font-medium">[Pastor Photo]</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Pastor</h3>
              <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4">Reverend Stephen Mwale - Senior Pastor</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Reverend Stephen Mwale is our spiritual father and mentor, a dependable leader who truly connects with his congregation. Through his compassionate guidance, heartfelt prayers, and unwavering faith, he inspires and uplifts everyone he meets. Reverend Mwale is dedicated to walking alongside each member of our church family, offering wisdom, encouragement, and support on their spiritual journey.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "Our heart is to see every person experience the transforming power of God's love 
                and find their place in His kingdom purpose."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;