import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNavigation = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Outreach Living
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Mountain Church</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A place where faith moves mountains and lives are transformed through God's love
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => handleNavigation('schedule')}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Our Services
            </button>
            <button
              onClick={() => handleNavigation('prayer')}
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Prayer Requests
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 dark:hover:bg-opacity-90 transition-all duration-300 border border-white border-opacity-20 dark:border-gray-700">
              <div className="bg-amber-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loving Community</h3>
              <p className="text-blue-100 dark:text-gray-300">Experience God's love through genuine fellowship and support from our church family.</p>
            </div>

            <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 dark:hover:bg-opacity-90 transition-all duration-300 border border-white border-opacity-20 dark:border-gray-700">
              <div className="bg-amber-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outreach Ministry</h3>
              <p className="text-blue-100 dark:text-gray-300">Serving our community with compassion and bringing hope to those in need.</p>
            </div>

            <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 dark:hover:bg-opacity-90 transition-all duration-300 border border-white border-opacity-20 dark:border-gray-700">
              <div className="bg-amber-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Life Transformation</h3>
              <p className="text-blue-100 dark:text-gray-300">Discover your purpose and experience the life-changing power of God's word.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;