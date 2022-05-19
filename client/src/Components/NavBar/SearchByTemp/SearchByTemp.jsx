import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterByTemp, getTemperaments } from "../../../store/actions";


export default function SearchByTemp() {
    let temperaments=useSelector(e=>e.temperaments)
    const dispatch = useDispatch();
    
  useEffect(() => {

    dispatch(getTemperaments())
}, []); 

  function onChangeTemp(e){
      e.preventDefault()
      dispatch(FilterByTemp(e.target.value))
  }


  return (<>
      {!temperaments.data?(
          <select>
        <option>cargando</option>
        </select>
      ):(
          <select onChange={e=>onChangeTemp(e)}>
            <option value="ALL">All</option>
              {temperaments.data.map(e=>{
                  return <option value={e.name} key={e.id}>{e.name}</option>
              })}
        </select>
      )}
      </>
  );
}
