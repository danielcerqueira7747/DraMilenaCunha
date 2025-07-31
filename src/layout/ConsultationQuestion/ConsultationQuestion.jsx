import style from './ConsultationQuestion.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function ConsultationQuestion() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Por que devo procurar por um cardiologista?</h2>
        <p className={style.subtitle}>
          Cuidar do coração é essencial! Doenças cardiovasculares são a principal causa de mortes no Brasil, mas muitas podem ser prevenidas com acompanhamento médico.
        </p>
        <ul className={style.list}>
          <li>Você tem histórico familiar de problemas cardíacos;</li>
          <li>Apresenta sintomas como dores no peito, falta de ar ou cansaço excessivo;</li>
          <li>Possui fatores de risco como hipertensão, diabetes ou obesidade;</li>
          <li>Vai iniciar atividades físicas intensas.</li>
        </ul>
        <a
          id='btn-whatsapp-consultation'
          href="https://wa.me/5571999970396"
          target="_blank"
          rel="noopener noreferrer"
          className={style.button}
        >
          <FaWhatsapp className={style.icon} />
          Agendar no WhatsApp
        </a>
      </div>
    </section>
  );
}
