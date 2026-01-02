'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      company,
      message,
      recipient: 'rayanhfaiedh920@gmail.com'
    });
    // Reset form or show a success message
    setName('');
    setCompany('');
    setMessage('');
  };

  return (
    <section className="py-20 w-full text-center">
      <h2 className="text-3xl font-bold">Let’s Build the Future of Tech Content.</h2>
      <div className="mt-8 max-w-xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-tech-blue hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
