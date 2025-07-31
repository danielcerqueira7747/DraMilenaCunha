import style from './Specialties.module.css';

export default function Specialties() {
  const specialties = [
    { title: 'Angina (dor no peito)', description: 'Dor no peito causada por redução do fluxo sanguíneo para o coração.' },
    { title: 'Estenose aórtica', description: 'Estreitamento da válvula aórtica que dificulta o fluxo sanguíneo.' },
    { title: 'Fibrilação atrial', description: 'Ritmo cardíaco irregular e frequentemente acelerado.' },
    { title: 'Hipotensão postural (Tontura)', description: 'Queda da pressão ao levantar-se, causando tontura ou desmaio.' },
    { title: 'Insuficiência aórtica', description: 'A válvula aórtica não fecha direito, permitindo refluxo de sangue.' },
    { title: 'Insuficiência mitral', description: 'A válvula mitral não fecha totalmente, permitindo refluxo ao átrio.' },
    { title: 'Pressão alta', description: 'Pressão sanguínea elevada cronicamente (hipertensão).' },
    { title: 'Arritmia cardíaca', description: 'Batimentos cardíacos fora do ritmo normal.' },
    { title: 'Estenose mitral', description: 'Estreitamento da válvula mitral, dificultando o fluxo entre câmaras.' },
    { title: 'Desmaio (Síncope)', description: 'Desmaio por resposta exagerada a estímulos como calor ou dor.' },
    { title: 'Infarto', description: 'Bloqueio do fluxo sanguíneo que causa dano ao músculo cardíaco.' },
    { title: 'Insuficiência cardíaca', description: 'Coração não consegue bombear sangue suficiente.' },
    { title: 'Pericardite', description: 'Inflamação da membrana ao redor do coração com dor e febre.' },
    { title: 'Prolapso da Valva Mitral', description: 'Válvula mitral se projeta anormalmente durante a contração.' },
    { title: 'Cardiologia Esportiva', description: 'Avalia a saúde cardiovascular de atletas e praticantes de esportes.' },
  ];

  return (
    <section className={style.section}>
      <h2 className={style.title}>Especialidades</h2>
      <div className={style.grid}>
        {specialties.map((item, index) => (
          <div key={index} className={style.card}>
            <h3 className={style.cardTitle}>{item.title}</h3>
            <p className={style.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
