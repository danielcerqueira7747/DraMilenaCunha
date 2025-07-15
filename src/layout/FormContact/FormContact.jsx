import { useState } from 'react';
import style from './FormContact.module.css';

export default function FormContact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = '5571999970396';
    const text = `Olá, meu nome é ${name}. ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  return (
    <section id='schedule' className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Entre em contato</h2>
        <p className={style.subtitle}>Preencha o formulário e fale diretamente com a Dra. Milena pelo WhatsApp.</p>

        <form id='contactForm' onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={style.input}
          />

          <textarea
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={style.textarea}
          />

          <button type="submit" className={style.button}>
            Enviar para o WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
