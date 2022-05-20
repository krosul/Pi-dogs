import React, { useState } from "react";
import CartForDogs from "../cardForDogs/card";
import style from "./paginacion.module.css";
export default function Paginado(props) {
  const [currentPage, setCurrentPage] = useState(1); //para tener un estado que indica nuestr pagina actual

  const [dogsPerPage, setdogsPerPage] = useState(8); //La cantidad de perros a mostrar en cada pagina

  const [pageNumberLimit, setpageNumberLimit] = useState(5); //este estado es para la cantidad de
  //numeros de pagina que queremos mostrar

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5); //El limite de paginas maximas

  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0); //El limite de paginas minimas

  const indexOfLastItem = currentPage * dogsPerPage;

  const indexOfFirstItem = indexOfLastItem - dogsPerPage;

  const currentDogs = props.dogs.slice(indexOfFirstItem, indexOfLastItem);
  console.log(props.dogs);
  function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  }

  const dogsToShow = currentDogs.map((dog, index) => {
    return <CartForDogs dog={dog} key={dog.id}></CartForDogs>;
  });

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
          className={currentPage === number ? "active" : null}
        >
          {number}
        </button>
      );
    } else return;
  });

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }
  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
    
    if ((currentPage - 1)% pageNumberLimit===0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  return (
    <div>
      <div className={style.containerFromCards}>

      {dogsToShow.map((e) => e)}
      </div>  

      <ul className={style.pageNumbers}>
      <div className={style.numbers}>
        <button onClick={handlePrevPage} disabled={currentPage===pages[0]?true:false}>prev</button>

        {NumberOfPages}

        <button onClick={handleNextPage} disabled={currentPage===pages[pages.length-1]?true:false}>next</button>
      </div>
      </ul>
    </div>
  );
}
