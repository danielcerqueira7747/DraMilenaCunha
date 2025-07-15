import style from './SocialMedia.module.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <section className={style.section} id='contact'>
      <div className={style.container}>
        <h2 className={style.title}>Siga nas redes sociais</h2>
        <p className={style.subtitle}>
          Acompanhe os conteúdos e novidades da Dra. Milena Cunha.
        </p>

        <div className={style.socials}>
          <a
            href="https://wa.me/5571999970396"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconButton}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/dra.milenacunha"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconButton}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100068088259934"
            target="_blank"
            rel="noopener noreferrer"
            className={style.iconButton}
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
}
