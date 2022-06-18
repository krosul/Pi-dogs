import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../../store/actions";
import styles from "./SearchByName.module.css";

export default function SearchByName() {
  const expresion = /^(?=.*?[A-Za-z])[A-Za-z+]+$/;
  const dispatch = useDispatch();

  let [input, setInput] = useState("");

  function setInputState(e) {
    e.preventDefault();
    if (expresion.test(e.target.value) || e.target.value === "") {
      setInput(e.target.value);
      dispatch(searchByName(input));
    }
  }
  useEffect(() => {
    dispatch(searchByName(input));
  }, [input,dispatch]);
  return (
    <div className={styles.divContainer}>
      search by race:
      <input
        type="text"
        placeholder="insert a race"
        className={styles.f}
        value={input}
        onChange={(e) => setInputState(e)}
      ></input>
    </div>
  );
}
