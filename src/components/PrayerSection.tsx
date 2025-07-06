import React, { useState } from 'react';
import { Phone, Heart, Send, Clock, Shield, Sparkles } from 'lucide-react';

const PrayerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prayerType: 'general',
    message: '',
    anonymous: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your prayer request. Our prayer team will lift you up in prayer.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      prayerType: 'general',
      message: '',
      anonymous: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-blue-800 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Prayer & Support</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We believe in the power of prayer and are here to support you in your time of need. 
            Our dedicated prayer team is committed to lifting you up before God.
          </p>
        </div>

        {/* Prayer Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pastor's Prayer Line */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 dark:border-gray-700">
            <div className="text-center">
              <div className="bg-blue-800 dark:bg-blue-700 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pastor's Prayer Line</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Call Pastor directly for urgent prayer needs and spiritual counseling
              </p>
              <a
                href="tel:+1234567890"
                className="bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 inline-block mb-4"
              >
                Call +(254) 722-222-222
              </a>
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4 mr-2" />
                Available: Mon-Fri 9AM-6PM
              </div>
            </div>
          </div>

          {/* 24/7 Prayer Hotline */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100 dark:border-gray-700">
            <div className="text-center">
              <div className="bg-amber-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">24/7 Prayer Hotline</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our prayer warriors are available around the clock for emergency prayer
              </p>
              <a
                href="tel:+1234567891"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 inline-block mb-4"
              >
                Call +(254) 722-222-222
              </a>
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <Sparkles className="h-4 w-4 mr-2" />
                Available: 24 hours, 7 days a week
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Request Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Submit a Prayer Request</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Share your prayer needs with our caring prayer team. All requests are handled with 
              complete confidentiality and love.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name {!formData.anonymous && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={formData.anonymous}
                  required={!formData.anonymous}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 dark:bg-gray-700 dark:text-white dark:disabled:bg-gray-600"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={formData.anonymous}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 dark:bg-gray-700 dark:text-white dark:disabled:bg-gray-600"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={formData.anonymous}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 dark:bg-gray-700 dark:text-white dark:disabled:bg-gray-600"
                  placeholder="+(254) 722-222-222"
                />
              </div>

              {/* Prayer Type */}
              <div>
                <label htmlFor="prayerType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Prayer Request Type
                </label>
                <select
                  id="prayerType"
                  name="prayerType"
                  value={formData.prayerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="general">General Prayer</option>
                  <option value="healing">Healing & Health</option>
                  <option value="family">Family & Relationships</option>
                  <option value="financial">Financial Needs</option>
                  <option value="spiritual">Spiritual Growth</option>
                  <option value="thanksgiving">Thanksgiving & Praise</option>
                  <option value="urgent">Urgent/Emergency</option>
                </select>
              </div>
            </div>

            {/* Anonymous Option */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mr-3"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Submit this prayer request anonymously
                </span>
              </label>
            </div>

            {/* Prayer Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Prayer Request Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical dark:bg-gray-700 dark:text-white"
                placeholder="Please share your prayer request with us. We will lift you up in prayer with love and confidentiality."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <Send className="h-5 w-5 mr-3" />
                Submit Prayer Request
              </button>
            </div>
          </form>
        </div>

        {/* Inspirational Scripture */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
            <blockquote className="text-2xl font-light italic mb-4">
              "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, 
              and it will be yours."
            </blockquote>
            <p className="text-blue-200 dark:text-gray-300 font-semibold">Mark 11:24 (NIV)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerSection;