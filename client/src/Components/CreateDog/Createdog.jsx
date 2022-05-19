import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../store/actions";
import style from "./createdog.module.css";
import Validate from "./validaciones/Validate";

export default function Createdog() {
  let dispatch = useDispatch();
//   function scrollWin() {
//     window.scrollTo(0, 0);
// }
// FUNCION PARA VOLVAR AL PRINCIPIO DE LA PAGINA
  let temperaments = useSelector((e) => e.temperaments.data);

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
  }, []);

  function setStateInput(e) {
    e.preventDefault();

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(Validate({...input,[e.target.name]: e.target.value }));
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    console.log("entro a hacer el despacho de la accion para crear al nuevo perro")
  }
  console.log(Object.keys(error).length&&input.name?true:false)

  
  
  
  function setStateTemperaments(e){
    e.preventDefault()
    if(input.temperament.includes(e.target.value)){
      setInput({...input,temperament:input.temperament.filter(n=>n!==e.target.value)})
      return
    }
    setInput({...input,temperament:input.temperament.concat(e.target.value)})
  }




  return (
    <div className={style.card}>
      <h1>Create a breed</h1>

      <form className={style.form} onSubmit={(e) => onHandleSubmit(e)}>
        <div>
          name:
          <input
            className={style.input}
            placeholder="breed name"
            value={input.name}
            name="name"
            onChange={(e) => setStateInput(e)}
          ></input>
          <p>{error.name}</p>
        </div>
        <div>
          maxHeight:
          <input 
          className={style.input}
          placeholder="max height"
          value={input.maxHeight}
          name="maxHeight"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.maxHeight}</p>
          
          
          minHeight:
          <input 
          className={style.input}
          placeholder="min height"
          value={input.minHeight}
          name="minHeight"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.minHeight}</p>
        </div>
        <div>

        <div>

          maxWeight:<input 
          className={style.input}
          placeholder="max weight"
          value={input.maxWeight}
          name="maxWeight"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.maxWeight}</p>
          
        </div>
          
          
          
          minWeight:<input 
          className={style.input}
          placeholder="min weight"
          value={input.minWeight}
          name="minWeight"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.minWeight}</p>
        </div>

          <div>

          maximum years of life:<input 
          className={style.input}
          placeholder="maximum years of life"
          value={input.maxlifeSpan}
          name="maxlifeSpan"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.maxlifeSpan}</p>
          
          
          </div>
          <div>

          minimun years of life:<input 
          className={style.input}
          placeholder="minimun years of life"
          value={input.minlifeSpan}
          name="minlifeSpan"
          onChange={e=>setStateInput(e)}></input>
          <p>{error.minlifeSpan}</p>
          </div>
        <div>

        {temperaments&& temperaments.map(e=>{
          return <button 
          key={e.id} 
          className={input.temperament.includes(e.id)?style.buttonA:style.button} 
          value={e.id}
          onClick={e=>setStateTemperaments(e)}>{e.name}</button>
        })}
        </div>
        <button 
        type="submit" 
        className={style.button}
        disabled={Object.keys(error).length&&input.name?false:true}>
          Finish
        </button>
      </form>
    </div>
  );
}
