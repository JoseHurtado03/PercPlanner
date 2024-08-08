import React from 'react'
import styles from '../CSS/SignIn.module.css'
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <div className={styles.body}>
            <section className={styles.mainImg}> </section>
            <section className={styles.rightSpace}>
                <h1 className={styles.mainTitle}>Regístrate</h1>
                <section className={styles.box}>
                    <input className={styles.input} placeholder="Nombre"></input>
                    <input className={styles.input} placeholder="Apellido"></input>
                    <input className={styles.input} placeholder="Correo"></input>
                    <input className={styles.input} placeholder="Contraseña" type="password"></input>
                    <section className={styles.buttonsSpace}>
                        <button className={styles.button}>Registrarse</button>
                	</section>
				</section>
                <button className={styles.googleB}>
                  	<img src="/Google.png" alt="club" className={styles.googleIcon} />
                  	<span>Regístrate con Google</span>
                </button>
                <Link to={'/'}>
                    <h3 className={styles.link}>¿Ya tienes una cuenta? Iniciar Sesión</h3>
                </Link>
            </section>
        </div>
    )
}