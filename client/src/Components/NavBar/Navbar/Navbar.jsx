import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderByName } from "../../../store/actions";
import SearchByName from "../SearchByName/SearchByName";
import OrderByHeight from "../orderByHeight/orderByHeight";
import SearchByExistence from "../SearchByExis/SearchByExis";
import SearchByTemp from "../SearchByTemp/SearchByTemp";
import { Link } from "react-router-dom";


export default function Navbar() {
  const dispatch = useDispatch();
  //   let temperament = useSelector((e) => e.temperament);

  function setOrder(e) {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(setOrderByName(e.target.value));
  }
  return (
    <div>
      {/* <div> */}
        <SearchByExistence />
      {/* </div> */}
        <SearchByTemp/>
        <OrderByHeight/>
      <select onChange={(e) => setOrder(e)}>
        <option value="ASCENDENTE">asc 👆</option>
        <option value="DESCENDENTE">desc👇</option>
      </select>
        <SearchByName/>
        <Link to="/dogs/create">
        <button>Create Dog🐶</button>
        </Link>
    </div>
  );
}
