import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterByTemp, getTemperaments } from "../../../store/actions";
import styles from "./SearchByTemp.module.css"

export default function SearchByTemp() {
  let temperaments = useSelector((e) => e.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function onChangeTemp(e) {
    e.preventDefault();
    dispatch(FilterByTemp(e.target.value));
  }

  return (
    <>
      {!temperaments.data ? (
        <select>
          <option>cargando</option>
        </select>
      ) : (
        <div>
          Filter by temperament:
          <select onChange={(e) => onChangeTemp(e)} className={styles.f}>
            <option value="ALL" className={styles.f}>All</option>
            {temperaments.data.map((e) => {
              return (
                <option value={e.name} key={e.id} className={styles.f}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </>
  );
}
