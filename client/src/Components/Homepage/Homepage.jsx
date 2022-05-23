import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../store/actions/index";
import Navbar from "../NavBar/Navbar/Navbar";
import Paginado from "../Paginacion/paginacion";
import styles from "./Homepage.module.css";
import photoNotFound from "../../image/photoNotFound.png";

export default function Homepage() {
  let dogs = useSelector((e) => e.dogs);
  let dispatch = useDispatch();
  let [notFound, setNotFound] = useState(0);
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  useEffect(() => {
    return setNotFound(0);
  }, [dogs]);
  setTimeout(() => {
    setNotFound(1);
  }, 6000);

  return (
    <div>
      <Navbar />

      {!dogs[0] ? (
        !notFound ? (
          <div className={styles.loader}></div>
        ) : (
          <div className={styles.photo}>
            <h1>dog breed not found</h1>
            <img src={photoNotFound} alt="dog breed not found" />
          </div>
        )
      ) : (
        <Paginado dogs={dogs} />
      )}
    </div>
  );
}
