import { useEffect } from 'react';
import style from './Cards.module.css';

export default function Cards() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://www.instagram.com/embed.js');
      script.setAttribute('async', '');
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      if (window.instgrm) window.instgrm.Embeds.process();
    }
  }, []);

  const posts = [
    'https://www.instagram.com/p/DLP84V3th4H/',
    'https://www.instagram.com/p/DLnIBQ3vJ9G/',
    'https://www.instagram.com/p/DLDE3yUu1H8/',
  ];

  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Acompanhe a Dra. Milena no Instagram</h2>
        <p className={style.subtitle}>Conteúdos sobre saúde, bem-estar e transformação de vidas.</p>

        <div className={style.grid}>
          {posts.map((link, index) => (
            <blockquote
              key={index}
              className="instagram-media"
              data-instgrm-permalink={`${link}?utm_source=ig_embed`}
              data-instgrm-version="14"
              style={{
                background: '#fff',
                border: 0,
                borderRadius: 8,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                margin: '0 auto',
                maxWidth: 400,
                minWidth: 300,
                width: '100%',
              }}
            ></blockquote>
          ))}
        </div>

        <a
          href="https://www.instagram.com/dra.milenacunha"
          target="_blank"
          rel="noopener noreferrer"
          className={style.button}
        >
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}
