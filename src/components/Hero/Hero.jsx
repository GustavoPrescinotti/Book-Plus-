import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.imageWrapper}>
        <img 
          alt="Ambiente de leitura aconchegante" 
          className={css.heroImage} 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv" 
        />
      </div>
      <div className={`${css.gradientOverlay} hero-gradient`}></div>
      <div className={css.contentContainer}>
        <div className={css.textContent}>
          <span className={css.badge}>
            Curadoria Exclusiva
          </span>
          <h2 className={css.title}>
            Descubra seu <br />
            <span className={css.highlightText}>próximo capítulo.</span>
          </h2>
          <p className={css.description}>
            Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
          </p>
          <div className={css.buttonGroup}>
            <a className={css.primaryButton} href="#catalogo">
              Explorar Catálogo
            </a>
            <a className={css.secondoBotao} href="#">
              Ver Promoções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}