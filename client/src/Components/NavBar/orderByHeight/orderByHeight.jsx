import { useDispatch } from "react-redux";
import { ByHeight } from "../../../store/actions";
import styles from "./orderByHeight.module.css"

export default function OrderByHeight() {
  const dispatch = useDispatch();

  function setOrder(e) {
    e.preventDefault();
    dispatch(ByHeight(e.target.value));
  }

  return (
    <div>Order by weight:
      <select onChange={(e) => setOrder(e)} className={styles.f}>
        <option value="All">Todos</option>
        <option value="heavy">Mas pesados</option>
        <option value="thin">Mas delgados</option>
      </select>
    </div>
  );
}
