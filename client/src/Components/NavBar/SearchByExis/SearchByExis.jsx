import React from "react";
import { useDispatch } from "react-redux";
import { ByExistence } from "../../../store/actions";
import styles from "./SearchByExis.module.css"

export default function SearchByExistence() {
    const dispatch= useDispatch()
    

    function setOrder(e){
        e.preventDefault();
        dispatch(ByExistence(e.target.value))
    }

    return (
        <div>
            Filter by existence:
        <select onChange={e=>setOrder(e)} className={styles.f}>
            <option value="ALL">todos los 🐶</option>
            <option value="ONLY_IN_API">🐶 de la api</option>
            <option value="ONLY_IN_DATA_BASE">🐶 de la base de datos</option>
        </select>
        </div>
    )

}
