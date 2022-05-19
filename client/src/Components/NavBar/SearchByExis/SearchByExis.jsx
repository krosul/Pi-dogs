import React from "react";
import { useDispatch } from "react-redux";
import { ByExistence } from "../../../store/actions";


export default function SearchByExistence() {
    const dispatch= useDispatch()
    

    function setOrder(e){
        e.preventDefault();
        dispatch(ByExistence(e.target.value))
    }

    return (
        <select onChange={e=>setOrder(e)} >
            <option value="ALL">todos los 🐶</option>
            <option value="ONLY_IN_API">🐶 de la api</option>
            <option value="ONLY_IN_DATA_BASE">🐶 de la base de datos</option>
        </select>
    )

}
