import style from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={style.hero}>
      <div className={style.overlay}>
        <div className={style.content}>
          <h1 className={style.title}>Prevenir. Cuidar. Transformar vidas.</h1>
          <p className={style.subtitle}>
            Tratamento de obesidade, saúde do coração e qualidade de vida com acolhimento e ciência.
          </p>
          <a
            id='btn-whatsapp-herosection'
            href="https://wa.me/5571999970396"
            target="_blank"
            rel="noopener noreferrer" className={style.ctaButton}>
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
