import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartForDogs from "../cardForDogs/card";
import style from "./paginacion.module.css";

export default function Paginado(props) {
  const dogs = useSelector((e) => e.dogs);

  const [currentPage, setCurrentPage] = useState(1); //para tener un estado que indica nuestr pagina actual

  const dogsPerPage = 8; //La cantidad de perros a mostrar en cada pagina

  const pageNumberLimit = 5; //este estado es para la cantidad de
  //numeros de pagina que queremos mostrar

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5); //El limite de paginas maximas

  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); //El limite de paginas minimas

  const indexOfLastItem = currentPage * dogsPerPage;

  const indexOfFirstItem = indexOfLastItem - dogsPerPage;

  const currentDogs = props.dogs.slice(indexOfFirstItem, indexOfLastItem);

  function handleClick(e) {
    setCurrentPage(Number(e.target.id));
    window.scrollTo(0, 0);
  }

  const dogsToShow = currentDogs.map((dog) => {
    return <CartForDogs dog={dog} key={dog.id}></CartForDogs>;
  });

  useEffect(() => {
    setCurrentPage(1);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  }, [dogs]);

  const pages = [];

  for (let i = 1; i <= Math.ceil(props.dogs.length / dogsPerPage); i++) {
    pages.push(i);
  }

  const NumberOfPages = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? style.pageNumberSelected
              : style.pageNumbers
          }
        >
          {number}
        </button>
      );
    }
  });

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }
  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  return (
    <div>
      <div className={style.containerFromCards}>{dogsToShow.map((e) => e)}</div>
      <div className={style.C}>
        <ul>
          <div className={style.numbers}>
            <button
              className={style.next}
              onClick={handlePrevPage}
              disabled={currentPage === pages[0] ? true : false}
            >
              {"<"}
            </button>

            {NumberOfPages}

            <button
              className={style.next}
              onClick={handleNextPage}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              {">"}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
