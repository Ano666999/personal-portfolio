import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Invio in corso...');
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-screen-md mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Contattami Ora, che aspetti!
        </h1>
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-300">
          Compila il modulo qui sotto per metterti in contatto con me.
        </p>
        <form 
          onSubmit={handleSubmit} 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Nome</label>
            <input 
              type="text" 
              name="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              placeholder="Inserisci il tuo nome" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              placeholder="Inserisci la tua email" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Messaggio</label>
            <textarea 
              name="message" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              rows="5" 
              placeholder="Scrivi il tuo messaggio" 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Invia Messaggio
          </button>
          {status && <p className="mt-4 text-gray-700 dark:text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
