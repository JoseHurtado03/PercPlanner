import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../CSS/LogIn.module.css'

import { db, auth, googleProvider } from '../../firebase'
import { signInWithPopup, getAdditionalUserInfo,onAuthStateChanged } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

export default function LogIn() {
    const [user, setUser] = useState();

    async function handleClick(){
        const result = await signInWithPopup(auth, googleProvider);
        const usersCollection = collection(db, "users");
        const additionalInfo = await getAdditionalUserInfo(result)

        if (additionalInfo.isNew){
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
        setUser(result.user)
        }
    }
    //Esto ayuda a que se mantenga guardado el inicio de sesión. Debería estar en otro archivo para que toda la app tenga acceso
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {setUser(user)});
    }, []);

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
                <button className={styles.googleB} onClick={handleClick}>
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
