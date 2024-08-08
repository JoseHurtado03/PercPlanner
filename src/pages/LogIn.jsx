import React from 'react'
import { Link } from "react-router-dom";
import styles from '../CSS/LogIn.module.css'

export default function LogIn() {
    return (
        <div className={styles.body}>
            <section className={styles.leftSpace}>
                <h1 className={styles.mainTitle}>Inicio de Sesión</h1>
                <section className={styles.box}>
                    <input className={styles.input} placeholder="Correo"></input>
                    <input className={styles.input} placeholder="Contraseña" type="password"></input>
                    <section className={styles.buttonsSpace}>
                        <button className={styles.button}>Iniciar</button>
                	</section>
				</section>
                <button className={styles.googleB}>
                  	<img src="/Google.png" alt="club" className={styles.googleIcon} />
                  	<span>Iniciar con Google</span>
                </button>
                <Link to={'/signIn'}>
                    <h3 className={styles.link}>¿No tienes una cuenta? Regístrate</h3>
                </Link>
            </section>
            <section className={styles.mainImg}> </section>
        </div>
    )
}
