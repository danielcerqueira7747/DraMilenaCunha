import style from './Location.module.css';

export default function Location() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Localização</h2>
        <p className={style.description}>
          Nosso consultório está localizado na Avenida São Rafael, 2152 – São Marcos, Salvador – BA. Atendemos com hora marcada em um espaço acolhedor e confortável para você.
        </p>

        <div className={style.mapContainer}>
          <iframe
            title="Localização em Salvador"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14928.820033591753!2d-38.4243465!3d-12.9404626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71611d4df82f059%3A0x9b4fa6a40ffac38f!2sAv.%20S%C3%A3o%20Rafael%2C%202152%20-%20S%C3%A3o%20Marcos%2C%20Salvador%20-%20BA%2C%2041395-000!5e0!3m2!1spt-BR!2sbr!4v1721048753309!5m2!1spt-BR!2sbr"
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
