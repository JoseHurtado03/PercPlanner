import React from 'react';
import styles from '../CSS/Accordion.module.css';

const cardsData = [
  {
    title: 'Luis Chuecos',
    imgSrc: '/LC.jpg',
  },
  {
    title: 'Felice Di Nicola',
    imgSrc: '/assets/02.jpg',
  },
  {
    title: 'Jose Hurtado',
    imgSrc: '/Prueba.jpg',
  },
  {
    title: 'Isabella Da Costa',
    imgSrc: '/assets/04.jpg',
  },
  {
    title: 'Samuel Curtis',
    imgSrc: '/assets/05.jpg',
  },
  {
    title: 'Luis Romero',
    imgSrc: '/assets/05.jpg',
  },
  {
    title: 'Alberto Cojedes',
    imgSrc: '/assets/05.jpg',
  },
  {
    title: 'Yendris Acevedo',
    imgSrc: '/assets/05.jpg',
  },
];

const GamepadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-gamepad-2"
  >
    <line x1="6" x2="10" y1="11" y2="11" />
    <line x1="8" x2="8" y1="9" y2="13" />
    <line x1="15" x2="15.01" y1="12" y2="12" />
    <line x1="18" x2="18.01" y1="10" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);

const Accordion = () => {
  return (
    <div className={styles.container}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <img
            className={styles.background}
            src={card.imgSrc}
            alt={card.title}
          />

          <div className={styles.cardContent}>
            <div className={styles.profileImage}>
              <GamepadIcon />
            </div>

            <h3 className={styles.title}>{card.title}</h3>
          </div>
          <div className={styles.backdrop}></div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
