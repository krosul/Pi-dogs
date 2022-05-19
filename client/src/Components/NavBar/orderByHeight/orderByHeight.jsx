import { useDispatch } from "react-redux";
import { ByHeight } from "../../../store/actions";



export default function OrderByHeight() {
  const dispatch = useDispatch();


  function setOrder(e) {
    e.preventDefault();
    dispatch(ByHeight(e.target.value))
  }

  return (
    <select onChange={e => setOrder(e)}>
      <option value="All">Todos</option>
      <option value="heavy">Mas pesados</option>
      <option value="thin">Mas delgados</option>
    </select>
  );
}