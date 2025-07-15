import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={style.header}>
      <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
        <div className="container">
          <a className={`navbar-brand ${style.brand}`} href="/">
            Dra. Milena Cunha
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${style.navLinks}`}>
              <li className="nav-item">
                <a className={`nav-link ${style.link}`} href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${style.link}`} href="#contact">
                  Contato
                </a>
              </li>
            </ul>

            <a href="#schedule" className={`btn ${style.ctaButton}`}>
              Agendar consulta
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
