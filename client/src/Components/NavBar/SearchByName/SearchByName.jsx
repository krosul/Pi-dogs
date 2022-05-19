import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../../store/actions";

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
  }, [input]);
  return (
    <>
      <input
        type="text"
        placeholder="search by breed"
        value={input}
        onChange={(e) => setInputState(e)}
      ></input>
    </>
  );
}
