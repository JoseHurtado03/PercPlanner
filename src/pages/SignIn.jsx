import React from 'react'
import styles from '../CSS/SignIn.module.css'
import { Link } from "react-router-dom";

import { db, auth, googleProvider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

export default function SignIn() {
    async function handleClick(){
        const result = await signInWithPopup(auth, googleProvider);
        const usersCollection = collection(db, "users");

        const fullName = result.user.displayName || "";
        const namesArray = fullName.split(" ");
        const name = namesArray[0] || "";
        const lastName = namesArray.slice(1).join(" ") || "";
        await setDoc(doc(usersCollection, result.user.email), {
            id: result.user.email,
            name: name,
            lastName: lastName,
            picture: result.user.photoURL
        })
    }

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
                <button className={styles.googleB} onClick={handleClick}>
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