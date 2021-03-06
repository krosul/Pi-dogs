import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, PostDogs } from "../../store/actions";
import style from "./createdog.module.css";
import Validate from "./validaciones/Validate";
import { Link } from "react-router-dom";

export default function Createdog() {
  let dispatch = useDispatch();
  //   function scrollWin() {
  //     window.scrollTo(0, 0);
  // }
  // FUNCION PARA VOLVAR AL PRINCIPIO DE LA PAGINA
  let temperaments = useSelector((e) => e.temperaments.data);
  let resetInput = {
    name: "",
    maxHeight: "",
    minHeight: "",
    maxWeight: "",
    minWeight: "",
    maxlifeSpan: "",
    minlifeSpan: "",
    temperament: [],
  };
  let [input, setInput] = useState({
    name: "",
    maxHeight: "",
    minHeight: "",
    maxWeight: "",
    minWeight: "",
    maxlifeSpan: "",
    minlifeSpan: "",
    temperament: [],
  });

  let [error, setError] = useState({});

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function setStateInput(e) {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(Validate({ ...input, [e.target.name]: e.target.value }));
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    dispatch(
      PostDogs({
        name: `${input.name}`,
        weight: `${input.minWeight} - ${input.maxWeight}`,
        height: `${input.minHeight} - ${input.maxHeight}`,
        life_span: `${input.minlifeSpan} - ${input.maxlifeSpan}`,
        temperament: input.temperament,
      })
    );
    setInput(resetInput);
    alert("dog created");
  }

  function setStateTemperaments(e) {
    e.preventDefault();
    if (input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: input.temperament.filter((n) => n !== e.target.value),
      });
      return;
    }
    setInput({
      ...input,
      temperament: input.temperament.concat(e.target.value),
    });
  }

  return (
    <div className={style.containerAll}>
      <div className={style.card}>
        <Link to="/dogs/">
          <div className={style.container}>
            <div className={style.full}></div>
            <div className={style.arrow}></div>
          </div>
          <div className={style.full}></div>
        </Link>
        <div>
          <h1>Create a breed</h1>
        </div>

        <form className={style.form} onSubmit={(e) => onHandleSubmit(e)}>
          <div className={style.containerInput}>
            name:
            <input
              type="text"
              className={style.input}
              placeholder="breed name"
              value={input.name}
              name="name"
              onChange={(e) => setStateInput(e)}
            ></input>
            <p>{error.name}</p>
          </div>
          <div className={style.containerInput}>
            maxHeight:
            <input
              type="number"
              className={style.input}
              placeholder="max height"
              value={input.maxHeight}
              name="maxHeight"
              onChange={(e) => setStateInput(e)}
            ></input>
            <p>{error.maxHeight}</p>
            minHeight:
            <input
              type="number"
              className={style.input}
              placeholder="min height"
              value={input.minHeight}
              name="minHeight"
              onChange={(e) => setStateInput(e)}
            ></input>
            <p>{error.minHeight}</p>
          </div>
          <div>
            <div className={style.containerInput}>
              maxWeight:
              <input
                type="number"
                className={style.input}
                placeholder="max weight"
                value={input.maxWeight}
                name="maxWeight"
                onChange={(e) => setStateInput(e)}
              ></input>
              <p>{error.maxWeight}</p>
            </div>
            <div className={style.containerInput}>
              minWeight:
              <input
                type="number"
                className={style.input}
                placeholder="min weight"
                value={input.minWeight}
                name="minWeight"
                onChange={(e) => setStateInput(e)}
              ></input>
              <p>{error.minWeight}</p>
            </div>
          </div>

          <div className={style.containerInput}>
            maximum years of life:
            <input
              type="number"
              className={style.input}
              placeholder="maximum years of life"
              value={input.maxlifeSpan}
              name="maxlifeSpan"
              onChange={(e) => setStateInput(e)}
            ></input>
            <p>{error.maxlifeSpan}</p>
          </div>
          <div className={style.containerInput}>
            minimun years of life:
            <input
              type="number"
              className={style.input}
              placeholder="minimun years of life"
              value={input.minlifeSpan}
              name="minlifeSpan"
              onChange={(e) => setStateInput(e)}
            ></input>
            <p>{error.minlifeSpan}</p>
          </div>
          <div className={style.containerButtons}>
            {temperaments &&
              temperaments.map((e) => {
                return (
                  <button
                    key={e.id}
                    className={
                      input.temperament.includes(e.id)
                        ? style.buttonA
                        : style.button
                    }
                    value={e.id}
                    onClick={(e) => setStateTemperaments(e)}
                  >
                    {e.name}
                  </button>
                );
              })}
          </div>
          <button
            type="submit"
            className={style.button}
            disabled={
              Object.keys(error).length !== 0 ||
              !input.name ||
              !input.maxHeight ||
              !input.maxWeight ||
              !input.maxlifeSpan ||
              !input.minHeight ||
              !input.minWeight ||
              !input.minlifeSpan ||
              !input.temperament[0]
                ? true
                : false
            }
          >
            Finish
          </button>
        </form>
      </div>
    </div>
  );
}
