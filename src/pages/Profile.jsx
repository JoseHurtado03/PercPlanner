import React from 'react'
import Header from '../components/Header.jsx'
import styles from '../CSS/Profile.module.css'

export default function Profile() {
  return (
    <div>
        <Header />
		<div className={styles.spaceTitle}>
        	<h1 className={styles.mainTitle}>Perfil de Usuario</h1>
		</div>
        <section className={styles.space}>
			<section className={styles.left}>
        		<section className={styles.profile}>
        			<img src='https://cdn-icons-png.flaticon.com/512/6073/6073873.png' className={styles.userImg}></img>
        			<h2>[Nombre de Usuario]</h2>
        		</section>
				<button className={styles.button}>Editar</button>
      		</section>
      		<section className={styles.info}>
        		<h2>Correo Electrónico</h2>
        		<input className={styles.input} placeholder="correousuario@gmail.com"></input>
        		<h2>Nombres</h2>
        		<input className={styles.input} placeholder="José Leonardo"></input>
        		<h2>Apellidos</h2>
        		<input className={styles.input} placeholder='Hurtado Vitora'></input>
        		<h2>Contraseña</h2>
        		<input className={styles.input} type='password'></input>
      		</section>
		</section>
    </div>
  )
}