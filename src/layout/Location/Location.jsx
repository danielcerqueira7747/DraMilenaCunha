import style from './Location.module.css';

export default function Location() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Localização</h2>
        <p className={style.description}>
          Nosso consultório está localizado em Salvador - BA. Atendemos com hora marcada em um espaço acolhedor e confortável para você.
        </p>

        <div className={style.mapContainer}>
          <iframe
            title="Localização em Salvador"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14938.117739715343!2d-38.5168911!3d-12.9713988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71603702be0b1c1%3A0x8d8a7317f47c37f9!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1713045383660!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
