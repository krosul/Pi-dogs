import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../store/actions/index";
import CartForDogs from "../cardForDogs/card";
import Navbar from "../NavBar/Navbar/Navbar";
import Paginado from "../Paginacion/paginacion";

export default function Homepage() {
  let dogs = useSelector((e) => e.dogs);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

 

  function nextHandler() {
    console.log("next");
  }
  function prevHandler() {
    console.log("prev");
  }

  return (
    <div>
      <Navbar />


      {!dogs[0] ? (
        <div>cargando</div>
      ) : (
        <Paginado dogs={dogs}/>
      )}


    </div>
  );
}
