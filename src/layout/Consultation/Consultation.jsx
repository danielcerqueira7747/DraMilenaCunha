import style from './Consultation.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Consultation() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Agende sua consulta agora mesmo</h2>
        <p className={style.subtitle}>
          Entre em contato pelo WhatsApp e marque seu horário com a Dra. Milena Cunha.
        </p>
        <a
          id='btn-whatsapp-consultation'
          href="https://wa.me/5571999970396"
          target="_blank"
          rel="noopener noreferrer"
          className={style.button}
        >
          <FaWhatsapp className={style.icon} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
