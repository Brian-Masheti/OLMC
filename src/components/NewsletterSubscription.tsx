import React, { useEffect, useState } from 'react';

const NEWSLETTER_KEY = 'newsletter_popup_shown';

const NewsletterSubscription: React.FC = () => {
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState<'email' | 'whatsapp' | null>(null);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup only if not shown before
    if (!localStorage.getItem(NEWSLETTER_KEY)) {
      setTimeout(() => setShow(true), 1000); // Show after 1s
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem(NEWSLETTER_KEY, 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the input to your backend/newsletter service
    setSubmitted(true);
    setTimeout(handleClose, 2000); // Auto-close after 2s
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 320, maxWidth: '90vw', boxShadow: '0 2px 16px rgba(0,0,0,0.2)' }}>
        <button onClick={handleClose} style={{ float: 'right', fontSize: 18, border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
        <h2 style={{ marginTop: 0 }}>Subscribe to Church Newsletters</h2>
        {submitted ? (
          <div style={{ color: 'green', margin: '16px 0' }}>Thank you for subscribing!</div>
        ) : method ? (
          <form onSubmit={handleSubmit}>
            <label>
              {method === 'email' ? 'Email Address:' : 'WhatsApp Number:'}
              <input
                type={method === 'email' ? 'email' : 'tel'}
                value={input}
                onChange={e => setInput(e.target.value)}
                required
                style={{ display: 'block', width: '100%', margin: '8px 0 16px 0', padding: 8 }}
                placeholder={method === 'email' ? 'you@email.com' : '+1234567890'}
              />
            </label>
            <button type="submit" style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4 }}>Subscribe</button>
          </form>
        ) : (
          <>
            <p>Stay updated with church activities and events. How would you like to receive updates?</p>
            <div style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
              <button onClick={() => setMethod('email')} style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4 }}>Email</button>
              <button onClick={() => setMethod('whatsapp')} style={{ padding: '8px 16px', background: '#25D366', color: '#fff', border: 'none', borderRadius: 4 }}>WhatsApp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
