import React, { useState } from 'react';
import AddPieceCard from './AddPieceCard.jsx';
import styles from '../CSS/AddRepertoireCard.module.css';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
    <path d="M33.9996 11.0452C34.4314 11.0457 34.8468 11.211 35.1608 11.5075C35.4748 11.8039 35.6637 12.2091 35.689 12.6402C35.7144 13.0713 35.5741 13.4958 35.2969 13.8269C35.0198 14.1581 34.6266 14.3709 34.1978 14.4219L33.9996 14.4337H33.8623L32.3053 33.0708C32.3054 34.3673 31.81 35.6148 30.9206 36.5581C30.0312 37.5013 28.8149 38.0691 27.5206 38.1452L27.2225 38.1536H13.6682C10.9608 38.1536 8.74806 36.0375 8.59896 33.4944L8.59049 33.2114L7.02667 14.4337H6.89113C6.45929 14.4333 6.04394 14.2679 5.72993 13.9715C5.41592 13.675 5.22695 13.2699 5.20164 12.8388C5.17634 12.4077 5.3166 11.9832 5.59376 11.652C5.87093 11.3209 6.26409 11.1081 6.6929 11.0571L6.89113 11.0452H33.9996ZM23.8339 4.26808C24.7326 4.26808 25.5945 4.62509 26.23 5.26057C26.8654 5.89604 27.2225 6.75794 27.2225 7.65664C27.222 8.08847 27.0566 8.50383 26.7602 8.81784C26.4637 9.13185 26.0586 9.32081 25.6275 9.34612C25.1964 9.37143 24.7719 9.23117 24.4407 8.954C24.1096 8.67684 23.8968 8.28368 23.8458 7.85487L23.8339 7.65664H17.0568L17.0449 7.85487C16.9939 8.28368 16.7811 8.67684 16.45 8.954C16.1188 9.23117 15.6943 9.37143 15.2632 9.34612C14.8321 9.32081 14.427 9.13185 14.1305 8.81784C13.8341 8.50383 13.6687 8.08847 13.6682 7.65664C13.668 6.80174 13.9908 5.97834 14.5721 5.35149C15.1534 4.72464 15.9502 4.34067 16.8027 4.27655L17.0568 4.26808H23.8339Z" fill="black"/>
  </svg>
);

export default function AddRepertoireCard() {
  const [pieces, setPieces] = useState([<AddPieceCard key={0} />]);

  const addPiece = () => {
    setPieces([...pieces, <AddPieceCard key={pieces.length} />]);
  };

  const removePiece = () => {
    if (pieces.length > 1) {
      setPieces(pieces.slice(0, -1));
    }
  };

  return (
    <div className={styles.card}>
      <section className={styles.pieceContainer}>
        {pieces.map((piece, index) => (
          <div key={index}>{piece}</div>
        ))}
      </section>
      <section>
        <button className={styles.button} style={{ backgroundColor: "#96FFCD" }} onClick={addPiece}>+</button>
        <button className={styles.button} style={{ backgroundColor: "#FF9696" }} onClick={removePiece}>
          <TrashIcon />
        </button>
      </section>
    </div>
  );
}
