import style from './Location.module.css';

export default function Location() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Localização</h2>
        <p className={style.description}>
          Nosso consultório está localizado na Av. Tancredo Neves, 2539, Caminho das Árvores. CEO Salvador Shopping, Salvador - BA. Atendemos com hora marcada em um espaço acolhedor e confortável para você.
        </p>

        <div className={style.mapContainer}>
          <iframe
            title="Localização em Salvador"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15613.309264579545!2d-38.4570558!3d-12.9803314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36393ee2caf69bb0!2sCEO%20Salvador%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1727750791234"
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
