import React from 'react';

const events = [
  {
    title: 'Sunday Service',
    date: 'Every Sunday, 10:00 AM',
    description: 'Join us for worship and fellowship.'
  },
  {
    title: 'Youth Meeting',
    date: 'Fridays, 6:00 PM',
    description: 'A time for young people to connect and grow.'
  },
  // Add more events as needed
];

const Events: React.FC = () => {
  return (
    <section style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <h2>Upcoming Events</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {events.map((event, idx) => (
          <li key={idx} style={{ marginBottom: 24, borderBottom: '1px solid #eee', paddingBottom: 16 }}>
            <h3 style={{ margin: 0 }}>{event.title}</h3>
            <div style={{ color: '#2563eb', fontWeight: 500 }}>{event.date}</div>
            <p style={{ margin: '8px 0 0 0' }}>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Events;
