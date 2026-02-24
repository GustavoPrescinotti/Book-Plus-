import { useState } from "react";
import css from "./Header.module.css";



export default function HeaderComponent() {
  const [menu, setMenu] = useState(false);

  const MenuHamburger = () =>{
    setMenu(!menu)
  } 

  
  return (

  
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logoWrapper}>
          <div className={css.iconWrapper}>
            <span className={`material-symbols-outlined ${css.icon}`}>auto_stories</span>
          </div>
          <h1 className={css.title}>BOOK PLUS</h1>
        </div>
        
        <div className={css.navWrapper}  >
          <nav className={css.nav} style={{ display: menu ? "flex" : "none" }}>
            <a className={css.navLink} href="#">Catálogo</a>
            <a className={css.navLink} href="#">Lançamentos</a>
            <a className={css.navLink} href="#">Mais Vendidos</a>
            <button className={css.button}>
            Login Admin
          </button>
          </nav>
        

          <button className={css.menuButton} onClick={MenuHamburger}>
             <p>Menu </p>
            </button>


        </div>
      </div>
    </header>
  );
}