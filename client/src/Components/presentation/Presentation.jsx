import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Presentation.module.css"


export default function Presentation(){
    let dogs=useSelector(e=>e.dogs)
    return (
        <div className={styles.contenedorPrincipal}>

        <h1>Bienvenido Al mundo perruno</h1>

        <Link to="/dogs">
            <button className={styles.btn}>Me gustaria saber mas</button>
        </Link>




        </div>
     )
}