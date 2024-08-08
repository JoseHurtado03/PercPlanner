import React from 'react'
import Header from '../components/Header.jsx'
import PieceCard from '../cards/PieceCard.jsx'
import styles from '../CSS/Repertoire.module.css'

export default function Repertoire() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Repertorio</h1>
        <PieceCard />
        <PieceCard />
      </div>
    </div>
  )
}
