import React from 'react';

const Donations: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Support Our Mission</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Your generosity helps us reach more people, support our ministries, and make a lasting impact in our community.<br />
        Every gift, no matter the size, enables us to share God’s love, provide for those in need, and continue the work of Outreach Living Mountain Church.<br />
        <span className="font-semibold">Thank you for partnering with us to make a difference!</span>
      </p>
      {/* Replace with your payment integration (PayPal, Stripe, etc.) */}
      <button
        className="px-8 py-3 rounded-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        type="button"
      >
        Donate Now
      </button>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        For bank transfers or other ways to give, please contact the church office.
      </p>
    </section>
  );
};

export default Donations;
