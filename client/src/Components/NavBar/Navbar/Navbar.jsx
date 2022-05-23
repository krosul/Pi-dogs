import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderByName } from "../../../store/actions";
import SearchByName from "../SearchByName/SearchByName";
import OrderByHeight from "../orderByHeight/orderByHeight";
import SearchByExistence from "../SearchByExis/SearchByExis";
import SearchByTemp from "../SearchByTemp/SearchByTemp";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../image/2926722-removebg-preview.png";

export default function Navbar() {
  const dispatch = useDispatch();
  //   let temperament = useSelector((e) => e.temperament);

  function setOrder(e) {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(setOrderByName(e.target.value));
  }
  return (
    <div className={styles.Principal}>
      <div className={styles.containerSecondary}>
        <img src={logo} alt="logo perrito" className={styles.logo} />

        <div className={styles.containerFilters}>
          <SearchByExistence />
          <SearchByTemp />
        </div>
        <div className={styles.containerOrders}>
          <OrderByHeight />
          <div>
            order alphabetically:
            <select onChange={(e) => setOrder(e)} className={styles.f}>
              <option value="ASCENDENTE">asc 👆</option>
              <option value="DESCENDENTE">desc👇</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.containerInput}>
        <SearchByName />
        <Link to="/dogs/create">
          <button className={styles.button}>
            <p className={styles.buttonContent}>Create Dog🐶</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
