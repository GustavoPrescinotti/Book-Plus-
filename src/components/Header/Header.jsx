import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function HeaderComponent() {
  const [menu, setMenu] = useState(false);

  const MenuHamburger = () => {
    setMenu(!menu);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logoWrapper}>
          <div className={css.iconWrapper}>
            <span className={`material-symbols-outlined ${css.icon}`}>auto_stories</span>
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className={css.title}>BOOK PLUS</h1>
          </Link>
        </div>
        
        <div className={css.navWrapper}>
          <nav className={css.nav} style={{ display: menu ? "flex" : "none" }}>
            <Link className={css.navLink} to="/catalogo">Catálogo</Link>
            <Link className={css.navLink} to="/">Lançamentos</Link>
            <Link className={css.navLink} to="/">Mais Vendidos</Link>
            <Link to="/login">
              <button className={css.button}>Login Admin</button>
            </Link>
          </nav>
          <button className={css.menuButton} onClick={MenuHamburger}>
             <p>Menu</p>
          </button>
        </div>
      </div>
    </header>
  );
}