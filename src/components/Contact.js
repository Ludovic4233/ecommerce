import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Votre message a été envoyé à l'administrateur !");
  };

  return (
    <div className="contact">
      <h2>Contacter l'administrateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Votre adresse email :</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Votre message :</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
