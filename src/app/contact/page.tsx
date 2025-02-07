import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-secondary text-white text-center">
      <h2 className="text-4xl mb-4 animate-fadeInDown">Contact</h2>
      <form className="max-w-lg mx-auto text-left">
        <label htmlFor="name" className="block text-lg mb-2">Name</label>
        <input type="text" id="name" name="name" required className="w-full p-2 mb-4 border-none rounded-md animate-fadeIn" />

        <label htmlFor="email" className="block text-lg mb-2">Email</label>
        <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border-none rounded-md animate-fadeIn" />

        <label htmlFor="message" className="block text-lg mb-2">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full p-2 mb-4 border-none rounded-md animate-fadeIn"></textarea>

        <button type="submit" className="mt-8 px-8 py-4 bg-accent text-white font-bold uppercase transition duration-300 animate-slideInUp hover:bg-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
