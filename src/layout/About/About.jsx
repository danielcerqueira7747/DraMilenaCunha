import style from './About.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className={style.section}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img
            src="https://scontent-for2-1.xx.fbcdn.net/v/t39.30808-1/492196579_1035281522084780_3670839138614976109_n.jpg?stp=c0.114.853.853a_dst-jpg_s720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=4iTf-eEG8PIQ7kNvwHrSGLt&_nc_oc=Adm6XgzrgorFHyVBeogRYxltrp7vYLVPyKactBYohcuGMD2TNJDS8qPc92-Qtnr8HNo&_nc_zt=24&_nc_ht=scontent-for2-1.xx&_nc_gid=qGptZ60a3y662hSi8htl9A&oh=00_AfShCP_MyVcTld0m8Ctmq9RnjazZYXE6xHlgRw9jSe_ILg&oe=687C232B"
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
