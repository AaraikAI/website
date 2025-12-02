import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-white">
        <h4 className="text-lg font-semibold mb-1">Thanks! We'll be in touch shortly.</h4>
        <p className="text-white/80 text-sm">We received your request. Check your email for a confirmation.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" onSubmit={onSubmit} className="grid gap-3">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-white/90" htmlFor="name">Full name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-xl px-3 py-2 bg-white text-gray-900 border border-gray-200" />
        </div>
        <div>
          <label className="text-sm text-white/90" htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl px-3 py-2 bg-white text-gray-900 border border-gray-200" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-white/90" htmlFor="company">Company</label>
          <input id="company" name="company" required className="mt-1 w-full rounded-xl px-3 py-2 bg-white text-gray-900 border border-gray-200" />
        </div>
        <div>
          <label className="text-sm text-white/90" htmlFor="interest">I'm interested in</label>
          <select id="interest" name="interest" required className="mt-1 w-full rounded-xl px-3 py-2 bg-white text-gray-900 border border-gray-200">
            <option value="pilot">Start a Pilot</option>
            <option value="demo">Request a Demo</option>
            <option value="coaching">Book Coaching</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm text-white/90" htmlFor="message">What would you like to achieve?</label>
        <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl px-3 py-2 bg-white text-gray-900 border border-gray-200" placeholder="e.g., Stand up a RAG pilot over our Confluence + Google Drive, with governance reviews" />
      </div>

      <button type="submit" className="mt-1 inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white text-gray-900 font-medium hover:opacity-90">Send</button>
      {error && <p className="text-sm text-red-200">{error}</p>}
    </form>
  );
};

export default ContactForm;