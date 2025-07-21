import style from './About.module.css';
import { FaWhatsapp } from 'react-icons/fa';

import AboutImage from '../../assets/image_about.jpg'

export default function About() {
  return (
    <section id="about" className={style.section}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img
            src={AboutImage}
            alt="Dra. Milena Cunha"
            className={style.image}
          />
        </div>

        <div className={style.content}>
          <h2 className={style.title}>Sobre a Dra. Milena Cunha</h2>
          <p className={style.text}>
            Sou a <strong>Dra. Milena Cunha</strong>, cardiologista com foco em emagrecimento e obesidade.
            <br /><br />
            Acredito em uma medicina que acolhe, que transforma e que cuida do corpo e da mente com equilíbrio e propósito.
            <br /><br />
            📍 Se você busca um acompanhamento humanizado e eficaz, agende sua consulta comigo e dê o primeiro passo rumo a uma vida mais leve e saudável.
            <br /><br />
            👩🏻‍⚕️ Dra. Milena Cunha<br />
            ❤️ Cardiologista – Foco em prevenção, obesidade e qualidade de vida<br />
            📱 WhatsApp: (71) 99997-0396<br />
            📍 Salvador – BA
          </p>

          <a
            id='btn-whatsapp-about'
            href="https://wa.me/5571999970396"
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            <FaWhatsapp className={style.icon} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
