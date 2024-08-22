import React from 'react'
import Header from '../components/Header.jsx'
import Carousel from '../components/Carousel.jsx';
import Accordion from '../components/Accordion.jsx';
import styles from '../CSS/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.forma}>
      <Header/>
      <section className={styles.containerInfo}>
        <section>
          <h2 className={styles.subtitle}>Fila de Percusión</h2>
          <h3 className={styles.text}>La fila de percusión de la Orquesta Sinfónica Francisco de Miranda, conformada por jóvenes músicos entre 16 y 25 años, ha sido un pilar fundamental desde la creación de la orquesta en 2016. Los percusionistas han demostrado un compromiso inquebrantable con la excelencia musical, destacándose en cada presentación con su precisión y versatilidad, contribuyendo de manera significativa al sonido característico de la orquesta y, en ocasiones, en ensambles de percusión. [Lo escribió ChatGPT :)]</h3>
        </section>
        <section className={styles.mainImg} />
      </section>
      <section className={styles.photos}>
        <div className={styles.carousel}>
          <Carousel />
        </div>
        <div className={styles.accordion}>
          <Accordion />
        </div>
      </section>
    </div>
  );
}