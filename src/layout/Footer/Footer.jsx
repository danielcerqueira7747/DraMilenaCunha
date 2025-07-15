import style from './Footer.module.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container text-center">
        <h2 className={style.brand}>Dra. Milena Cunha</h2>

        <div className={style.socials}>
          <a href="https://wa.me/5571999970396" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/dra.milenacunha" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className={style.copy}>
            Site desenvolvido por
            <a
              href="https://agenciabrazu.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
             Brazu Agência de Marketing
            </a>
            &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
