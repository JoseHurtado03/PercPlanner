import React from 'react'
import styles from '../CSS/PieceCard.module.css'

export default function PieceCard() {
  return (
    <div className={styles.card}>
        <h1>Nombre de la Obra</h1>
        <h2>Compositor: [Author Name]</h2>
        <h2>Duracion: [Piece Time]</h2>
        <h2>Instrumento: [Tacet]</h2>
    </div>
  )
}
